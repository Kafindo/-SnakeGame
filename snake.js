
        const CANVAS_BORDER_COLOUR = 'balck';
        const CANVAS_BACKGROUND_COLOUR = "white";
        const SNAKE_COLOUR ='lightgreen';
        const SNAKE_BORDER_COLOUR ='darkgreen';

        let snake = [
            {x: 150, y:150},
            {x: 140, y:150},
            {x: 130, y:150},
            {x: 120, y:150},
            {x: 110, y:150}
        ]

        var gameCanvas = document.getElementById("gameCanvas");

        var ctx = gameCanvas.getContext("2d");

        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;

        ctx.strokestyle = CANVAS_BORDER_COLOUR;

        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

        ctx.strokeRect(0, 0,gameCanvas.width, gameCanvas.height);

        drawSnake();


        function drawSnake(){

            snake.forEach(drawSnakePart)
        }

        function drawSnakerPart(snakePart){

            ctx.fillStyle = SNAKE_COLOUR;

            ctx.strokestyle = SNAKE_BORDER_COLOUR;

            ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

            ctx.sttrokeRect(snakePart.x, snakePart.y, 10, 10);
        }