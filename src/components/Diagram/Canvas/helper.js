export const drawColumnChart = (ctx, columns) => {
    const columnsNum = columns.length;
    const step = ctx.canvas.width/columnsNum;
    const initialStep = step/4;
    for (let i = 0; i < columnsNum; i++) {
        if(columns[i].color) {
            ctx.beginPath();
            ctx.rect(initialStep + step*i, ctx.canvas.height - columns[i].height, step/2, columns[i].height);
            ctx.fillStyle = columns[i].color;
            ctx.fill();
        }
    }

}

export const drawLinear = (ctx, columns) => {
    const columnsNum = columns.length;
    const step = ctx.canvas.width/(columnsNum - 1);
    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height);
    for (let i = 0; i < columnsNum; i++) {
        ctx.lineTo(step*i, ctx.canvas.height - columns[i].height);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(step*i, ctx.canvas.height - columns[i].height, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

export const drawCoordinates = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, ctx.canvas.height);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
    ctx.stroke();
}