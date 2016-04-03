$(document).ready(function(){
  console.log("test0123456789");
  $(".number").click(function(){
    alert($(this).children('.item').text());
    console.log($(this).children('.item').text());
    $(".output").append($(this).children('.item').text());
  });
});
