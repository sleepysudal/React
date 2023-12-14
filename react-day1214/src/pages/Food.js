import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Food(props) {

    const {food1, food2}=useParams();
    const navi=useNavigate();

    return (
        <div>
            <h3>오늘 식사 메뉴</h3>
            <button type='button' className='btn btn-info' onClick={()=>{
                navi(-1);
            }}>이전페이지</button>
            <img src={`../../image/${food1}.jpeg`} className='img-thumnail' style={{width:'200px', height:'200px'}}/>
            <img src={`../../image/${food2}.jpeg`} className='img-thumnail' style={{width:'200px', height:'200px'}}/>
        </div>
    );
}

export default Food;