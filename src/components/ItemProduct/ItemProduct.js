import React from 'react';
import './ItemProduct.scss';
// import notImg from '../../assets/not-available.png';
import star from '../../assets/rating.svg';
import heart from '../../assets/heart.svg';

const ItemProduct = (porps) => {
    
    return(
        <React.Fragment>
            <div className="item">
                <div className="item__header">
                    <img src={porps.image} alt="product-im"/>
                </div>
                <div className="item__body">
                    <ul>
                        <li className="city">{porps.city}</li>
                        <li className="name">{porps.name}</li>
                        <li className="price">Desde COP ${porps.price}</li>
                        <li className="rating">
                        <span>  <img src={star} alt="start"/>  {porps.rating} ({porps.votes}) </span>
                            <img src={heart} alt="heart" className="heart" />
                        </li>
                    </ul>
                </div>
            </div> 
        </React.Fragment> 
    )
}
export default ItemProduct;