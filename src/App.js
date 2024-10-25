import logo from './logo.svg';
import './App.css';
import Item from './item.js';
import { useRef, useState } from 'react';
import Nbsp from './nbsp';

function App() {
  const [items, setItems] = useState([]);
  
  const itemDataRef = useRef(null);

  const addItem = () => {
    let itemData = itemDataRef.current.value;

    if(itemData){
      setItems([...items, { id: items.length + 1, data: itemData }]);
      itemDataRef.current.value = '';
    }
  };

  const clearItem = () => {
    setItems([]);
    itemDataRef.current.value = '';
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <center>
      <div>
        <div style={{height: '75px', backgroundColor: '#FFFFFF', width: '1000px', alignContent: 'center'}}>
          <input id='data' type='text' className='btn btn-secondary bg-primary text-white' ref={itemDataRef}></input><Nbsp />
          <button className='btn btn-secondary bg-primary text-white' onClick={addItem}>Add</button><Nbsp />
          <button className='btn btn-secondary bg-primary text-white' onClick={clearItem}>Clear</button>
        </div>
        {items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            data={item.data}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </center>
    
  );
}

export default App;
