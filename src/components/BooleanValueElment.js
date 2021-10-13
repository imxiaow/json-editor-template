import { useState, useEffect, useMemo } from "react";


function BooleanValueElement (props){
    const [checkState, setCheckState] = useState(props.inputBoxValue)


    /* --------- handle input change ------ */
    const handleInputChangeBoolean = (e)=>{

        if(checkState===true){
            var originKeValuePair = {}
            originKeValuePair[e.target.id]=checkState
            console.log("origin:")
            console.log(originKeValuePair)

            // setCheckState(false)
            var curKeyValuePair = {}
            curKeyValuePair[e.target.id] =(false)
            console.log("newly modified:")
            console.log(curKeyValuePair)

            console.log("object assign: ")
            var objectAssignedKeyValuePair= Object.assign(originKeValuePair,curKeyValuePair)
            console.log(objectAssignedKeyValuePair)

        }else if(checkState ===false){
            var originKeValuePair = {}
            originKeValuePair[e.target.id]=checkState
            console.log("origin:")
            console.log(originKeValuePair)

            // setCheckState(false)
            var curKeyValuePair = {}
            curKeyValuePair[e.target.id] =(true)
            console.log("newly modified:")
            console.log(curKeyValuePair)

            console.log("object assign: ")
            var objectAssignedKeyValuePair= Object.assign(originKeValuePair,curKeyValuePair)
            console.log(objectAssignedKeyValuePair)

        }

    }

    return (
        <input
            id={props.inputBoxKey}
            key={props.inputBoxKey}
            type="checkbox"
            onChange={(e) => handleInputChangeBoolean(e)}
            checked={checkState}
        />
    );
        
}
export default BooleanValueElement