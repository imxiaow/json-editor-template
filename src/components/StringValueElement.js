import { useState, useEffect, useMemo } from "react";

  
//  function setDeep(obj, path, value, setrecursively = false) {
//     path.reduce((a, b, level) => {
//         if (setrecursively && typeof a[b] === "undefined" && level !== path.length){
//             a[b] = {};
//             return a[b];
//         }

//         if (level === path.length){
//             a[b] = value;
//             return value;
//         } 
//         return a[b];
//     }, obj);
// }


function StringValueElement (props){

    // console.log("total path keys/levels:")
    // console.log(props.parentKeys)

    // // store the first one into dictionary first.
    // var levelDataDict={}
    // var firstParentKey = props.parentKeys[0]
    // levelDataDict[firstParentKey]=copyHugeData[firstParentKey]

    // for(var i=1; i<(props.parentKeys.length); i++){
    //     // from the second
    //     // for each one, we first need to take out the previous level value by i-1
    //     var previousLevelKey = props.parentKeys[i-1]
    //     var currentLevelKey = props.parentKeys[i]
    //     var previouLevelValue = levelDataDict[previousLevelKey]
    //     levelDataDict[currentLevelKey] = previouLevelValue[currentLevelKey]
    // }
    // console.log("level data dictionary")
    // console.log(levelDataDict)
    // console.log("key and value:")
    // console.log(props.parentKeys[props.parentKeys.length-1])
    // console.log(levelDataDict[props.parentKeys[props.parentKeys.length-1]] )

    /* --------- handle input change ------ */
    const handleInputChangeString =(e) =>{
        // levelDataDict[e.target.id] =(e.target.value)
        // console.log(levelDataDict)
        // for(var i=(props.parentKeys.length-1); i > 0; i--){
        //     var curKey = props.parentKeys[i]
        //     var curValue = levelDataDict[curKey]

        //     var sourceObject={}
        //     sourceObject[curKey] = curValue

        //     var nextKey = props.parentKeys[i-1]
        //     var nextValue =levelDataDict[nextKey]
        //     var targetObject = {}
        //     targetObject[nextKey]=nextValue

        //     console.log("hhhh")
        //     console.log(sourceObject)
        //     console.log(targetObject)
            
        //     var returnedObject = Object.assign(targetObject, sourceObject)
        //     levelDataDict[nextKey]=returnedObject
        // }
        // console.log("curtimechange:")
        // console.log(levelDataDict)
        var copyHugeData = {... props.localData}
        // setDeep(copyHugeData, props.parentKeys, e.target.value);

        // need to set the input value corrding to path,
        // and then reset the data state. 

        console.log(copyHugeData)

    }

    return (
        <input
            id={props.inputKey}
            key={props.inputKey}
            value={props.inputValue}
            onChange={(e) => handleInputChangeString(e)}
            type="text"
        />
    );
        
}
export default StringValueElement