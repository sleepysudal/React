import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import RowItemApp from './RowItemApp';
import WriteForm from './WriteForm';

function OneApp(props) {
    
    const [board,setBoard]=useState([
       //1번째 초기값
        {
            name:'유재석',
            photo:'go1',
            blood:'A',
            today:new Date()
        },
        //2번째 초기값
        {
            name:'강호동',
            photo:'go3',
            blood:'B',
            today:new Date()
        },
        //3번째 초기값
        {
            name:'호날두',
            photo:'go6',
            blood:'AB',
            today:new Date()
        },
        //4번째 초기값
        {
            name:'메시이',
            photo:'go7',
            blood:'O',
            today:new Date()
        }
    ]);
    
    //데이터를 추가하는 함수 이벤트
    //board 를 바꾸면 렌더링이 되면서 추가된다
    const datasave=(data)=>{
        setBoard(board.concat({
            //name:data.name,
            //photo:data.photo,
            //blood:data.blood,
            ...data,
            today:new Date()
        }))
    }
    
    //삭제이벤트
    const dataDelete=(idx)=>{
        setBoard(board.filter((item,i)=>(i!==idx)));
    }
    
    
    return (
        <div>
            
            <Alert severity="info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            <AudiotrackIcon/> One App!!_테이블 만들기 &nbsp; <AudiotrackIcon/></Alert>
            

            <WriteForm onsave={datasave}/>

            <table className='table table-bordered' style={{width:'550px',marginLeft:'580px', marginTop:'50px'}}>
                <caption align='top'><b>Board 배열 출력</b></caption>
                <thead>
                <tr className='table-success'>
                    <th width='100'>이름</th>
                    <th width='120'>사진</th>
                    <th width='80'>혈액형</th>
                    <th width='160'>날짜</th>
                    <th width='90'>삭제</th>
                </tr>
                </thead>
                <tbody>
                    {
                        //데이터 개수만큼 호출됨, 출력은 아직 안됨, 출력은 RowItem
                        board.map((row,index)=>(<RowItemApp row={row} idx={index} onDelete={dataDelete}/>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OneApp;