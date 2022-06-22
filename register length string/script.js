let username = prompt("نام کاربری را وارد کنید ")
let password = prompt('پسورد را وراد کنید ');
// alert(namber)
function Register(username,password){
    if (username.length <3) {
       alert("نام کاربری کمتر از 3 کاراکتر")
    } 
    if(password.length < 8){
        alert("پسورد کمتر از 8 کاراکتر")
    }
    else{
        alert("ثبت نام با موفقیت انجام شد")
    }
}

Register(username,password)
// let message =   (age < 18) ? 'هنوز زوده!' :" خب شروع کن بزن بریم "

