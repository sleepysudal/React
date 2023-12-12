import React, { useState } from 'react';

function SecondApp(props) {

    const [photo,setPhoto]=useState('../image2/01.png');
    const changePhoto=(e)=>{
        setPhoto(e.target.value);
    }

    return (
        <div>
            <h3 className='alert alert-info'>TwoApp입니다_Radio버튼</h3>
            <div>
                <b>이미지선택: </b>
                <label><input type='radio' name='photo' value='../image2/01.png' onClick={changePhoto} defaultChecked/>&nbsp;이미지1</label>
                &nbsp;&nbsp;
                <label><input type='radio' name='photo' value='../image2/02.png' onClick={changePhoto}/>&nbsp;이미지2</label>
                &nbsp;&nbsp;
                <label><input type='radio' name='photo' value='../image2/03.png' onClick={changePhoto}/>&nbsp;이미지3</label>
                &nbsp;&nbsp;
                <label><input type='radio' name='photo' value='../image2/04.png' onClick={changePhoto}/>&nbsp;이미지4</label>
                &nbsp;&nbsp;
                <label><input type='radio' name='photo' value='../image2/05.png' onClick={changePhoto}/>&nbsp;이미지5</label>
                &nbsp;&nbsp;
            </div>

            <img src={photo}/>
        </div>
    );
}

export default SecondApp;