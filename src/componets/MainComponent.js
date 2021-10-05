import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Pageone from './Pageone'
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefour from './Pagefour';
import data from '../shared/data';
function MainComponent(){
    
   
        const HomePage = () => {
            return(
                <Pageone/>
            );
          }
        const {products}=data;
        const [cartItems,setCartItems]=useState([]);
        const [board, setBoard] = useState([]);
        const onAdd=(product)=>{
            const exist = cartItems.find(x=>x.id ===product.id);
            if(exist){
                setCartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty+1}:x));
            }
            else{
                setCartItems([...cartItems,{...product,qty:1}]);
            }
        }
        return (
            <>
            <Header />
            <div className="container">

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/pagetwo' component={() => <Pagetwo onAdd={onAdd} products={products} />} />
                    <Route exact path='/pagethree' component={() => <Pagethree onAdd={onAdd} cartsItems={cartItems} />} />

                    <Redirect to="/home" />
                </Switch>

            </div>
            <br/>
            <Footer/>
            </>
            
           
        );
    
}

export default MainComponent;