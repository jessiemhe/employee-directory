var click = document.getElementById("card1");
click.addEventListener("click", function(){
    
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://raw.githubusercontent.com/thejesshe/employee-directory/master/package.json') 
ourRequest.onload = function(){
    ourData = JSON.parse(ourRequest.responseText);
    alert("Name: " +
          ourData[0].name +
          "\n" + "Position: " +
          ourData[0].position +
          "\n" + "Extension: " +
          ourData[0].extension);
}
ourRequest.send(); 
});

var click = document.getElementById("card2");
click.addEventListener("click", function(){
    
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://raw.githubusercontent.com/thejesshe/employee-directory/master/package.json') 
ourRequest.onload = function(){
    ourData = JSON.parse(ourRequest.responseText);
    alert("Name: " +
          ourData[1].name +
          "\n" + "Position: " +
          ourData[1].position +
          "\n" + "Extension: " +
          ourData[1].extension);
}
ourRequest.send(); 
});

var click = document.getElementById("card3");
click.addEventListener("click", function(){
    
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://raw.githubusercontent.com/thejesshe/employee-directory/master/package.json') 
ourRequest.onload = function(){
    ourData = JSON.parse(ourRequest.responseText);
    alert("Name: " +
          ourData[2].name +
          "\n" + "Position: " +
          ourData[2].position +
          "\n" + "Extension: " +
          ourData[2].extension);
}
ourRequest.send(); 
});
