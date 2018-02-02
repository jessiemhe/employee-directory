var info = {};
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://raw.githubusercontent.com/thejesshe/employee-directory/master/package.json') 
ourRequest.onload = function(){
    ourData = JSON.parse(ourRequest.responseText);
    info = ourData;
}
ourRequest.send();


var click = document.getElementById("card1");
click.addEventListener("click", function(){

    var myGen = function*() {
        var one = yield info[0];
        var two = yield "done";
    }
    
    var gen = myGen();
    console.log(gen.next());
    console.log(gen.next());

});

var click = document.getElementById("card2");
click.addEventListener("click", function(){

    var myGen = function*() {
        var one = yield info[1];
        var two = yield "done";
    }
    
    var gen = myGen();
    console.log(gen.next());
    console.log(gen.next());

});

var click = document.getElementById("card3");
click.addEventListener("click", function(){

    var myGen = function*() {
        var one = yield info[2];
        var two = yield "done";
    }
    
    var gen = myGen();
    console.log(gen.next());
    console.log(gen.next());

});
