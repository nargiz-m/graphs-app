import React, { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn, create } from '../../redux/columnsSlice';
import { Button } from '@material-ui/core';
import AddedColumns from './AddedColumns/AddedColumns';
import useStyles from './styles';
import add from '../../icons/add.svg'

const EditingBox = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inputFileRef = createRef();

    const onAddColumn = () => {
        dispatch(addColumn())
    };

    const onImport = () => {
        inputFileRef.current.click()
    }
    
    const onReaderLoad = (event) => {
        dispatch(create(JSON.parse(event.target.result)))
    }

    const onInputClick = (event) => {
        const reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    return (<>
        <Button variant="contained" className={classes.addButton} size="large" onClick={onAddColumn}>
            <img src={add}/>
            add a column
        </Button>
        <Button variant="contained" size="large" color="secondary" onClick={onImport}>
          Import from json
        </Button>
        <input id="file-input" type="file" name="name" accept='.json' ref={inputFileRef} className={classes.inputFile} onChange={onInputClick}/>
        <AddedColumns/>
    </>);
}

export default EditingBox;