import React from 'react';
import { Button, Paper } from '@material-ui/core';
import useStyles from './styles'
import { Bar } from 'react-chartjs-2';

import { useSelector } from 'react-redux';

const Diagram = () => {
  const columns = useSelector((state) => state.columnsEditor.columns)
  const classes = useStyles();
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
  
  const onExport = async () => {
    const fileHandle = await window.showSaveFilePicker({
      types: [{
        accept: {'application/json': ['.json']},
      }],
      suggestedName: 'diagram-values.json',
    });
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(JSON.stringify(columns));
    await fileStream.close();
  }
  
  return <>
    <Button variant="contained" size="large" onClick={onExport}>
      Export to json
    </Button>
    <Paper className={classes.paper}>
      <Bar
        data = {state}
        options = {{
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </Paper>
  </>
}

export default Diagram;