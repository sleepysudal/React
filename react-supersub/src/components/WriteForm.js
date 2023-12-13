import React, { useState } from 'react';

function WriteForm({onsave}) {
    
    const[name,setName]=useState('산타');
    const[blood,setBlood]=useState('A');
    const[photo,setPhoto]=useState('go5');

    //버튼이벤트
    const addDataEvent=()=>{
        //부모컴포넌트에서 만든 onSave를 호출
        onsave({name,photo,blood});
    }
    
    return (
        <div style={{marginTop:'30px'}}>
            <b>이름 : </b>
            <input type='text' style={{width:'120px'}}
            onChange={(e)=>{
                setName(e.target.value);
            }}/>

            <b style={{marginLeft:'20px'}}>혈액형 : </b>
            <select onChange={(e)=>{
                setBlood(e.target.value);
            }}>
                <option>A</option>
                <option>AB</option>
                <option>B</option>
                <option>O</option>
            </select>

            <b style={{marginLeft:'10px'}}>이미지</b>
            <select onChange={(e)=>{
                setPhoto(e.target.value);
            }}>
                {
                    //1,3,4,6,7 map으로 돌리기
                    [1, 3, 4, 6, 7].map((number) => (
                        <option key={number}>{`go${number}`}</option>
                    ))
                }
                </select>
                <button type='button' className='btn btn-info' style={{marginLeft:'10px'}} onClick={addDataEvent}>추가</button>
        </div>
    );
}

export default WriteForm;