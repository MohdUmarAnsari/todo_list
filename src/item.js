import { useRef, useState } from 'react';
import './item.css';
import Nbsp from './nbsp';

function Item(props){
    const [inputvalue, setInputValue] = useState(props.data);
    const [doneFlag, setDoneFlag] = useState(false);
    const itemRef = useRef(null);
    const labelRef = useRef(null);
    const [editFlag, setEditFlag] = useState(false);

    const changeValue = () => {
        setInputValue(itemRef.current.value);
    }

    const handleDelete = () => {
        props.deleteItem(props.id);
    }

    const done = () => {
        if(!doneFlag){
            labelRef.current.style.textDecoration = 'line-through';
            setDoneFlag(true);
        }
    }

    const undo = () => {
        if(doneFlag){
            labelRef.current.style.textDecoration = 'none';
            setDoneFlag(false);
        }
    }

    const editItem = () => {
        setEditFlag(true);
    }

    const saveChange = () => {
        setInputValue(itemRef.current.value);
        setEditFlag(false);
    }


    return(
        <div>
            <br/>
            <span className='btn btn-secondary col-10' style={{background: '#FFFFFF'}}>
                {(editFlag) ?
                    <input className='btn btn-secondary btn-lg col-8 bg-primary text-white' type='text' onChange={changeValue} ref={itemRef} id={props.id} value={inputvalue}></input>
                    : <label className='btn btn-secondary btn-lg col-8 bg-primary text-white' ref={labelRef}>{inputvalue}</label>
                }
                <Nbsp/>
                {(editFlag) ?
                    <button className='btn btn-secondary bg-primary text-white' id={props.id} onClick={saveChange}>Save</button>
                    :
                    <>
                    <button className='btn btn-secondary bg-primary text-white' id={props.id} onClick={editItem}>Edit</button>
                    <button className='btn btn-secondary bg-primary text-white' id={props.id} onClick={handleDelete}>Delete</button>
                    <button className='btn btn-secondary bg-primary text-white' onClick={done} id={props.id}>Done</button>
                    <button className='btn btn-secondary bg-primary text-white' onClick={undo} id={props.id}>Undo</button>
                    </>
                }
                

            </span>

        </div>
        
    )
}

export default Item;