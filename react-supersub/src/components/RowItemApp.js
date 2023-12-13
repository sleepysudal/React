import React from 'react';

function RowItemApp(props) {

    let {row,idx,onDelete}=props;

    //삭제 이벤트
    const btnDelete = ()=>{
        onDelete(idx); //부모가 props로 보낸 이벤트 호출

    }
    return (
        <tr>
            <td>{row.name}</td>
            <td><img src={`../image/${row.photo}.jpeg`}
            style={{width:'60px',border:'1px solid red',height:'80px'}}/></td>
            <td>{row.blood}형</td>
            <td>{row.today.toLocaleDateString('ko-kr')}</td>
            <td>
                <button type='button' className='btn btn-danger' onClick={btnDelete}>삭제</button>
            </td>
        </tr>
    );
}

export default RowItemApp;