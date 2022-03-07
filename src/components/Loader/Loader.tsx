import React from 'react';
import ReactLoading from "react-loading";

const Loader = () =>{
    return <div data-testid='loader_spinner'>
        <ReactLoading type="balls" color="#797D62" />    
    </div>;
}

export default Loader;
