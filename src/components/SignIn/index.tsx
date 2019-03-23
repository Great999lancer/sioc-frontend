/* global window */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button, Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {Label, Input} from 'reactstrap';
import {delay} from 'lodash';
import FontAwesome from 'react-fontawesome';
// import SignIn from '../../services/signIn';
import SignInService from '../../services/signIn';
// import login from '../../services/signIn1';
import StorageService from '../../services/storage';

import {requestSaveUser} from '../../actions';

import {User} from '../../model';

import LoadingButton from '../common/LoadingButton';

const SignIn = (props) => {

    const [user, setUser] = useState(new User());
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clock, setClock] = useState(null);
    const [register, setRegister] = useState(false);
    const [invalidLogin, setInvalidLogin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await SignInService.login(email, password);
            if (result.token) {
                StorageService.setAuthToken(result.token);
                window.location = '/home';
            } else {
                setInvalidLogin(true);
            }
        } catch (ex) {
            setInvalidLogin(true);
            clearTimeout(clock);
            setClock(delay(() => setInvalidLogin(false), 3500));
        }
    };

    const handleUser = ({target: {id, value}}) => {
        setUser(new User(Object.assign(user, {[id]: value})))
    }

    const handleRegister = () => {
        setRegister(true);
    }

    const handleBack = () => {
        setRegister(false);
    }

    const handleRegisterSubmit = () => {
        props.requestSaveUser(user);
    }


    return (
        <Grid>
            {!register ?
                <Row>
                    <Col>
                        <Form onSubmit={e => handleSubmit(e)}>
                            <FormGroup>
                                <h1><FontAwesome name="chevron-circle-right"/> Iniciar sesión</h1>
                            </FormGroup>
                            <FormGroup controlId="email">
                                <FormControl
                                    type="text"
                                    value={email}
                                    placeholder="email"
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <FormControl
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" bsStyle="primary">
                                    <FontAwesome name="power-off"/> Ingresar
                                </Button>
                            </FormGroup>
                            {invalidLogin &&
                            <FormGroup className="text-center text-danger">
                                <span>El Usuario o la Contraseña son inválidos</span>
                            </FormGroup>}
                        </Form>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Button onClick={() => handleRegister()}>
                                <FontAwesome name="plus-square"/> Registrarme
                            </Button>
                        </FormGroup>
                    </Col>

                </Row>
                :
                <Row>
                    <Col>
                        <FormGroup controlId="email">
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl
                                type="email"
                                value={user.email}
                                maxLength={50}
                                onChange={e => handleUser(e)}
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <ControlLabel>Contraseña</ControlLabel>
                            <FormControl
                                type="password"
                                value={user.password}
                                maxLength={16}
                                onChange={e => handleUser(e)}
                            />
                        </FormGroup>
                        <FormGroup controlId="name">
                            <ControlLabel>Nombre</ControlLabel>
                            <FormControl
                                type="text"
                                value={user.name}
                                maxLength={50}
                                onChange={e => handleUser(e)}
                            />
                        </FormGroup>
                        <FormGroup controlId="surname">
                            <ControlLabel>Apellido</ControlLabel>
                            <FormControl
                                type="text"
                                value={user.surname}
                                maxLength={50}
                                onChange={e => handleUser(e)}
                            />
                        </FormGroup>
                        <FormGroup controlId="whatsapp">
                            <ControlLabel>whatsapp</ControlLabel>
                            <FormControl
                                type="number"
                                value={user.whatsapp}
                                onChange={e => handleUser(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">Fecha de Nacimiento</Label>
                            <Input
                                type="date"
                                name="date"
                                id="birthdate"
                                placeholder=""
                                onChange={e => handleUser(e)}
                            />
                        </FormGroup>
                        {saving && <LoadingButton/>}
                        {!saving &&
                        <Button
                            bsStyle="primary"
                            onClick={() => handleRegisterSubmit()}
                            className="btn-group-justified margin-top-h2 ta-save"
                        >
                            <FontAwesome name="floppy-o"/> Guardar
                        </Button>}
                        <Button onClick={() => handleBack()}>
                            <FontAwesome name="plus-square"/> Atras
                        </Button>
                    </Col>
                </Row>
            }
        </Grid>
    )
}

SignIn.propTypes = {
    requestSaveUser: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.instanceOf(User),
    saving: PropTypes.bool
};

SignIn.defaultProps = {
    user: new User(),
    saving: false
}

export default connect(
    state => ({
        user: state.user.user,
        saving: state.user.saving
    }),
    dispatch => ({
        requestSaveUser: user => dispatch(requestSaveUser(user))
    })
)(SignIn);