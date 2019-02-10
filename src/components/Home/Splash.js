import React, {Component} from 'react';
import {
    InputGroup,
    FormControl,
    FormGroup,
    ToggleButtonGroup,
    ToggleButton,
    ButtonToolbar
} from 'react-bootstrap';
import {
    Container,
    Row,
    Col,
    Button,
    ButtonGroup
} from 'reactstrap';

import {map} from 'lodash';
import PropTypes from 'prop-types';
import Select from 'react-select';
import siocLogoInicio from '../../../public/images/sonrisa-sioc.png';
import {groupedOptions} from '../../data/data';
import GoogleSearchBox from '../Maps/GoogleSearchBox';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '0.3rem',
    color: '#003d6f',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center'
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);


class Splash extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            siocId: '',
            searchParams: {}
        };
    }

    handleSubmit() {
        const {onChange, onSearch} = this.props;
        const {siocId, searchParams} = this.state;
        onChange(siocId);
        onSearch(searchParams);
    }

    handleChange(e) {
        const {value} = e.target;
        if (value.length === 7) return;
        this.setState({
            siocId: value
        });
    }

    handleType(id, e) {
        this.setState(
            state => ({
                searchParams: (Object.assign(state.searchParams, {[id]: e}))
            })
        );
    }

    handleSelect(e) {
        const values = map(e, subtype => subtype.value);
        this.setState(
            state => ({
                searchParams: {...state.searchParams, subtype: values}
            })
        );
    }

    handleAddress(e) {
        delete e.altitude;
        delete e.latitude;
        this.setState(
            state => ({
                searchParams: {...state.searchParams, address: e}
            })
        );
    }

    render() {
        if (this.state.searchParams.publicationType === undefined) {
            this.state.searchParams.publicationType = 'Alquiler';
        }
        return (
            <Container fluid className="animated fadeIn landing">
                <Col sm={12} className="text-center">
                    <img src={siocLogoInicio} alt="SIOC Logo"/>
                    <Row>
                        <Col md={{size:6, offset:3}} lg={{size: 4, offset: 4}}>
                            <FormGroup>
                                <InputGroup bsSize="large">
                                    <FormControl
                                        className="home-search-input"
                                        type="number"
                                        placeholder="Código"
                                        value={this.state.siocId}
                                        maxLength={6}
                                        onChange={e => this.handleChange(e)}
                                    />
                                    {/*<InputGroup.Button>
                                        <Button color="light" onClick={() => this.handleSubmit()}>Buscar</Button>
                                    </InputGroup.Button>*/}
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <h3>
                        Miles de propiedades para <b>comprar</b>,
                        <br/> <b>vender</b> o <b>alquilar</b> están esperando tu decisión!
                    </h3>
                    <Row>
                        <Col md={{size:6, offset:3}} lg={{size: 4, offset: 4}}>
                            <FormGroup>
                                <ButtonGroup className="d-flex">
                                    <Button
                                        outline
                                        onClick={() => this.handleType('publicationType', 'Alquiler')}
                                        active={this.state.searchParams.publicationType === 'Alquiler'}
                                    >ALQUILER
                                    </Button>
                                    <Button
                                        outline
                                        onClick={() => this.handleType('publicationType', 'Venta')}
                                        active={this.state.searchParams.publicationType === 'Venta'}
                                    >
                                        VENTA
                                    </Button>
                                </ButtonGroup>
                            </FormGroup>
                        </Col>
                        <Col md={{size:6, offset:3}} lg={{size: 4, offset: 4}}>
                            <FormGroup>
                                <GoogleSearchBox onChange={e => this.handleAddress(e)}/>
                            </FormGroup>
                        </Col>
                        <Col md={{size:6, offset:3}} lg={{size: 4, offset: 4}}>
                            <FormGroup>
                                <Select
                                    isMulti
                                    options={groupedOptions}
                                    placeholder="Seleccione Tipo de Propiedad"
                                    formatGroupLabel={formatGroupLabel}
                                    onChange={e => this.handleSelect(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:6, offset:3}} lg={{size: 4, offset: 4}}>
                            <Button size="lg" block onClick={() => this.handleSubmit()}>Buscar</Button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default Splash;
