function login(name, parol) {
    // if(name.length == 8 && parol.length > 0){
    document.querySelector(".header").style.display = "flex";
    document.querySelector(".main-container").style.display = "inline";
    document.getElementById("user_name").innerHTML = name + "@stu.sdu.edu.kz";
    document.querySelector("body").style.background = "linear-gradient(#e66465, #9198e5);";
    document.querySelector("body").style.overflow = "scroll";
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
    if (id.length == 9 && course > 0 && advisor > 0) {
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
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });