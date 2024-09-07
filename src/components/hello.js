import React from "react";

const hello = () =>{
    return(
        // <div>
        //     <h1> Hello to you Srijan</h1>
        // </div>\
        React.createElement("div",null,React.createElement("h1",null,"Hello to you Srijan")) 
    )
}

export default hello 