$(document).ready(function(){
  console.log("test");
  $(".number").click(function(){
    console.log($(this).children('.item').text());
    $(".output").append($(this).children('.item').text());
  });
});
