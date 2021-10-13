import { useState, useEffect, useMemo } from "react";
import StringValueElement from "./StringValueElement";
import BooleanValueElement from './BooleanValueElment'


function HandleDiffTypesChild (props){

    const memoChildDataKey = useMemo(()=>{
        const memoChildDataKey = Object.keys(props.parentCurValue).sort()
        console.log("CHECK THIS iS USED DUING RECUSION")
        console.log("this is the current child keys:")
        console.log(memoChildDataKey)
        return memoChildDataKey
    },[props.parentCurValue])
    
    /* ----------------------
        check if the item type: (base cases)
        1: string/ number / boolean => display directly.
        2: a list/ a array => resursive call
        3: an object. 
    -------------  */
    if ( props.parentCurValue.constructor === Number || props.parentCurValue.constructor === String) {

        return(<StringValueElement 
                    key={props.parentCurKey} 
                    inputKey={props.parentCurKey} 
                    inputValue={props.parentCurValue}
                    setLocal={props.setLocal} 
                    localData={props.localData}
                    parentKeys={props.parentKeys}
                />)

    } else if (props.parentCurValue.constructor === Boolean) {

        return(<BooleanValueElement 
                    key={props.parentCurKey}    
                    inputBoxKey={props.parentCurKey} 
                    inputBoxValue={props.parentCurValue} 
                    setLocal={props.setLocal} 
                    localData={props.localData}
                    parentKeys={props.parentKeys}
                />)

    } else if (props.parentCurValue.constructor === Object) {

        return (
            <ul>
                {
                    memoChildDataKey.map((key, index) => {
                        console.log("childKey:")
                        console.log(key)
                        console.log("childValue:")
                        console.log(props.parentCurValue[key])
                        var curKeyList = [...props.parentKeys ]
                        curKeyList.push(key)
                        console.log(curKeyList)
                        return(
                            <li key={key}>
                                <strong>{key}</strong>:{" "}
                                <HandleDiffTypesChild parentCurKey={key} parentCurValue={props.parentCurValue[key]} setLocal={props.setLocal} localData={props.localData} parentKeys={curKeyList} />
                            </li>
                        )
                    })
                }
            </ul>
        )
        
    } else if (props.parentCurValue.constructor === Array) {
        return (
            <ul>
                {
                    memoChildDataKey.map((key, index) => {
                        console.log("childKey:")
                        console.log(key)
                        console.log("childValue:")
                        console.log(props.parentCurValue[key])
                        var curKeyList = [...props.parentKeys ]
                        curKeyList.push(parseInt(key))
                        console.log(curKeyList)
                        return(
                            <li key={key}>
                                <strong>[{key}]</strong>:{" "}
                                <HandleDiffTypesChild parentCurKey={key} parentCurValue={props.parentCurValue[key]} setLocal={props.setLocal} localData={props.localData} parentKeys={curKeyList} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }    
}
export default HandleDiffTypesChild