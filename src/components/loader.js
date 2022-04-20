import React, {useState, useEffect} from 'react';

const Loader = (props) => {
const {bgcolor, completed} = props;

const container={
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
    borderRadius: '80px',
}

const filler={
    height:'100%',
    width:`${completed}%`,
    backgroundColor:'#09ff00',
    borderRadius: '80px',
}

const labelStyle={
    color:'white',
    padding:"2px",
    

}
    return (
        <div style={container}>
            <div style={filler} >
                {/* <span style={labelStyle} >
                    {`${completed}%`}
                </span> */}
            </div>
            
        </div>
    );
}

export default Loader;
