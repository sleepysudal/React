import React from 'react';

function SixSubApp(props) {
    console.dir(props); //name,age변경 불가, 이벤트 통해서만 가능(자식은 부모 읽기전용)
    return (
        <div>
            <h3 className='alert alert-danger'>SixApp의 첫째입니다</h3>
            <div className='line'>{props.name}님의 나이는 {props.age}세입니다</div>
        </div>
    );
}

export default SixSubApp;