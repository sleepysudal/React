import React, { useState } from 'react';
import img1 from '../image/s5.JPG';

function FourApp(props) {

    const [name,setName]=useState('장순영');
    const [age,setAge]=useState(22);

    return (
        <div>
            <h3 className='alert alert-info'>FourthApp
                <img src={img1} className='img-thumnail' style={{width:'40px'}}/>
            </h3>
            <b style={{fontSize:'30px'}}>이름:{name} <span style={{marginLeft:'20px'}}>나이:{age}세</span></b>
            <br/>
            <buton type='button' className='btn btn-info' 
            onClick={(e)=>{
                setName('김영환');
                setAge(49);
            }}>값변경</buton>
            <buton type='button' className='btn btn-info' style={{marginLeft:'20px'}}
            onClick={(e)=>{
                setName('장순영');
                setAge(22);
            }}>초기화</buton>
        </div>
    );
}

export default FourApp;