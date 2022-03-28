import { useState } from 'react';
import './Products.styles.css';
import Modal from '../Modal/Modal.component';

const Products = ({ id, imageUrl, title, desc, price, sizes, addToCard }) => {
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
                    <button
                        onClick={() =>
                            addToCard({
                                id,
                                imageUrl,
                                title,
                                desc,
                                price,
                                sizes,
                            })
                        }
                        className='btn btn-primary'
                    >
                        Button
                    </button>
                </div>
            </div>

            <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{desc}</p>
                    <p className='card-text'>
                        <small className='text-muted'>{price}</small>
                    </p>
                </div>
                <img src={imageUrl} className='card-img-bottom' alt='Camera' />
            </Modal>
        </>
    );
};

export default Products;
