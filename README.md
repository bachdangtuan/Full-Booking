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
.
└── src</br>
    ├── Page</br>
    │   ├── Contact</br>
    │   ├── News</br>
    │   └── Home</br>
    │       └── HomeMenu</br>
    ├── Redux</br>
    │   ├── Action</br>
    │   │   └── ActionType(Định nghĩa các tham số thay đổi trong Action)</br>
    │   └── Reducers</br>
    ├── Template</br>
    │   └── Layout</br>
    │       ├── UserTemplate</br>
    │       ├── AdminTemplate</br>
    │       └── HomeTemplate</br>
    │           ├── Footer</br>
    │           ├── Header</br>
    │           └── HomeCarousel</br>
    └── Util</br>
        └── Setting(định nghĩa tham số cố định path API)</br>