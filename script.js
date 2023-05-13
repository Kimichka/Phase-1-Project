console.log("script.js is running")


fetch("http://localhost:3000/pizza")
.then(response => response.json())
.then(data => console.log(data))