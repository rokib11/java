// const text=document.querySelector(".sec-text");
// const textLoad=()=>{
//     setTimeout(()=>{
//         text.textContent="Web developer"
//     },0);
//     setTimeout(()=>{
//         text.textContent="React.js"
//     },4000);
//     setTimeout(()=>{
//         text.textContent="Front-end developer"
//     },8000)
//     setTimeout(()=>{
//         text.textContent="Programmer"
//     },16000);
// }
// textLoad();
// setInterval(textLoad,12000)
// let img=document.querySelector(".userlogin");
//         document.querySelector("#img").onclick=()=>{
//         img.classList.toggle("active")
//         };
//         let nav=document.querySelector(".nav");
//         document.querySelector("#menu").onclick=()=>{
//             nav.classList.toggle("active");
//             img.classList.remove("active")
//         }

//         let tablet=document.getElementsByClassName("textcontent");
//         let table=document.getElementsByClassName("context");
        
//         function opentab(tabname){
//             for (tab of tablet){
//                 tab.classList.remove("active-link");
//             }
//             for (tabs of table){
//                 tabs.classList.remove("active-tab");
//             }
//             event.currentTarget.classList.add("active-link");
//             document.getElementById(tabname).classList.add("active-tab");
//         }
// const accrotion=document.querySelectorAll(".accrotion");

//     accrotion.forEach((item,index)=>{
//     let container=item.querySelector(".container");
//     container.addEventListener("click",()=>{
//         item.classList.toggle("open");
//         let contnt=item.querySelector(".contnt");
//         if(item.classList.contains("open")){
//             contnt.style.height=`${contnt.scrollHeight}px`;
//             item.querySelectorAll("i").classList.replace(" fa-plus" , "fa-minus");
//         }
//         else{
//             contnt.style.height="0px";
//             item.querySelectorAll("i").classList.replace(" fa-minus" , "fa-plus");
//         }
//     })
// })

let userlogin=document.querySelector(".userlogin");
              document.querySelector("#imglogin").onclick=()=>{
              userlogin.classList.toggle("open");
              nav.classList.remove("open")
               }
let nav=document.querySelector("nav ul");
        document.querySelector("#menubar").onclick=()=>{
        nav.classList.toggle("open");
        userlogin.classList.remove("open");
        }
const secText=document.querySelector(".sec-text");
        const textLoad=()=>{
        setTimeout(()=>{
                secText.textContent="Front-end developer";
        },0);
        setTimeout(()=>{
                secText.textContent="React.js Developer";
        },4000);
        setTimeout(()=>{
                secText.textContent="Web developer";
        },8000)
        }
        textLoad();
        setInterval(textLoad,12000);

var activeContext=document.getElementsByClassName("bio");
var activeBio=document.getElementsByClassName("context");

 function opentab(tabname){
        for(tabs of activeContext){
                tabs.classList.remove("active-bio");
        }
        for(table of activeBio){
                table.classList.remove("activeContext");
        }
        event.currentTarget.classList.add("active-bio");
        document.getElementById(tabname).classList.add("activeContext");

 }

 const accortion =  document.querySelectorAll(".accortion");
 accortion.forEach((item,index)=>{
     let contexttitle=item.querySelector(".contexttitle");
     contexttitle.addEventListener("click",()=>{
     item.classList.toggle("open");
     let titleof=item.querySelector(".titleof");
     if(item.classList.contains("open")){
        titleof.style.height=`${content.scrollHeight}px`
     }else{
         content.style.height=`0px`
     }
 
     })
 })
