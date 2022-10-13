var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var thorX = initialTX;
var thorY = initialTY;
// game loop
while (true) {
    var remainingTurns = parseInt(readline());
    var directionX = "";
    var directionY = "";
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if(thorX > lightX){
        directionX = "W";
        thorX --;
    }else if(thorX < lightX) {
        directionX = "E";
        thorX ++;
    }else{
        directionX = "";
    }
    if(thorY > lightY){
        directionY = "N";
        thorY --;
    }else if(thorY < lightY){
        directionY = "S";
        thorY ++;
    }else{
        directionY = "";
    }
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX);
}