import React from 'react';
import {useWindowDimensions} from '../modules/window-dimensions'

const Scroll = (props) => {
    const { height, width } = useWindowDimensions();

  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: height - 215, }}>
      {props.children}
    </div>
  );
};

export default Scroll;