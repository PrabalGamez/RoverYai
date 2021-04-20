Canvas= document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var mars_array=["MARS-1.jpeg","Mars-2.jpeg","Mars-3.jpeg","Mars-4.jpeg","Mars-5.jpeg"];
var random_number=Math.floor(Math.random()*5);
//seperation
Bg_image=mars_array[random_number];
rover_image="rover.png";
//seperation
rover_width=100;
rover_height=90;
//seperation
rover_x=10;
rover_y=10;
//seperation
function Add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBg;
    background_imgTag.src=Bg_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=upload_rover;
    rover_imgTag.src=rover_image;
}

function uploadBg(){
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
      up();
      console.log("up");
    }

    if(keypressed == "40"){
      down();
      console.log("down");
    }

    if(keypressed == "39"){
        right();
        console.log("right?");
      }
  
      if(keypressed == "37"){
        left();
        console.log("left?");
      }

}

function up(){
  if(rover_y>=0){
    rover_y=rover_y-10;
    console.log("When up arrow is clicked, x="+ rover_x+ "y="+ rover_y);
    uploadBg();
    upload_rover();
  }
}

function down(){
  if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("When down arrow is clicked, x="+ rover_x+ "y="+ rover_y);
    uploadBg();
    upload_rover();
  }
}

function left(){
  if(rover_x>=0){
    rover_x=rover_x-10;
    console.log("When left arrow is clicked, x="+ rover_x+ "y="+ rover_y);
    uploadBg();
    upload_rover();
  }
}

function right(){
  if(rover_x<=700){
    rover_x=rover_x+10;
    console.log("When right arrow is clicked, x="+ rover_x+ "y="+ rover_y);
    uploadBg();
    upload_rover();
  }
}