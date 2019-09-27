$("a").click(function(){
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
})
$(document).ready(function(){
    setTimeout(function(){
        $(".cssload-my-name").css("opacity","0")
    },1000)
    setTimeout(function(){
        $(".box").css("opacity", "0");
    },1500)
    setTimeout(function(){
        $(".loading").css("opacity", "0");
        $(".loading").css("z-index","-100000");
    },2000)
}) 

let prevScroll = window.pageYOffset
window.onscroll = function(){  
    currentScroll = window.pageYOffset
    if(prevScroll > currentScroll && $(document).scrollTop() < 50){
      $(".my-bg").css("background-color", "transparent");
      $("nav .nav-link").css("color","#f1f1f1");
      $("nav .toggle-right").css("color","#f1f1f1");
    }
    else if(prevScroll > currentScroll){
        $(".my-bg").css("top","0")
        $(".my-bg").css("background-color","white")
        $("nav .nav-link").css("color","#242424")
        $("nav .toggle-right").css("color","#242424")
    }
    else{
        $(".my-bg").css("top","-100px")
    }
    prevScroll = currentScroll
}
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        },
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

    });
  });
  particlesJS("particles-js", {"particles":{"number":{"value":433,"density":{"enable":false,"value_area":8979.107540846928}},
  "color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},
  "image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,
  "anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,
  "anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
  "move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":706.5071747021702,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var  update;
  /*end of particles*/
  new WOW().init();

  let img = $("#portfolio img");
  let title = $("#portfolio .layer h2")
  let desc = $("#portfolio .layer p")
  let link = $("#portfolio .layer a")
  let tools = $("#portfolio .layer span")
  img.click(function(){
      let thisSrc = $(this).attr("src")
      $("#portfolio .layer").css("display","block")
      $("#portfolio .layer img").attr("src",thisSrc)
      console.log($(this).attr("src"))
      if($(this).attr("src") == "images/MiTalent.png"){
          title.html("MiTalent")
          desc.html("MiTalent is template for a website of a company that showcases its clients in a beautiful design.")
          link.attr("href","https://maryamfarrag.github.io/miTalent/")
          link.html("check page.")
          tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery.")
      }
      else if($(this).attr("src") == "images/BookABook.png"){
        title.html("BookABook")
        desc.html("BookABook is design for a website that helps buying books online and showing the best books.")
        link.attr("href","https://maryamfarrag.github.io/BookABook/")
        link.html("check page.")
        tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery.")
    }
    else if($(this).attr("src") == "images/BestScene.png"){
        title.html("MasterScene")
        desc.html("MasterScene is design for a website that makes users choose the best scene of each movie")
        link.attr("href","https://www.behance.net/gallery/81046285/MasterScene")
        link.html("check page.")
        tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery.")
    }
    else if($(this).attr("src") == "images/planA/plana3.png"){
        title.html("PlanA")
        desc.html("PlanA is a website that suggests different places for different purposes.")
        link.attr("href","https://www.behance.net/gallery/81045983/PlanA")
        link.html("check page.")
        tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery, PHP, Mysql, Angular7, AJAX.")
    }
    else if($(this).attr("src") == "images/Angora.jpg"){
        title.html("Angora")
        desc.html("Angora is a template of a company showing its staff and services.")
        link.attr("href","https://maryamfarrag.github.io/Angora/")
        link.html("check page.")
        tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery.")
    }
    else if($(this).attr("src") == "images/admin panel.png"){
        title.html("Admin Panel")
        desc.html("a simple system that shows the clinets with their entry dates, and alarms the admins when the expiration dates are 5 or less days away.")
        link.attr("href","https://www.behance.net/gallery/82181325/admin-panel")
        link.html("check page.")
        tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery, PHP, MySql, AJAX.")
    }
    else if($(this).attr("src") == "images/api2.png"){
        title.html("API-Viewer")
        desc.html("a simple Project that takes the API URL the user enters and sorts it in an organized way in the web page.")
        link.attr("href","https://maryamfarrag.github.io/API-Viewer/")
        link.html("check page.")
        tools.html("tools:HTML5, CSS3, Bootstrap, JavaScript, JQuery, JSON.")
    }
})
$("#portfolio .layer i").click(function(){
    $("#portfolio .layer").css("display","none")
})
$(document).keyup(function(e){
    if(e.key == "Escape"){
        $("#portfolio .layer").css("display","none")
    }
})
