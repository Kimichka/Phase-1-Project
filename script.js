console.log("This is the script.js file")


fetch("http://localhost:3000/ingredients")
.then(response => response.json())
.then(data => console.log(data))