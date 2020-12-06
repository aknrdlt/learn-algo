function login(name, parol) {
  if(name.length == 9 && parol.length > 0){
    document.querySelector(".header").style.display = "flex";
    document.querySelector(".main-container").style.display = "inline";
    document.getElementById("user_name").innerHTML = name + "@stu.sdu.edu.kz";
    document.querySelector("body").style.backgroundImage = "none";
    document.querySelector("body").style.overflow = "scroll";
    $(".header").animate({ opacity: "1" }, "slow");
    document.querySelector(".box").style.display = "none";
    document.getElementById("info_id").innerHTML = "ID: ".bold() + name;
    }else if(name.length != 9 && parol.length == 0){
       document.getElementById("username").style.borderColor = "red";
       document.getElementById("parol").style.borderColor = "red";
    }else if(parol.length == 0){
       document.getElementById("parol").style.borderColor = "red";
    }else if(username.length != 9){
       document.getElementById("username").style.borderColor = "red";
    }
}

 function logout(){
  document.querySelector(".header").style.display = "none";
  document.querySelector(".box").style.display = "inline";
  document.querySelector(".info").style.display = "none";
  document.querySelector(".main-container").style.display = "none";
  document.querySelector("body").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/backOne.jpg)";
  document.querySelector("body").style.overflow = "hidden";
 }

function toRegister() {
    document.querySelector(".box").style.display = "none";
    document.querySelector(".access").style.display = "flex";
}

function letter(course, advisor, id) {
    if (id.length == 9 && course > 0 && advisor > 0) {
        document.getElementById("sub").remove();
        document.getElementById("check").style.display = "inline";
    }
}

function showInfo() {
    document.querySelector(".info").style.display = "flex";
    $(".info").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
      
}

function close_button() {
    $(".info").animate({opacity: "0"}, "slow");
    document.querySelector(".info").style.display = "none";
    document.body.style.overflow = "scroll";
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });
let map;

function initMap() {
    const sduCoordinates = { lat: 43.20780526221219, lng:76.66987792639094};
    map = new google.maps.Map(document.getElementById("map"), {
        center: sduCoordinates ,
          zoom: 17,
    });

    var iconT = {
      url:"http://technopark.sdu.edu.kz/img/core-img/logo.png",
      size: new google.maps.Size(50, 51),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 17),
      scaledSize: new google.maps.Size(50, 25)
  }
  var iconF = {
    url:"https://sdu.edu.kz/wp-content/uploads/2019/10/ENG-SDU-LOGO-TEXT-UNDER-SHAPE-300x238.png",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 17),
    scaledSize: new google.maps.Size(35, 30)
}
    const coorTechno = {lat:43.20856595464444, lng:76.66937627824649};
    const coorFac = {lat:43.20743864502494, lng:76.67017198424249};
    const technoPark = new google.maps.Marker({
      position: coorTechno  ,
      map,
      title: "Open: 10:00-18:00",
      icon: iconT
    });
    const facEng = new google.maps.Marker({
      position: coorFac,
      map,
      title: "Faculty of Engineering",
      icon: iconF
    });

    const coorSdu = [
      { lat: 43.209758760714934, lng:76.67032158734072},
      { lat: 43.205808776745876, lng:76.67130681960867},
      { lat: 43.205521819933644, lng:76.66817806581939 },
      { lat: 43.20842651805286, lng:76.66737512523243 },
      { lat: 43.209758760714934, lng:76.67032158734072}
    ];
    const terrSdu = new google.maps.Polyline({
      path: coorSdu,
      geodesic: true,
      strokeColor: "red",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    terrSdu.setMap(map);
}
