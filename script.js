console.log("This is the script.js file")


fetch("http://localhost:3000/pizza")
.then(response => response.json())
.then(data => console.log(data))