import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menus, ListKategori, Hasil } from '../component';
import { Col, Container, Row } from 'react-bootstrap';
import {API_URL} from '../Api/constants';
import axios from 'axios'
import swal from 'sweetalert'


export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus:[],
       pilihKategori:"Makanan",
       chart:[]
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

      axios.get(API_URL+`chart`) // 
      .then(res => {
        const chart = res.data;
        this.setState({ chart });
      })
      .catch(error=>{
        console.log('Api ERORR',error);
      })
  }
  
  componentDidUpdate(prevState){
    if(this.state.chart !== prevState.chart)
    axios.get(API_URL+`chart`) // 
    .then(res => {
      const chart = res.data;
      this.setState({ chart });
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

  masukChart = (value)=>{
    axios
      .get(API_URL+"chart?product.id="+value.id)
      .then(res => {
        if(res.data.length === 0){
        const chart = {
          jumlah: 1,
          total_harga:value.harga,
          product: value
        }

        axios
        .post(API_URL+`chart`,chart)
        .then(res => {
          swal({
            title: "Sukses!",
            text: "You clicked the button!"+chart.product.nama,
            icon: "success",
            button: false,
            timer:1500
          });
        })
        .catch(error=>{
          console.log('Api ERORR',error);
        })

       }
       else{
        const chart = {
          jumlah: res.data[0].jumlah+1,
          total_harga:res.data[0].total_harga+value.harga,
          product: value,
        }

        axios
        .put(API_URL+`chart/`+res.data[0].id, chart)
        .then(res => {
          swal({
            title: "Sukses!",
            text: "You clicked the button!"+chart.product.nama,
            icon: "success",
            button: false,
            timer:1500
          });
        })
        .catch(error=>{
          console.log('Api ERORR',error);
        })

       }

      })
      .catch(error=>{
        console.log('Api ERORR',error);
      })
  }

  render() {
    // console.log(this.state.menus);
    const {menus, pilihKategori, chart} = this.state;
    return (
      
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
                masukChart={this.masukChart}
                />
              ))
            }
              </Row>
            </Col>

            <Hasil chart={chart}/>
          </Row>
        </Container>

    )
  }
}
