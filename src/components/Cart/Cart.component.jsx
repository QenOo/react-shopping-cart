import React from 'react';

const Cart = (props) => {
    return props.cartItems.map((cartItem) => (
        <div className='card mb-3' key={cartItem.id}>
            <button
                className='btn btn-primary d-block ms-auto'
                onClick={() => props.removeItemInCart(cartItem.id)}
            >
                Remove
            </button>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img
                        src={cartItem.imageUrl}
                        alt='Trendy Pants and Shoes'
                        className='img-fluid rounded-start'
                    />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>Name: {cartItem.title}</h5>
                        <p className='card-text'>
                            Description: {cartItem.description}
                        </p>
                        <p className='card-text'>Number: {cartItem.qty}</p>
                    </div>
                </div>
            </div>
        </div>
    ));
};

export default Cart;
