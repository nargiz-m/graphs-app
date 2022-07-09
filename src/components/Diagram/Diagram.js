import React, { useRef } from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './styles'
import { Bar } from 'react-chartjs-2';

import { useDispatch, useSelector } from 'react-redux';
import { create } from '../../redux/columnsSlice';
import { Canvas } from './Canvas';

const Diagram = () => {
  const columns = useSelector((state) => state.columnsEditor.columns)
  const classes = useStyles();
  const dispatch = useDispatch()
  const inputFileRef = useRef(null);
  const state = {
    labels: columns.map((item) => item.name),
    datasets: [
      {
        label: columns.map((item) => item.name),
        backgroundColor: columns.map((item) => item.color),
        data: columns.map((item) => item.height)
      },
    ]
  }
  
  const cleanUp = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
 
  const onReaderLoad = (event) => {
    dispatch(create(JSON.parse(event.target.result)))
  }

  const dropHandler = (e) => {
    cleanUp(e);
    
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    const droppedFile = e.dataTransfer.items[0];
    if(droppedFile.type === "application/json") {
      reader.readAsText(droppedFile.getAsFile());
    } else {
      alert('Wrong file format');
    }
  }

  const onImport = () => {
    inputFileRef.current.click()
  }

  const onInputClick = (event) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  return <>
    <Paper className={classes.paper} onClick={onImport} onDrop={dropHandler} onDragOver={cleanUp}>
      <div>
        Drop or click here to import the JSON file
      </div>
      <Bar
        data = {state}
        options = {{
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
      <Canvas columns={columns}/>
    </Paper>
    <input id="file-input" type="file" name="name" accept='.json' ref={inputFileRef} style={{display: 'none'}} onChange={onInputClick}/>
  </>
}

export default Diagram;