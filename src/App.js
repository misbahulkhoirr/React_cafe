import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarElement from './component/NavbarElement';
import { Col, Container, Row } from 'react-bootstrap';
import ListKategori from './component/ListKategori';
import Hasil from './component/Hasil';
import Menus from './component/Menus';
import {API_URL} from './Api/constants';
import axios from 'axios'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus:[],
       pilihKategori:"Makanan"
    }
  }

  componentDidMount() {
    // axios.get(API_URL+`products`) // menampilkan semua menu
    axios.get(API_URL+`products?kategori.nama=`+this.state.pilihKategori) // memanpilkan sesuai kategori, dibuat default kategori makanan
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error=>{
        console.log('Api ERORR',error);
      })
  }
  
  // untuk mengaktivkan list kategori saat di klik
  changeKategori=(value)=>{
    this.setState({
      pilihKategori:value,
      menus:[]
    })
    axios.get(API_URL+`products?kategori.nama=`+value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error=>{
        console.log('Api ERORR',error);
      })
  }
  render() {
    // console.log(this.state.menus);
    const {menus, pilihKategori} = this.state;
    return (
      <div className="App">
      <NavbarElement />
        <Container className="mt-2">
          <Row>
            <ListKategori changeKategori={this.changeKategori} pilihKategori={pilihKategori} />

            <Col>
            <h4>Daftar Menu</h4>
            <hr />
              <Row>
              {
              menus && menus.map((menu)=>(
                <Menus 
                key={menu.id}
                menu={menu}
                />
              ))
            }
              </Row>
            </Col>

            <Hasil />
          </Row>
        </Container>
    </div>
    )
  }
}
