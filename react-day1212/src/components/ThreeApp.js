import React, { useState } from 'react';

function ThreeApp(props) {

    const [boards,setBoards]=useState([
        {
            no:1,
            writer:'호스기',
            subject:'세마리치킨',
            photo:'14'
        },
        {
            no:2,
            writer:'홍박사',
            subject:'박사님',
            photo:'15'
        },
        {
            no:3,
            writer:'김영준',
            subject:'꿈나라대통령',
            photo:'16'
        },
        {
            no:4,
            writer:'씨찬이',
            subject:'자바찬이',
            photo:'18'
        },
        {
            no:5,
            writer:'김영환',
            subject:'짐바브웨이장님',
            photo:'19'
        }
    ]);

    return (
        <div>
            <h3 className='alert alert-danger'>ThreeApp_객체배열 컴포넌트 배열안에 출력</h3>
            <table className='table table-bordered' style={{width:'600px',marginLeft:'100px'}}>
                <caption align='top'><b>배열객체 출력</b></caption>
                <thead>
                    <tr>
                        <th width='60'>번호</th>
                        <th width='100'>사진</th>
                        <th width='260'>제목</th>
                        <th width='100'>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.map((row,index)=>(<tr>
                            <td>{row.no}</td>
                            <td><img src={`../image2/${row.photo}.png`} style={{width:'50px'}}/></td>
                            <td>{row.subject}</td>
                            <td>{row.writer}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ThreeApp;