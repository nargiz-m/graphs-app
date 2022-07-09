import React, { useEffect, useRef } from "react";

export const Canvas = (props) => {
    const { columns } = props || {};
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        const height = Math.max(...columns.map(col => col.height));
        ctx.canvas.width = 550;
        ctx.canvas.height = height;
        const columnsNum = columns.length;
        const step = 550/columnsNum;
        const initialStep = step/4;
        for (let i = 0; i < columnsNum; i++) {
            ctx.beginPath();
            ctx.rect(initialStep + step*i, height - columns[i].height, step/2, columns[i].height);
            ctx.fillStyle = columns[i].color;
            ctx.fill();
        }
    }, [columns]);


    return (
        <canvas ref={canvasRef} style={{width: '100%'}} {...props}/>
    );
}