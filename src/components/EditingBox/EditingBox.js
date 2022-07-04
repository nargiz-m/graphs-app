import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/columnsSlice';
import { Button } from '@material-ui/core';
import AddedColumns from './AddedColumns/AddedColumns';
import useStyles from './styles';
import add from '../../icons/add.svg'

const EditingBox = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const columns = useSelector((state) => state.columnsEditor.columns)

    const onAddColumn = () => {
        dispatch(addColumn())
    };

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

    return (<>
        <Button variant="contained" className={classes.addButton} size="large" onClick={onAddColumn}>
            <img src={add}/>
            add a column
        </Button>
        <Button variant="contained" size="large" color="secondary"  onClick={onExport}>
          Export to json
        </Button>
        <AddedColumns/>
    </>);
}

export default EditingBox;