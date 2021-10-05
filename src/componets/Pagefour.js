import React from 'react';
import Picture from './Picture';
function Pagefour(props) {
    const { board}= props;
    return (
        <div className="container">
            <h4>Used Items</h4>
            <div className="row ">
            <div className="mt-2">
            <img className="image1" src='https://st.depositphotos.com/1027198/2943/i/950/depositphotos_29436211-stock-photo-pizza-base-with-tomato-sauce.jpg'/>
             </div>
            </div>
      {board.map((item)=>(
                    <div key={item.id} className="row">
                       
                        <div className="col-12">{item.name}</div>
                        <div className="imagediv">
                        
                        <img src={item.image} className="image1"></img>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Pagefour;