// import React from "react";

        const ChildProps=(props)=>{
            let msg="is is function"
            console.log(props);
            return(
                <div>
                    <h1>{msg}</h1>
                    <h2>{props.message}</h2>
                    <h2>{props.children[0]}</h2>
                    <h2>{props.children[1]}</h2>
                    <h2>{props.children[2]}</h2>

                </div>
            )
        }


export default ChildProps;