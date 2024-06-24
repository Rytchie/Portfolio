

function List(props){

    const itemList = props.items;

    const lowCalFruits = fruits.filter(fruit => fruit.calories > 100)


    const listItems = itemList.map(item => <li key="item.id">
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b>

                                                    </li> );
    return ( <ol>{listItems}</ol> );
}

export default List