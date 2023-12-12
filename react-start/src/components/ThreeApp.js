import React, { useState } from 'react';

function ThreeApp(props) {

    //상태관리를 위한 변수설정
    const [message,setMessage]=useState('Happy Day');

    //엔터 이벤트 함수
    const enterEvent=(e)=>{
        if(e.key==='Enter'){ //e.keyCode===13
            setMessage('');
            e.target.value='';
        }
    }

    return (
        <div>
            <h3 className='alert alert-info'>ThirdApp</h3>

            <h3 style={{color:'red'}}>{message}</h3>
            <h4>메시지를 입력해주세요</h4>
            <input tyle='text' style={{width:'300px',fontSize:'2em'}} defaultValue={message}
            onChange={(e)=>{
                console.log(e.target.value); //바로바로 반응
                //message변수에 입력값 넣기
                setMessage(e.target.value);
            }}
            onKeyUp={enterEvent}/>
        </div>
    );
}

export default ThreeApp;