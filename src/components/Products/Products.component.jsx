import { useState } from 'react';
import './Products.styles.css';
import Modal from '../Modal/Modal.component';

const Products = ({ imageUrl, title, desc, price, sizes }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='card mb-3'>
                <img
                    src={imageUrl}
                    className='card-img-top'
                    alt='Fissure in Sandstone'
                    onClick={() => setIsOpen(true)}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{desc}</p>
                    <p className='card-text'>${price}</p>
                    <div className='card-text my-2'>
                        {sizes.map((el, i) => (
                            <span className='badge bg-primary me-2' key={i}>
                                {el}
                            </span>
                        ))}
                    </div>
                    <a href='#!' className='btn btn-primary'>
                        Button
                    </a>
                </div>
            </div>

            <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
                <div class='card-body'>
                    <h5 class='card-title'>{title}</h5>
                    <p class='card-text'>{desc}</p>
                    <p class='card-text'>
                        <small class='text-muted'>{price}</small>
                    </p>
                </div>
                <img src={imageUrl} class='card-img-bottom' alt='Camera' />
            </Modal>
        </>
    );
};

export default Products;
