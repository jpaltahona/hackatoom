import React, { Component } from 'react';
import ItemProduct from '../ItemProduct/ItemProduct.js'
import './ProductList.scss';
import Api from '../../services/Api.js';
import flecha from '../../assets/dropdown.svg';

export default class ProductLIst extends Component{

constructor(){
    super()
    this.state ={
        product:[],
        filter: 'rating',
        pagination: 1
    }
    this.handleChange = this.handleChange.bind(this)
}
    async componentDidMount(){
        const productos = await Api.getfilter(this.state.filter, this.state.pagination);
        this.setState({
            product: productos.items
        });
    }

    async handleChange(event) {
        this.setState({filter: event.target.value});
        const products = await Api.getfilter(this.state.filter, this.state.pagination);
        this.setState({
            product: products.items
        });
      }
      
      async handleClick(value) {
        this.setState({
            pagination: value
        })
        const filtrado = await Api.getfilter(this.state.filter, this.state.pagination);
        this.setState({
            product: filtrado.items
        });
      }
    render(){
        return(
            <div className="list-Product">
            <div className="header">
                <div className="ordenar">
                <h2>Ordenar</h2>
                <div className="content-select">
                    <select value={this.state.filter} onChange={this.handleChange}>
                        <option value="rating">Rating</option>
                        <option value="name">Nombre</option>
                        <option value="city">Ciudad</option>
                        <option value="votes">Votos</option>
                    </select>
                        <i><img src={flecha} alt="open"/></i>
                </div> 
                </div>
                <div className="paginations">
                    <ul>
                        <li>Paginas</li> 
                        <li onClick={() => this.handleClick(1)}>1</li> 
                        <li onClick={() => this.handleClick(2)}>2</li> 
                        <li onClick={() => this.handleClick(3)}>3</li> 
                        <li onClick={() => this.handleClick(4)}>4</li>
                        <li onClick={() => this.handleClick(5)}>5</li>
                        <li>..</li>
                        <li onClick={() => this.handleClick(10)}>12</li>
                    </ul>
                </div>
            </div>
            <div className="list-Product">
                <div className="content-product">
                {this.state.product.map((item, index) => (
                    <ItemProduct 
                        key={item.id} 
                        city={item.city}
                        image={item.photo}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                        votes={item.votes}
                    />
                ))}
                </div>
            </div>
            </div>
            
        )
    }
}