import { useState } from "react";


function Input({name, onSubmit, nameChange}){

  
    return <form onSubmit={onSubmit} className="main">
        <input type="text" value={name} onChange={nameChange} placeholder="enter your todo"/>
      <button type="submit">+</button>
    </form>
}

export default Input;