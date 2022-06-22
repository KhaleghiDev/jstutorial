// let userNumber = Number(prompt("عدد مورد نظر را وارد کنید "))
// let age = prompt('سنت رو رارد کن ?');
// alert(namber)
function zojorfard(userNumber){
    if (userNumber%2==0) {
        alert(userNumber + "عدد زوج است")
    } else {
        alert(userNumber + "عدد فرد است")
    }
}


// let message =   (age < 18) ? 'هنوز زوده!' :" خب شروع کن بزن بریم "

zojorfard(15)
zojorfard(18)
zojorfard(199)