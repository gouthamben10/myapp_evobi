import React from 'react';
import Picture from './Picture';
function Pagefour(props) {
    const { board}= props;
    return (
        <div>
            <h2>hi</h2>
                {board.map((item)=>(
                    <div key={item.id} className="row">
                       
                        <div className="col-12">{item.name}</div>
                    </div>
                ))}
        </div>
    );
}

export default Pagefour;