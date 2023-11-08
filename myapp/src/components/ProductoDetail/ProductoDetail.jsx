import React from 'react';

const ProductoDetail = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={props.imgSrc} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p>Precio: ${props.price}</p>
                <p>SKU: {props.sku}</p>
                <p>Stock: {props.stock}</p>
                <a href="#" className="btn btn-primary">
                    Comprar
                </a>
            </div>
        </div>

    );
}

export default ProductoDetail;
