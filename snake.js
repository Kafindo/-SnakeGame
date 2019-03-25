
        const CANVAS_BORDER_COLOUR = 'balck';
        const CANVAS_BACKGROUND_COLOUR = "white";
        const SNAKE_COLOUR ='lightgreen';
        const SNAKE_BORDER_COLOUR ='darkgreen';

        var gameCanvas = document.getElementById("gameCanvas");

        var ctx = gameCanvas.getContext("2d");

        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;

        ctx.strokestyle = CANVAS_BORDER_COLOUR;

        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

        ctx.strokeRect(0, 0,gameCanvas.width, gameCanvas.height);
