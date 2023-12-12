import React from 'react';
import Alert from '@mui/material/Alert';
import BalanceIcon from '@mui/icons-material/Balance';

function FourthApp(props) {

    //배열변수선언
    const names=['영환','성경','호석','민규','성신','형준'];

    //반복문을 변수에 저장후 출력해도 된다
    const nameList=names.map((name)=>(<li>{name}</li>));

    //색상을 5개 배열로 주시고...결과물을 div로 출력하세요(box로 className 줄것)
    const colors=['pink','aqua','green','cyan','gold'];

    return (
        <div>
            <h3 className='alert alert-info'>FourApp입니다</h3>
            <Alert severity="error">배열연습_#4 <BalanceIcon/></Alert>
            <div>
                <h3>map연습</h3>
                <ol>
                    {
                        //반복문을 직접 리턴에 주기
                        names.map((name,index)=>(<b style={{marginLeft:'10px'}}>{index}:{name}</b>))
                    }
                </ol>
                <ol>
                    {nameList}
                </ol>
                <Alert severity='warning'>과제_배열색상 가로로 출력</Alert>
                {colors.map((color)=>(<div className='box' style={{backgroundColor:color}}>{color}</div>))}
            </div>
        </div>
    );
}

export default FourthApp;