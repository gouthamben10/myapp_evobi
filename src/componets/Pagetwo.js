import React from 'react';
import Product from './Product';
import { NavLink } from 'react-router-dom';
function Pagetwo(props) {
    const {products,onAdd} = props;
    return (
        <>
        <div className="container">
        <div className="wrapper">
					
                    {products.map((product) => (
                            <Product key={product.id} product={product} onAdd={onAdd} />
                        ))}
                   
					
				
		</div>
        <br/>
                <NavLink className="btn btn-primary btn-lg " to='/pagethree'>Next</NavLink>

        </div>
        <br/>
        
        </>
           
        
    );
}

export default Pagetwo;
