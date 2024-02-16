import { useState } from "react";

//상태 변화 - useState() 함수
const Counter = () => {
  //value값을 0으로 초기화  const value = 0;
  const [value, setValue] = useState(0);

  //숫자를 1더하는 함수
  const addValue = () => {
    setValue(value + 1);
  }

  //숫자를 1빼는 함수
  const subValue = () => {
    setValue(value - 1);
  }

  //숫자를 1빼는 함수
  const initValue = () => {
    setValue(0);
  }

  return(
    <div className="counter">
      <h3>현재값: {value}</h3>
      <button onClick={addValue}>증가</button>
      <button onClick={subValue}>감소</button>
      <button onClick={initValue}>초기화</button>
    </div>
  )
}

export default Counter;