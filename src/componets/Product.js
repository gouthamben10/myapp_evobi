
import React,{ useState} from 'react';
import {ToggleButton} from 'react-bootstrap';
function Product(props) {
    const [checked, setChecked] = useState(false);
    const { product,onAdd}=props;
    return (
   <>
        {/* <div > 
            <br/>
            <img className="small" src={product.image}/>
            <h3>{product.name}</h3>
            <button className="btn btn-primary" onClick={()=>onAdd(product)}>Add</button> 
            
        </div> */}
                    
                    <div className="item">
                        <div className="card" >
                            <img className="card-img-top" src={product.image} />
                            <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">put something here</p>
                            {/* <ToggleButton
                                className="mb-2"
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}    
                            >
                                Checked
                            </ToggleButton> */}
                            <br/>
                            <button className="btn btn-primary btn-group-toggle  " id="myDIV" onClick={()=>onAdd(product)}>Add</button> 
                            </div>
                        </div>
                    </div>
        
    </> 
        
    );
}

export default Product;