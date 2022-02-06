import React from "react";

function Lucy() {
    return (
        <>
            <h1>This is the Lucy Page</h1>
            <img src={require('../assets/Lucy.JPG')} alt="my dog" id="Lucy" />
        </>
    );
}

export default Lucy;