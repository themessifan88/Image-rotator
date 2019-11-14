import React from 'react';
import ImageBoxRow from './image-box-row';

const ImageBoxContainer = ({ matrix }) => {
    return (<div className="image-box-container">
        {matrix.map((row,i) => (<ImageBoxRow row={row} key={i}/>))}
    </div>);
}
export default ImageBoxContainer;