var typed = new Typed('#element', {
    strings: ['<i>BCA FRESHER</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// scripts.js

document.getElementById("openbtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("closebtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "0";
});
