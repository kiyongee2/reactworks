import './App.css';
import MyComponent from './MyComponent1';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h1>리엑트 시작하기</h1>
      <MyComponent name={"우영우"} age={27} />
      <img src={logo} className="App-logo"></img>
    </div>
  );
}

export default App;
