import React from 'react';

function SixSubApp3(props) {
    return (
        <div>
            <h3 className='alert alert-danger'>SixApp의 셋째입니다</h3>
            <button type='button' className='btn btn-info' onClick={props.incre}>증가</button>&nbsp;
            <button type='button' className='btn btn-success' onClick={props.decre}>감소</button>
        </div>
    );
}

export default SixSubApp3;