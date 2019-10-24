import React from 'react';


const sanPham = (props) => {
    return(
        <div>
            <p> {props.maSanPham } - Tên Sản Phẩm: {props.tenSanPham} - Giá: {props.giaSanPham}</p>
            <p> Mô tả Sản Phẩm: { props.children }</p>
        </div>
    );
}
export default sanPham;