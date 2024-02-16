import { useState } from "react"

const TextState = () => {
  const [text, setText] = useState('');  //빈 문자로 초기화
  const [color, setColor] = useState('black');

  const getText = () => {
    setText("감사합니다.");
  }

  return(
    <>
      <div>
        {/* <button onClick={() => setText("안녕하세요")}>확인</button> */}
        {/* 인라인 스타일 - {{ }} */}
        <button onClick={getText}>확인</button>
        <h2 style={{color}}>{text}</h2>
        <button style={{color: 'red'}} onClick={()=>setColor('red')}>빨강</button>
        <button style={{color: 'blue'}} onClick={()=>setColor('blue')}>파랑</button>
      </div>
    </>
  )
}

export default TextState