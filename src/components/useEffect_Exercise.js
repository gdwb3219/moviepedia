import { useEffect, useState } from 'react';

function App() {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(1);

  const handleFirstClick = () => setFirst(first + 1);

  const handleSecondClick = () => setSecond(second + 1);

  useEffect(() => {
    console.log('렌더링 이후', first, second);
  }, [first, second]);

  console.log('렌더링', first, second);

  return (
    <div>
      <h1>
        {first}, {second}
      </h1>
      <button onClick={handleFirstClick}>First</button>
      <button onClick={handleSecondClick}>Second</button>
    </div>
  );
}

export default App;

// 만약 테스트 해보고 싶다면, 이 .js 파일을 App.js로 변경 후 실행해보자