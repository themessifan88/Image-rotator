import React from 'react';
import ImageBox from './image-box';

const ImageBoxRow = ({ row }) => {
    return (<div className="image-box-row">
        {row.map((box, ind) => (<ImageBox faceNum={box} key={ind} />))}
    </div>);
}
export default ImageBoxRow;