import React, { useEffect, useRef } from "react";
import { drawColumnChart, drawCoordinates, drawLinear } from "./helper";

export const Canvas = (props) => {
    const { columns } = props || {};
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        const height = Math.max(...columns.map(col => col.height));
        ctx.canvas.height = height;
        drawLinear(ctx, columns);
        drawCoordinates(ctx);
    }, [columns]);
    
    return (
        <canvas ref={canvasRef} style={{width: '100%'}} {...props}/>
    );
}