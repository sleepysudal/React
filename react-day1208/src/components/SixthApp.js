import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SixthApp(props) {

    const [names,setNames]=useState(['현규','진평','희찬','민규','성신']);
    const [irum,setIrum]=useState('');

    //추가버튼 이벤트
    const btnInsert=()=>{
        if(irum.replace(/ /g,'')===''){
            alert('이름을 입력해주세요');
            setIrum('');
            return;
        }
        setNames(names.concat(irum)); //배열에 irum데이터 추가
        setIrum('');
    }

    //Enter이벤트
    const textEnter=(e)=>{
        if(e.key==='Enter'){
            btnInsert();
        }
    }

    //입력이 되도록...이벤트
    const textInput=(e)=>{
        setIrum(e.target.value);
    }

    //더블클릭시 삭제
    const dataRemove=(index)=>{
        console.log("remove:"+index);

        //방법1..slice
        // setNames([
        //     ...names.slice(0,index),
        //     ...names.slice(index+1,names.length)
        // ]);

        //방법2...filter
        setNames(names.filter((item,i)=>i!==index));
    }

    return (
        <div>
            <h3 className='alert alert-info'>SixApp입니다</h3>
            <Alert severity="info">배열연습_#6 <AddShoppingCartIcon/></Alert>

            <input value={irum} onChange={textInput} onKeyUp={textEnter} placeholder='이름'/>&nbsp;&nbsp;
            <button type='button' className='btn btn-info' onClick={btnInsert}>추가</button>
            <br/>
            <h4>이름을 더블클릭하면 삭제됩니다</h4>
            <ul>
                {
                    names.map((name,index)=>(<li className='data' onDoubleClick={()=>dataRemove(index)}>{name}</li>))
                }
            </ul>
        </div>
    );
}

export default SixthApp;