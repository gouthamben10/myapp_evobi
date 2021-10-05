import React from 'react';

function SeletectedItem(props) {
    const {cartsItems,onAdd}= props;
    return (
        <div>
            {cartsItems.map((item)=>(
                    <div key={item.id} className="row">
                       
                        <div className="col-12">{item.name}</div>
                    </div>
                ))}
        </div>
    );
}

export default SeletectedItem;