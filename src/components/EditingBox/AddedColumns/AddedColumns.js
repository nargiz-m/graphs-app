import React from 'react';
import Item from './Item/Item';
import { useSelector } from 'react-redux';

const AddedColumns = () =>{
    const columns = useSelector((state) => state.columnsEditor.columns)
    return <>{columns.map((item) => (
        <div key={item.id}>
            <Item item={item}/>
        </div>
    ))}</>;
}

export default AddedColumns;