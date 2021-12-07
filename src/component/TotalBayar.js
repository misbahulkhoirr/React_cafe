import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class TotalBayar extends Component {
    render() {
        return (
            <div className="fixed-bottom">
                <Row>
                    <Col lg={{span: 4, offset: 8}} className="px-4">
                    <h5>Total Bayar : Rp. 500.000</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}
