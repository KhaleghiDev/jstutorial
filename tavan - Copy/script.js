/**
 * از کاربر سن و جنسیت را دریافت کنید.در صورتی که جنسیت کاربر مونث بوده یا سن کمتر از 18 را دارد، به اون خطا نمایش دادهو در غیر این صورت به اون مجوز ورود به پنل را نمایش دهید.
 */

let userNumberAge =Number( prompt("سن مورد نظر را وارد کنید "))
let userNumberGender = prompt(")(male,female) جنسیت مورد نظر را وارد کنید ")
console.log(userNumberGender)
if (userNumberAge<18 || userNumberGender==="female") {
    alert("شما مجوز لازم ندارید ")
}else{
    alert("ورود به پنل ")
}
