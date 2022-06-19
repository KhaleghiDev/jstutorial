//لطفا تاریخ تولد کاربر رو بگیریم و سپس سن او را محاسبه کرده و نمایش دهید .
let userBirthDay = prompt("عدد مورد نظر را وارد کنید و لطفا:",1370)
if(isNaN(userBirthDay)||userBirthDay>1401){
    alert("مقدار وراد شده صحیح نیست ")
}else{
    let ageUser = 1401-userBirthDay
    alert("Birth Day :" + ageUser)
}
