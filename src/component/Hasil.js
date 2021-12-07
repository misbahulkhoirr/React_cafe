import React, { Component } from 'react'
import { Col, Row, ListGroup, Badge} from 'react-bootstrap'
import { numberFormat } from '../Api/numberFormat';
import TotalBayar from './TotalBayar';

export default class Hasil extends Component {
    render() {
        const {chart}= this.props
        return (
            <Col md={3} mt="2">
                <h4>Hasil</h4>
                <hr />
                {
                    chart.length !==0 &&(
                    <ListGroup variant="flush">
                        {
                        chart.map((items)=>(
                            <ListGroup.Item>
                                <Row>
                                    <Col xs={2}>
                                    <h5>
                                        <Badge pill bg="success">
                                            {items.jumlah}
                                        </Badge>
                                    </h5>
                                    </Col>

                                    <Col>
                                    <h6>{items.product.nama}</h6>
                                    <p>Rp. { numberFormat (items.product.harga)}</p>
                                    </Col>

                                    <Col>
                                    <strong className="float-right">Rp. { numberFormat (items.total_harga)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}

                <TotalBayar char={chart}/>
                
            </Col>
        )
    }
}
