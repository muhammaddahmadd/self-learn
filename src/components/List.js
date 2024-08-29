import Item from "../components/Item"


function List({ items, onDel }){
    return <ul className="list">
        {items.map((item, i)=> (
            <Item key={item.id} index={i+1} id={item.id} onDel={onDel} name={item.name} />       
             ))}
    </ul>
}

export default List;