import React from 'react';
import img1 from '../image/s5.JPG';

function TwoApp(props) {

    const imgStyle={
        border:'5px inset gold',
        borderRadius:'100px'
    }
    let helloEle=<h2 className='alert alert-info'>Hello</h2>;

    return (
        <div>
            <h2 className='alert alert-danger'>SecondApp입니다</h2>
            <img src={img1} style={imgStyle}/>
            {helloEle}
            {helloEle}
        </div>
    );
}

export default TwoApp;