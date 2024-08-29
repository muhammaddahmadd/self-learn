
function Item({ name, index, id, onDel }){


    return <li className="">
        <span className="item-name">ID:{index}-Name:{name}</span>
        <button className="del" onClick={() => onDel(id)}>-</button>
    </li>
}

export default Item;