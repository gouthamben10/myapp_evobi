import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
class Pageone extends Component {
  
    render() {
        return (
            <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <img className= "imglg" src="https://clipart-best.com/img/pizza/pizza-clip-art-12.png"/>
                        <p>create your own customizable Pizzas</p>
                        <p> Add your own topping,make a pizza you want</p>
                        <NavLink className="btn btn-primary btn-lg" to='/pagetwo'>Start</NavLink>
                        
                    </div>
                </div>
                
            </div>
                
           
        );
    }
}

export default Pageone;