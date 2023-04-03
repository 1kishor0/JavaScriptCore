// function message(){
//     console.log("Mouse over button");
// }

//event listener
let btn=document.getElementById('sample-button');
btn.addEventListener('click',messeage);
function messeage(e){
    let val=e;
    val=e.target.id;
    val=e.timeStamp;
    val=e.type;
    //for whole window area
    val=e.clientY;
    //for button area value pixel
    val=e.offset;
    console.log(val);
}
btn=document.querySelector(".container").addEventListener('mousemove',messeage2);
function messeage2(e){
    val=e;
    val=this;
    this.style.background=`#${e.offsetX}`;
}
//console.log(btn);

let frm=document.querySelector("#name").addEventListener('focus' ,test);
document.querySelector("#name").addEventListener('keyup',test2);

function test(e){
    this.style.background='pink';
}
function test2(e){
   // console.log(this.value);
    document.getElementById("demo").innerText=this.value;
}
