import Item from "../components/Item"


function List({ items}){
    return <ul className="list">
        {items.map((item, i)=> (
            <Item key={i}>{item.name}</Item>
        ))}
    </ul>
}

export default List;