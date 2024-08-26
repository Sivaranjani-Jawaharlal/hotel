var container=document.querySelector(".container");
var see=document.querySelector(".container");
var hotels=document.querySelector(".hotels");

see.addEventListener("click",function(){
    see.style.display="none";
    hotels.style.display="block";
});

var hotel1=document.getElementById("see1");
var hotel2=document.getElementById("see2");
var hotel3=document.getElementById("see3");
var h1room=document.querySelector(".h1room");
var h2room=document.querySelector(".h2room");
var h3room=document.querySelector(".h3room");

hotel1.addEventListener("click",function(){
    hotels.style.display="none";
    h1room.style.display="block";
});
hotel2.addEventListener("click",function(){
    hotels.style.display="none";
    h2room.style.display="block";
});
hotel3.addEventListener("click",function(){
    hotels.style.display="none";
    h3room.style.display="block";
});

var summit1=document.getElementById("summit1");
var summit2=document.getElementById("summit2");
var summit3=document.getElementById("summit3");

summit1.addEventListener("click",function(){
    alert("done! your room successfully booked");
});
summit2.addEventListener("click",function(){
    alert("done! your room successfully booked");
});
summit3.addEventListener("click",function(){
    alert("done! your room successfully booked");
});

var back=document.getElementById("back");
var back1=document.getElementById("back1");
var back2=document.getElementById("back2");
var back3=document.getElementById("back3");

back.addEventListener("click",function(){
    hotels.style.display="none";
    container.style.display="block";
});

back1.addEventListener("click",function(){
    hotels.style.display="none";
    h1room.style.display="none";
    container.style.display="block";
});
back2.addEventListener("click",function(){
    hotels.style.display="none";
    h2room.style.display="none";
    container.style.display="block";
});
back3.addEventListener("click",function(){
    hotels.style.display="none";
    h3room.style.display="none";
    container.style.display="block";
});
