import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import ImgPropiedad from '../../../public/images/330x220.png';

class Search extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
    };

    render() {
        return (
            <Container fluid className="animated fadeIn highlights">
                <Row>
                    <Col sm="12" className="text-center">
                        <hr/>
                        <h3>Presentamos las últimas novedades del <b>SIOC</b> en tiempo real!</h3>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Row>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="6" md={4}>
                                <div className="highlight-box">
                                    <div className="prop-detail-btns">
                                        <Button className="like"><FontAwesome name="heart" size="lg"/></Button>
                                    </div>
                                    <img src={ImgPropiedad} alt=""/>
                                    <Row className="highlight-body">
                                        <Col sm={12}>
                                            <h3>$1.000.000</h3>
                                            <h4 className="primary">Departamento en Venta Calle 55 e/ 4 y 5</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <span className="pull-left">Subido hace 3 mins</span>
                                            <span className="pull-right">#321321</span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="text-right">
                        <Button
                            size="lg"
                            color="light"
                            onClick={() => this.props.history.push('/dwellings/latest')}
                        > Ver más <FontAwesome name="angle-right"/>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(Search);

