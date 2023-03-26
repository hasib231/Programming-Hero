import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{border: '2px solid red',margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: { props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
// function App() {
//   const products = [
//     { name: "laptop", price: 153000 },
//     { name: "phone", price: 93000 },
//     { name: "watch", price: 3000 },
//     { name: "tablet", price: 53000 },
//   ];

//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }
//     </div>
//   );
// }

function Product(props) {
  
  return (
    <div className="product">
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
export default App;
