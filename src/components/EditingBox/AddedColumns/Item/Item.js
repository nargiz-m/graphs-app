import React, {useEffect, useState} from 'react';
import {Paper, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core';

import useStyles from './styles';
import cross from '../../../../icons/cross.svg';
import { useDispatch } from 'react-redux';
import { deleteColumn, updateColumn } from '../../../../redux/columnsSlice';
import colors from './colors.json';

const Item = ({item}) => {
	const [column, setColumn] = useState(item);
	const classes = useStyles();
	const dispatch = useDispatch();
	const [digramColors, setDiagramColors] = useState([])

	const availableHeights = [];
	for (let i = 0; i <= 120; i = i + 10) {
		availableHeights.push(i);
	}

	useEffect(() => {
		setDiagramColors(colors)
	}, [colors])

	const onDeleteClick = () => {
		dispatch(deleteColumn(column));
	}

  	const onUpdate = () => {
  	  dispatch(updateColumn(column));
  	}

	return (
    	<Paper className={classes.paper}>
		  <TextField label="Name" name="name" variant="outlined" value={column.name} onChange={(e) => setColumn({... column, name: e.target.value})} onBlur={onUpdate}/>
		  <FormControl variant="outlined" style={{minWidth: 120}}>
		  	<InputLabel>Height</InputLabel>
		  	<Select label="height" value={column.height} onChange={(e) => {
        	  setColumn({... column, height: e.target.value});
        	  dispatch(updateColumn({... column, height: e.target.value}));
        	}}>
		  		{availableHeights.map((height) => (
		  			<MenuItem key={height} value={height}>{height}</MenuItem> 
		  		))}
		  	</Select>
		  </FormControl>
		  <FormControl variant="outlined" style={{minWidth: 120}}>
		  	<InputLabel>Color</InputLabel>
		  	<Select label="color" value={column.color} onChange={(e) => {
        	  setColumn({... column, color: e.target.value});
        	  dispatch(updateColumn({... column, color: e.target.value}));
        	}}>
				{digramColors.length > 0 && Object.keys(digramColors).map(element => <MenuItem key={element} value={digramColors[element].hex}>{digramColors[element].name}</MenuItem>)}
		  	</Select>
		  </FormControl>
		  <Button variant="contained" className={classes.deleteButton} onClick={onDeleteClick}>
		  	<img src={cross}/>
		  </Button>
	  	</Paper>
  );
}

export default Item;