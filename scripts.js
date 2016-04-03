function getOutput(){
  return $(".output").text();
}



$(document).ready(function(){
  console.log("test0123456789");
  $(".number").click(function(){
    $(".output").append($(this).children('.item').text());
  });
  $(".operation").click(function(){
      $(".output").append($(this).children('.item').text());
  });
  $(".equals").click(function(){
    var calculation = getOutput();
    console.log(eval(calculation));
  });
  $(".clear").click(function(){
    if($(this).children('.item').text()=="AC"){
      //clear memory
      alert("ac");
      $(".output").html('');
    }
    if($(this).children('.item').text()=="CE"){
      //clear entry
      alert("ce");
      $(".output").html('');
    }
  });
});
