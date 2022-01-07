import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: window.innerHeight - 200, }}>
      {props.children}
    </div>
  );
};

export default Scroll;