import { useEffect, useState } from 'react';
import data from './data.json';
import Header from './components/Header/Header.component';
import ProductsList from './components/ProductsList/ProductsList.component';
import Filter from './components/Filter/Filter.component';
import Footer from './components/Footer/Footer.component';
import Cart from './components/Cart/Cart.component';

function App() {
    const [products, setProducts] = useState(data);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem('cartItems')) || []
    );

    const handleFilterBySize = (e) => {
        setSize(e.target.value);
        if (e.target.value === 'ALL') {
            setProducts(data);
        } else {
            let productsClone = data;
            let productsFiltered = productsClone.filter(
                (p) => p.sizes.indexOf(e.target.value) !== -1
            );
            setProducts(productsFiltered);
        }
    };

    const handleFilterBySort = (e) => {
        let sort = e.target.value;
        setSort(sort);
        let productsClone = [...products];
        let productsFiltered = productsClone.sort((a, b) => {
            if (sort === 'lowest') {
                return a.price - b.price;
            } else if (sort === 'highest') {
                return b.price - a.price;
            } else {
                return a.id < b.id ? 1 : -1;
            }
        });
        setProducts(productsFiltered);
    };

    const addToCard = (product) => {
        const cartItemsClone = [...cartItems];
        let isProductExists = false;
        cartItemsClone.forEach((p) => {
            if (p.id === product.id) {
                p.qty++;
                isProductExists = true;
            }
        });
        if (!isProductExists) {
            cartItemsClone.push({ ...product, qty: 1 });
        }
        setCartItems(cartItemsClone);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const removeItemInCart = (id) => {
        const cartItemsClone = [...cartItems];
        setCartItems(cartItemsClone.filter((i) => i.id !== id));
    };
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <main>
                    <div className='row mt-5'>
                        <div className='col-sm-12 col-md-9'>
                            <ProductsList
                                addToCard={addToCard}
                                products={products}
                            />
                        </div>
                        <div className='col-sm-12 col-md-3'>
                            <Filter
                                handleFilterBySize={handleFilterBySize}
                                handleFilterBySort={handleFilterBySort}
                                size={size}
                                sort={sort}
                            />
                        </div>
                        <div className='col-12'>
                            <h2>My Cart</h2>
                            <h2>
                                {cartItems.length === 0
                                    ? 'Cart is empty'
                                    : `Number items in cart is = ${cartItems.length}`}
                            </h2>
                            <Cart
                                cartItems={cartItems}
                                removeItemInCart={removeItemInCart}
                            />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
