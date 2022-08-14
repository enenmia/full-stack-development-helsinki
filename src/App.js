// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App=()=>(
//   <div>
//     <p>Hello world</p>
//   </div>
//)

// const App2=()=> {
//   console.log('Hello from component')
//   return(
//     <div>
//       <p>Hello world2</p>
//     </div>
//   )
// }

const App3=()=>{
  const now=new Date()
  const a=10
  const b=20

  return (
    <div>
      <p>
        Hello world, it is now {now.toString()}
      </p>
      <p>
        {a}plus{b}is{a+b}
      </p>
    </div>
  )
}
// export default App;
// export default App2;
export default App3;