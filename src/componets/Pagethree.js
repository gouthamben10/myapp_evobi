import React,{useState} from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./DragDrop";
import { Switch, Route, Redirect } from 'react-router-dom';
import Pagefour from './Pagefour';
function Pagethree(props) {
    const {cartsItems,onAdd}= props;
    const [board, setBoard] = useState([]);
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                {cartsItems.length < 3 && <div class="alert alert-primary" role="alert">
  Please <a href="/pagetwo" class="alert-link">click here</a> select item again
</div>}
                {cartsItems.length<3 && alert('Atleast three item should be added')}
                {cartsItems.length > 5 && alert('Atmost five item can be added')}
                {cartsItems.length > 5 && <div class="alert alert-primary" role="alert">
  Please <a href="/pagetwo" class="alert-link">click here</a> select item again
</div>}
                {cartsItems.map((item)=>(
                    <div key={item.id} className="row">
                       
                        <div className="col-12">{item.name}</div>
                    </div>
                ))}
                <DragDrop PictureList={cartsItems} />
            </div>
             
        </DndProvider>

    );
}

export default Pagethree;