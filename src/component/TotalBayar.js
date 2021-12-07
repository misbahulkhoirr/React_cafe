
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import { numberFormat } from '../Api/numberFormat';
import {API_URL} from '../Api/constants'

export default class TotalBayar extends Component {

    submitTotalBayar=(totalBayar)=>{
        const pesanan={
            total_bayar:totalBayar,
            menus:this.props.chart,
        } 

        axios
        .post(API_URL+`pesanans`,pesanan).then((res) => {
            this.props.history.push("/sukses")
        })
        .catch(error=>{
            console.log('Api ERORR',error);
          })
    }
    render() {
        const totalBayar = this.props.chart.reduce(function (result, item) {
            return result + item.total_harga;
          }, 0);
        return (
            <div className="container fixed-bottom">
                <Row>
                    <Col lg={{span: 3, offset: 9}} className="px-4">
                    <h5>Total Bayar :{" "}<strong className="float-end"> Rp. {numberFormat (totalBayar)}</strong></h5>
                    <div className="d-grid gap-2">
                    <Button variant="primary"  className="mb-3 mt-2" size="md" onClick={()=>this.submitTotalBayar(totalBayar)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> Bayar
                    </Button>
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
