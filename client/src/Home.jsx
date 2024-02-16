import MyComponent from "./MyComponent1";
import Counter from "./components/Counter";
import TextState from "./components/TextState";

const Home = () => {
  return(
    <div className="home">
      <h2>리엑트 실습하기</h2>
      {/* <MyComponent name={"우영우"} age={27} /> */}
      <Counter />
      <TextState />
    </div>
  )
}

export default Home;