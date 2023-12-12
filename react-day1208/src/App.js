import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FirstApp from './components/FirstApp';
import SecondApp from './components/SecondApp';
import ThirdApp from './components/ThirdApp';
import FourthApp from './components/FourthApp';
import FifthApp from './components/FifthApp';
import SixthApp from './components/SixthApp';
import SeventhApp from './components/SeventhApp';

function App() {

  const [index,setIndex]=useState(1);

  return (
    <div className="App">
      <b style={{marginLeft:'100px',fontSize:'20px'}}>컴포넌트 선택하기: </b>

      <select onChange={(e)=>{
        setIndex(Number(e.target.value));
      }}>
        <option value='1' selected>OneApp확인하기</option>
        <option value='2'>TwoApp확인하기</option>
        <option value='3'>ThreeApp확인하기</option>
        <option value='4'>FourApp확인하기</option>
        <option value='5'>FiveApp확인하기</option>
        <option value='6'>SixApp확인하기</option>
        <option value='7'>SevenApp확인하기</option>
      </select>

      {index===1?<FirstApp/>:index===2?<SecondApp/>:index===3?<ThirdApp/>:index===4?<FourthApp/>:index===5?<FifthApp/>:index===6?<SixthApp/>:<SeventhApp/>}
    </div>
  );
}

export default App;
