import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import { About, Food, Home } from './pages';
import mainimg from './image2/go4.jpeg';


function RouterMain(props) {
    return (
        <div>
            {/* 모든 페이지에서 공통으로 포함되는 컴포넌트나 이미지 */}
            <h1 className='alert alert-info'>React Router 공부하기</h1>
            <Menu/>
            <img src={mainimg} className='main_photo'/>
            <hr className='line'/>
            
            <div className='main_comp'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/about/:name' element={<About/>}/>
                {/* name을 파라메타로 넘기겠다는 것 */}
                <Route path='/login/*' element={
                    <div>
                        <h1>아직 로그인 기능 구현 전입니다</h1>
                        <img src='../image/go4.jpeg'/>
                        <h3>오늘 점심 이거 어때?</h3>
                    </div>
                }/>

                {/* 그 이외 매핑이면.. */}
                <Route path='*' element={
                    <h1>잘못된 주소입니다</h1>
                }/>
                <Route path='/food/:food1/:food2' element={<Food/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default RouterMain;