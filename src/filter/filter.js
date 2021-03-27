// import Vue from 'vue'
//
// Vue.filter('dateFormat', ({date, format}) => {
//     date = date ? new Date(date) : new Date();
//     let o ={
//         year:date.getFullYear(),
//         month:date.getMonth()+1,
//         date:date.getDate(),
//         hour:date.getHours(),
//         minute:date.getMinutes(),
//         second:date.getSeconds(),
//         quarter:Math.floor((date.getMonth()+3)/3),
//         millSecond:date.getMilliseconds(),
//     }
//     console.log(o)
//     console.log(format)
//     if(/(year)/.test(format)){
//         format=format.replace(RegExp.$1,(date.getFullYear()+"").substr(4-RegExp.$1.length));
//         console.log(format)
//     }
//     for(let k in o){
//         if(new RegExp("("+k+")").test(format)){
//             format=format.replace(RegExp.$1,RegExp.$1.length==1?o[k]:("00"+o[k]).substr((""+o[k]).length));
//         }
//     }
//     console.log(format)
//     return format
// })