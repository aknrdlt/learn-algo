function login(name, parol) {
    // if(name.length == 8 && parol.length > 0){
    document.querySelector(".header").style.display = "flex";
    document.getElementById("user_name").innerHTML = name + "@stu.sdu.edu.kz";
    document.querySelector("body").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(images/backTwo.jpg)";
    document.querySelector(".okno").style.display = "inline-block";
    $(".header").animate({ opacity: "1" }, "slow");
    document.querySelector(".box").style.display = "none";
    document.getElementById("info_id").innerHTML = "ID: ".bold() + name;
    // }else if(name.length != 8 && parol.length == 0){
    //    document.getElementById("username").style.borderColor = "red";
    //    document.getElementById("parol").style.borderColor = "red";
    // }else if(parol.length == 0){
    //    document.getElementById("parol").style.borderColor = "red";
    // }else if(username.length != 8){
    //    document.getElementById("username").style.borderColor = "red";
    // }
}

function toRegister() {
    document.querySelector(".box").style.display = "none";
    document.querySelector(".access").style.display = "flex";
}

function letter(course, advisor, id) {
    if (id.length == 8 && course > 0 && advisor > 0) {
        document.getElementById("sub").remove();
        document.getElementById("check").style.display = "inline";
    }
}

function showInfo() {
    document.querySelector(".info").style.display = "flex";
}

function close_button() {
    document.querySelector(".info").style.display = "none";
}