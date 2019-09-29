$(document).ready(function(e){
    $(".img-check").click(function(){
        $(this).toggleClass("check");
    });
});
$(".workshop img").click(function(){
    console.log("workshop value =>",$(this).parent().siblings()[1].value)
})
