# Booking with Create React App
### Tạo ReactApp và Install Lib Cần dùng
#### Phần 1 : Setup Dự Án
  1. Tạo App (npx create-react-app ...)
  2. Cài Đặt Thư Viện Cần Dùng
        npm i react-redux v5 </br>
        npm i redux </br>
        npm i redux-thunk </br>
        npm i react-router-dom </br>
        npm i lodash </br>
        npm i axios </br>
        npm i moment </br>
        npm i tailwindcss v3 </br>
#### Phần 2 : Tổ Chức Bố cục dự án 
.... update picture


#### Phần 3 : Tổ Chức Redux/ và xử lý API 
  1.  Setup rootReducer với configStore và redux thunk midleware
##### Tổ chức Redux Store và service xử lý API 
  1.  Tổ Chức redux (Actions / Reducer / Service)
      + Actions : Xử lý dispatch data lên Reducer
      + Reducer : Store tổng của toàn ứng dụng
      + Service : các hàm xử lý CRUD API 