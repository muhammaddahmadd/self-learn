import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import { useState } from 'react';
import List from './components/List';


function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("")

  function handleName(e) {
    setName(e.target.value)
 
  }


  function handleSubmission(e) {
    e.preventDefault();
    if (!name.length) return;
    
    const newItem = {
      id: Date.now(), 
      name: name.toLowerCase(),
    };
    const check = items.some(item => item.name.toLowerCase() === newItem.name)
    if (check) return alert("Already in list") 
    setItems(items => [...items, newItem])
    setName("");

   
    console.log(check)
  }

  



  function handleDel(id) {
    const removedItem = items.filter(item => item.id !== id);
    setItems(removedItem);
    
    }
  


  
  return (
    <div className="App">
      <Input items={items} onSubmit={handleSubmission} nameChange={handleName} name={name}/>
      <List items={items} onDel={handleDel} />
    </div>
  );
}

export default App;
