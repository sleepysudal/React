import React, { useRef, useState } from 'react';

function FourApp(props) {

    //useRef : 변수관리하는 기능
    //state와의 차이점 : 값이 변경되어도 다시 랜더링하지 않음

    //일반 state변수
    const [count,setCount]=useState(0);
    //ref 선언
    const countRef=useRef(0);

    //state변수 증가하는 함수
    const stateIncre=()=>{
        setCount(count+1);
    }

    //ref변수 증가하는 함수
    const refIncre=()=>{
        countRef.current=countRef.current+1; //ref변수.current
        console.log(countRef.current); //랜더링이 안되므로 콘솔로 확인
    }

    return (
        <div>
            <h3 className='alert alert-danger'>FourApp_useRef</h3>
            <button type='button' className='btn btn-danger' onClick={stateIncre}>state변수증가</button>&nbsp;
            <div className='number'>{count}</div>&nbsp;&nbsp;
            <button type='button' className='btn btn-warning' onClick={refIncre}>ref변수증가</button>&nbsp;
            <div className='number'>{countRef.current}</div>
        </div>
    );
}

export default FourApp;