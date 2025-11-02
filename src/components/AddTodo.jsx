import React, { useRef } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
export default function AddTodo({handleOnClick}) {
    
    var nameElement=useRef();
    var dateElement=useRef();
    let onClick=(event)=>{
        event.preventDefault();
        // console.log(nameElement);
        var name=nameElement.current.value;
        var date=dateElement.current.value;
        nameElement.current.value="";
        dateElement.current.value="";
        handleOnClick(name,date);

            
    }
   
    return (

        <>
            <div className="container">
                <form className="row" onSubmit={onClick}>
                    <div className="col-6 ">
                        <input type="text" className="form-control" placeholder="enter TODO here " ref={nameElement}  />
                    </div>
                    <div className="col-4">
                        <input type="date" className="form-control " ref={dateElement} />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success ps-4 pe-4 " > <FaRegCalendarPlus /> </button>
                    </div>
                </form>
            </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-6 ">
                        <input type="text" className="form-control" placeholder="enter TODO here " onChange={handleName} value={itemName} />
                    </div>
                    <div className="col-4">
                        <input type="date" className="form-control " onChange={handleDate} value={itemDate} />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success ps-4 pe-4 " onClick={onClick}> <FaRegCalendarPlus /> </button>
                    </div>
                </div>
            </div> */}
        </>
    );
}
