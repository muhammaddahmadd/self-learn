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
    setItems(items => [...items, name])
    setName("");
  }
console.log(items)

  return (
    <div className="App">
      <Input items={items} onSubmit={handleSubmission} nameChange={handleName} name={name}/>
      <List items={items} />
    </div>
  );
}

export default App;
