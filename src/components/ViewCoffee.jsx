import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {

    const coffee = useLoaderData();
    
    console.log(coffee);
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    



    return (
        <div className="container mt-5">
            <div className="card">
                <img src={photo} className="card-img-top" alt="Coffee" style={{width: '300px'}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Supplier: {supplier}</p>
                    <p className="card-text">Taste: {taste}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;
