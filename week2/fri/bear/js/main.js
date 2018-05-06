

$(document).on("keydown", function(event) {
  console.log(event.key);

  $("li").html(event.key);
});


$("#kitty").on("mousemove", function (event){
  console.log(event.offsetX, event.offsetY);
}
);


$("#kitty").on("mouseenter", function (event) {
  console.log('mouseenter', event);
}
);


$("input").eq(0).on("blur", function (){
  console.log("blurred");
});


$("input").eq(0).on("focus", function(event){
  console.log("focused");
});



$("form").on("submit", function(event){
  console.log("submit");
  const inputContents = $("input").eq(0).val();

  console.log("form field contents:", inputContents);


  if (inputContents.length === 0) {
    console.log("please enter valid data");
    return false;
  }
  return true;
});





$("#toggle").on("click", function(){
  $(".triple-kitty1").eq(0).toggle();
});




$("#fade").on("click", function(){
  $(".triple-kitty2").fadeToggle(2000);
});


// $("input").keypress(function() {
//   $("span").text(i += 1);
// }
// );
//
//
//
// $("input").keyup(function(){
//   $("input").css("background-color", "hotpink");
// }
// );
//
// $("#kitty").click(function(){
//   alert("This picture has been clicked")
// }
// );
//
//
//
//
//
//
// $('input').blur(function() {
//   // alert("This input field has lost its focus");
// });
//
//
//
//
//
//
// $("#toggle").mousedown(function(){
//
// }
// )
//
//
//
//
//
// $("#kitty").blur(function() {
//
// }
// )
