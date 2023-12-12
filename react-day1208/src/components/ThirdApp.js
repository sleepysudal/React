import React, { useState } from 'react';
import img1 from '../image/14.png';
import img2 from '../image/15.png';
import img3 from '../image/16.png';
import img4 from '../image/18.png';
import img5 from '../image/19.png';

function ThirdApp(props) {

    const [hp1,setHp1]=useState('02');
    const [hp2,setHp2]=useState('0000');
    const [hp3,setHp3]=useState('0000');
    const [photo,setPhoto]=useState(1);

    const changeHp1=(e)=>{
        setHp1(e.target.value);
    }
    const changeHp2=(e)=>{
        setHp2(e.target.value);
    }
    const changeHp3=(e)=>{
        setHp3(e.target.value);
    }
    const changePhoto=(e)=>{
        let v=Number(e.target.value);
        let cp=(v===1?img1:v===2?img2:v===3?img3:v===4?img4:img5);
        setPhoto(cp);
    }

    return (
        <div>
            <h3 className='alert alert-info'>ThreeApp입니다_Quiz1</h3>
            <div className='d-inline-flex' style={{height:'35px'}}>
                <select style={{width:'60px'}} onChange={changeHp1}>
                    <option>02</option>
                    <option>031</option>
                    <option>051</option>
                    <option>054</option>
                    <option>055</option>
                </select>
                <b>-</b>&nbsp;
                <input type='text' maxLength='4' className='form-control' style={{width:'60px'}} defaultValue={hp2} onKeyUp={changeHp2}/>
                <b>-</b>&nbsp;
                <input type='text' maxLength='4' className='form-control' style={{width:'60px'}} defaultValue={hp3} onKeyUp={changeHp3}/>

                <b style={{marginLeft:'50px',width:'100px'}}>이미지 선택: </b>
                <select className='form-control' style={{width:'100px'}} onChange={changePhoto}>
                    <option value='1'>이미지1</option>
                    <option value='2'>이미지2</option>
                    <option value='3'>이미지3</option>
                    <option value='4'>이미지4</option>
                    <option value='5'>이미지5</option>
                </select>
            </div>
            <br/><br/>
            <h1>{hp1}-{hp2}-{hp3}</h1>
            <img src={photo}/>
        </div>
    );
}

export default ThirdApp;