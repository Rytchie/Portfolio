import List from './List.jsx';

function App(){

  const fruits = [{id: 1, name: "apple", calories:  95},
                  {id: 2,name: "banana", calories:  45}, 
                  {id: 3,name: "orange", calories:  109}, 
                  {id: 4,name: "pineapple", calories:  34},
];

  return (
      <>
       <List items={fruits} category="Fruits"/>
      </>
  );
}

export default App