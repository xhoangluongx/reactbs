import React from 'react';
const inTuoi = () => {
    return Math.floor(Math.random() *100);
}

const sinhVien = (props) => {
    return(
        <div>
            {/* <p>Phan Đình Hoàng Lương</p>
            <p>Giới tính: Nam</p>
            <p>Ngày sinh: 03/01/1999</p>
            <p>Tuổi: {inTuoi() }</p> */}
            <p> {props.hoten } - Tuổi: {props.tuoi}</p>
            <p>{ props.children }</p>
        </div>
    );
}
export default sinhVien;