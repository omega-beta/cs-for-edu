var game = function(processingInstance) {
    with(processingInstance) {
        var x, y, locationX, locationY;
        locationX = mouseX;
        locationY = mouseY;
    }
};
var gameCanvas = document.getElementById("game");
var processingInstance = new Processing(gameCanvas, game);
