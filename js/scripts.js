$(document).ready(function(){
  $("form#celebForm").submit(function(event) {

    var depp = 0;
    var bardot = 0;
    var ck = 0;

    var q1 = $("input#q1").val();
    var q2 = $("input#q2").val();
    var q3 = $("input#q3").val();
    var q4 = $("input#q4").val();
    var q5 = $("input#q5").val();


    if (q1 === "black"){

      $(".q1").addClass("has-success");
      depp += 1;
    }
    else if (q1 === "cream and sugar"){
      $(".q1").addClass("has-success");
      bardot += 2;
    }
    else if (q1 === "cream"|| q1 === "sugar"){
      $(".q1").addClass("has-success");
      ck += 3;
    }else{
      $(".q1").addClass("has-error");
    };

    if (q2 === "purple"){
      $(".q2").addClass("has-success");
      depp += 1;
    }
    else if (q2 === "black"){
      $(".q2").addClass("has-success");
      bardot += 2;
    }
    else if (q2 === "red"){
      $(".q2").addClass("has-success");
      ck += 3;
    }else{
        $(".q2").addClass("has-error");

    };

    if (q3 === "escargot"){
      $(".q3").addClass("has-success");
      depp += 1;
    }
    else if (q3 === "lettuce"){
      $(".q3").addClass("has-success");
      bardot += 2;
    }
    else if (q3 === "pizza"){
      $(".q3").addClass("has-success");
      ck += 3;
    }else{
        $(".q3").addClass("has-error");
    };

    if (q4 === "Madagascar"){
      $(".q4").addClass("has-success");
      depp += 1;
    }
    else if (q4 === "Paris"){
      $(".q4").addClass("has-success");
      bardot += 2;
    }
    else if (q4 === "NYC"){
      $(".q4").addClass("has-success");
      ck += 3;
    }else{
        $(".q4").addClass("has-error");

    };

    if (q5 === "metal"){
      $(".q5").addClass("has-success");
      depp += 1;
    }
    else if (q5 === "French Pop"){
      $(".q5").addClass("has-success");
      bardot += 2;
    }
    else if (q5 === "rock"){
      $(".q5").addClass("has-success");
      ck += 3;
    }else{
      $(".q5").addClass("has-error");
    };


    if (depp <= 8){
      $(".results").append("<p>Johnny Depp is your love.</p>");
      }
      else if(bardot === 10) {
        $(".results").append("<p>Brigitte Bardot is your love.</p>");
      }
      else if(ck > 11){
        $(".results").append("<p>Louie C.K. is your love.</p>");
      }
      else {
        $(".results").append("<p>Something's not right!</p>");
      };

    event.preventDefault();
  });
});
