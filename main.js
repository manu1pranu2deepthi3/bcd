canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth= 1;
ctx.rect()(150, 143, 430, 200);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth= 5;
ctx.arc()(250,210,40 , 0 , 2 * Math.PI );
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth= 5;
ctx.arc()(350,210,40 , 0 , 2 * Math.PI );
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth= 5;
ctx.arc()(210,40,40 , 0 , 2 * Math.PI );
ctx.stroke();




ctx.strokeStyle = "orange";
ctx.lineWidth= 5;
ctx.arc()(300,250,40 , 0 , 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth= 5;
ctx.arc()(400,250,40 , 0 , 2 * Math.PI );
ctx.stroke();