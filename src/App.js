import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext, CartContext } from './contexts';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = id => {
		setCart(cart.filter(item => item.id !== id)); // return all items currently in state EXCEPT the one we're removing
	}

	return (
		<div className="App">
			
			<CartContext.Provider value={{cart, removeItem}}>
				<Navigation />

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
