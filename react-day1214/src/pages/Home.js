import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {

    const navi=useNavigate();

    return (
        <div>
            <button type='button' className='btn btn-info' onClick={()=>{
                navi("/about");
            }}>About</button>
            <button type='button' className='btn btn-danger' onClick={()=>{
                navi("/about/영준");
            }}>About2</button>
            <button type='button' className='btn btn-success' onClick={()=>{
                navi("/food/go3/go4");
            }}>점심메뉴</button>
            <button type='button' className='btn btn-warning' onClick={()=>{
                navi("/food/go5/go6");
            }}>저녁메뉴</button>
        </div>
    );
}

export default Home;