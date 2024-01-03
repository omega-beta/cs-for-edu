var game = function(processingInstance) {
    with(processingInstance) {
        var x, y, locationX, locationY;
        locationX = mouseX;
        locationY = mouseY;
        function moveUp() {
            if (event.key === "e") {
                rect(mouseX, mouseY, 200, 200);
            }
        }
        draw = function() {
            moveUp();
        }
    }
};
var gameCanvas = document.getElementById("game");
var processingInstance = new Processing(gameCanvas, game);
