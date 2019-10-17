import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SinhVien from './components/SinhVien/SinhVien';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Hoàng Lương</p>
        <SinhVien hoten = "Hoàng Lương"  tuoi = "19">
          Nhảy dây, búp bê, ăn vặt.,...
        </SinhVien>
      </div> 
    );
  }
}



export default App;
