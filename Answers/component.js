//Write the code for dynamically inserting new components.

<html> 
<head> 
<title>inserting new components dynamically</title> 
<script type="text/javascript"> 
    function addNode () { var newP = document. createElement("p"); 
    var textNode = document.createTextNode(" This is other node"); 
    newP.appendChild(textNode); document.getElementById("parent1").appendChild(newP); } 
</script> 
</head> 
<body> <p id="parent1">firstP<p> </body> 
</html>