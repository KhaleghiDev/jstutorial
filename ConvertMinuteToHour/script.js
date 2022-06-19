//یک زمان را بر حسب دقیقه از کاربر دریافت کرده و آن را به ساعت تبدیل کنید و سپس نمایش دهید
// Convert minute to hour

let userminute = prompt("عدد مورد نظر را وارد کنید و لطفا:",60)
let MinuteToHour=userminute/60;
if(isNaN(MinuteToHour)){
    alert("مقدار وراد شده صحیح نیست ")
}else{
    alert("hores :" + Math.round(MinuteToHour) +"H minute : " +userminute%60)
    if(MinuteToHour60){
      alert("hores :0 H minute : " +userminute%60)
}

}


