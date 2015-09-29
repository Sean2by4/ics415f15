/**
 * Created by uhproductionsretina on 9/25/15.
 * I know there is definitely a much more code efficient way to do this, but this works!
 */

var hidden1 = true;
var hidden2 = true;
var hidden3 = true;
var hidden4 = true;
var hidden5 = true;
$(document).ready(function(){
    $("#q1").click(function(){
        if (hidden1) {
            $("#a1").toggle();
            q1.innerHTML = "What do ducks go? (-)";
            hidden1 = false;
        }
        else {
            $("#a1").toggle();
            q1.innerHTML = "What do ducks go? (+)";
            hidden1 = true;
        }
    });
});

$(document).ready(function(){
    $("#q2").click(function(){
        if (hidden2) {
            $("#a2").toggle();
            q2.innerHTML = "What do cows go? (-)";
            hidden2 = false;
        }
        else {
            $("#a2").toggle();
            q2.innerHTML = "What do cows go? (+)";
            hidden2 = true;
        }
    });
});

$(document).ready(function(){
    $("#q3").click(function(){
        if (hidden3) {
            $("#a3").toggle();
            q3.innerHTML = "What do pigs go? (-)";
            hidden3 = false;
        }
        else {
            $("#a3").toggle();
            q3.innerHTML = "What do pigs go? (+)";
            hidden3 = true;
        }
    });
});

$(document).ready(function(){
    $("#q4").click(function(){
        if (hidden4) {
            $("#a4").toggle();
            q4.innerHTML = "What do dogs go? (-)";
            hidden4 = false;
        }
        else {
            $("#a4").toggle();
            q4.innerHTML = "What do dogs go? (+)";
            hidden4 = true;
        }
    });
});

$(document).ready(function(){
    $("#q5").click(function(){
        if (hidden5) {
            $("#a5").toggle();
            q5.innerHTML = "What do Alana go? (-)";
            hidden5 = false;
        }
        else {
            $("#a5").toggle();
            q5.innerHTML = "What do Alana go? (+)";
            hidden5 = true;
        }
    });
});


$(document).ready(function(){
        $("#input").click(function() {
            var url = document.getElementById('URL').value;
            output.innerHTML = url.links.length;
        })
});
