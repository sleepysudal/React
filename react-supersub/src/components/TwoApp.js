import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TwoSubApp from './TwoSubApp';

function TwoApp(props) {

    const [color,setColor]=useState('red');
    const [message,setMessage]=useState('오늘은 수요일');
    const [photo,setPhoto]=useState('go5');

    //3개의 이벤트를 만들어 전달
    const changeMessage=(msg)=>{
        
        setMessage(msg);
    }
    const changeColor=(color)=>{
        setColor(color);
    }
    const changePhoto=(photo)=>{
        setPhoto(photo);
    }

    return (
        <div>
            <Alert severity="info">Two App &nbsp; <AudiotrackIcon/></Alert>
            <br/>
            <h1 style={{color:color}}>{message}</h1>
            <img src={`../image/${photo}.jpeg`} style={{width:'200px', height:'200px'}}/>
            <br/>
            <TwoSubApp onMessage={changeMessage} onColor={changeColor} onPhoto={changePhoto}/>
        </div>
    );
}

export default TwoApp;