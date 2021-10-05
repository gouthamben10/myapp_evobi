import React, { useState } from "react";
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import { NavLink,Link } from 'react-router-dom';
import Pagefour from './Pagefour';
function DragDrop(props) {
  const { PictureList}= props;
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    
    setBoard((board) => [...board, pictureList[0]]);
    // const index= board.filter((picture) => id === picture.id);
    // PictureList.splice(index, 1);
  };
 const deleteItem=(id) => {
    this.setState(prevState=>{
      let board = prevState.board;
      const index= board.findIndex(item=>item.id==id);
      PictureList.splice(index, 1);
      return {board};
    });
  }
  return (
    <>
      <div className="row">
        <div className="col-md-8 col-12" id="base">
            <div className="Board" ref={drop}>
                {board.map((picture) => {
                return <Picture url={picture.url} id={picture.id}  />;
                })}
            </div>
        </div>
        <div className="col-md-4 col-12">
               
                {PictureList.map((picture) => {
                return (
                <>
                <div align="left">
                      {picture.name}
                </div>
                  
                <div className="Pictures">

                    <Picture url={picture.url} id={picture.id} />

                </div>
                
                    </>
                );
                })}
                 
        </div>
        
      </div>
      <div className="row">
      <Pagefour board={board} />
      </div>
      
                
      
      <NavLink className="btn btn-primary btn-lg " to='/pagefour'>Next</NavLink>
      
    </>
  );
}

export default DragDrop;