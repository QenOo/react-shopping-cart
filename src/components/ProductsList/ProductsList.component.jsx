import Products from '../Products/Products.component';

const ProductsList = (props) => {
    return (
        <>
            <div className='row'>
                {props.products.map((product) => (
                    <div
                        className='col-sm-6 col-md-6 col-lg-4'
                        key={product.id}
                    >
                        <Products {...product} addToCard={props.addToCard} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductsList;
