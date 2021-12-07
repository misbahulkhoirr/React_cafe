import React, { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../Api/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUtensils, faCoffee, faCheese} from '@fortawesome/free-solid-svg-icons';

const Icons=({nama})=>{
    if(nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} />
    if(nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />
    if(nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} />

    return <FontAwesomeIcon icon={faCheese} />
}
export default class ListKategori extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            kategoris:[]
        }
        }
    
        componentDidMount() {
        axios.get(API_URL+`kategoris`)
            .then(res => {
            const kategoris = res.data;
            this.setState({ kategoris });
            })
            .catch(error=>{
            console.log('Api ERORR',error);
            })
        }

    render() {
        // console.log('kategori',this.state.kategoris);
        const {kategoris} = this.state
        const {changeKategori, pilihKategori}=this.props
        return (
            <Col md={2} mt="2">
                <h4>List Kategori</h4>
                <hr />
                    <ListGroup>
                    {
                    kategoris&&kategoris.map((kategori)=>(
                        <ListGroup.Item key={kategori.id} onClick={()=>changeKategori(kategori.nama)} className={ pilihKategori === kategori.nama && "kategoriAktiv" } style={{cursor:"pointer"}}>
                            <h5>
                                <Icons nama={kategori.nama}/> {kategori.nama}
                            </h5>
                        </ListGroup.Item>
                        ))
                    }    
                    </ListGroup>
              
            </Col>
        )
    }
}
