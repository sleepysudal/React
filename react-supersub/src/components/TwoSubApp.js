import React from 'react';

function TwoSubApp(props) {
    return (
        <div style={{marginLeft:'650px'}}>
            <br/>
            <b style={{marginRight:'650px'}}>메세지</b>
            <input type='text' className='form-control' style={{width:'400px'}}
            onChange={(e)=>{
            props.onMessage(e.target.value);
            }}/>
            <br/>

            <b style={{marginRight:'650px'}}>글자색변경</b>
            <input type='color' defaultValue='#ffc' className='form-control' style={{width:'400px'}}
            onChange={(e)=>{
                props.onColor(e.target.value);
            }}/>
            <br/>

            <b style={{marginRight:'650px'}}>이미지변경</b>
            <select className='form-control' style={{width:'400px'}} 
            onChange={(e)=>{
                props.onPhoto(e.target.value);
            }}>
                <option>go1</option>
                <option>go3</option>
                <option>go4</option>
                <option>go6</option>
                <option>go7</option>
                
            </select>
        </div>
    );
}

export default TwoSubApp;