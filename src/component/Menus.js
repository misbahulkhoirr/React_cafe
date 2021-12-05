import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { numberFormat } from '../Api/numberFormat';

const Menus = ({menu}) => {
    return (
        <Col md={4} className="mb-4">
        <Card className="shadow">
        <Card.Img variant="top" src={ "assets/images/"+ menu.kategori.nama.toLowerCase()+"/"+ menu.gambar }/>
        <Card.Body>
            <Card.Title>{menu.nama} ({menu.kode})</Card.Title>
            <Card.Text>
            Rp. { numberFormat (menu.harga) }
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
</Card>
        </Col>
    )
}

export default Menus
