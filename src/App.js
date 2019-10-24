import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SinhVien from './components/SinhVien/SinhVien';
import SanPham from './components/SanPham/SanPham';

class App extends Component {
  render() {
    // return(
    //   <div className="App">
    //     <h1>Ứng dụng React đầu tiên</h1>
    //     <p>Đến từ Hoàng Lương</p>
    //     <SinhVien hoten = "Hoàng Lương"  tuoi = "19">
    //       Nhảy dây, búp bê, ăn vặt.,...
    //     </SinhVien>
    //   </div> 
    // );
    return(
      <div className="App">
        <SanPham tenSanPham = "Cà phê Trung Nguyên" maSanPham = "01" giaSanPham = "120.000 VND">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham = "Cà phê Chồn" maSanPham = "02" giaSanPham = "16.000.000 VND / 1KG">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham = "Cà phê Blue Mountain" maSanPham = "03" giaSanPham = "100$ / 1KG">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham = "Cà Phê CLASSIC GROUND" maSanPham = "04" giaSanPham = "3600.000 VND / 1KG">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham = "Cà phê Blue Mountain" maSanPham = "05" giaSanPham = "160.000 VND / 1KG">
          Hàng chính hãng
        </SanPham>
      </div>

    );

    
    
  }
}



export default App;
