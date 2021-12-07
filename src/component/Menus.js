import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { numberFormat } from '../Api/numberFormat';

const Menus = ({menu, masukChart}) => {
    return (
        <Col lg={4} xs={12} className="mb-4 mt-3">
        <Card className="shadow">
        <Card.Img variant="top" src={ "assets/images/"+ menu.kategori.nama.toLowerCase()+"/"+ menu.gambar }/>
        <Card.Body>
            <Card.Title>{menu.nama} ({menu.kode})</Card.Title>
            <Card.Text>
            Rp. { numberFormat (menu.harga) }
            </Card.Text>
            <Button variant="primary" onClick={() => masukChart(menu)}>Pesan</Button>
        </Card.Body>
        </Card>
        </Col>
    )
}

export default Menus
