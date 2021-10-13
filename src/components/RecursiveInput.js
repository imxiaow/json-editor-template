import { useState, useEffect, useMemo } from "react";
import HandleDiffTypesChild from './HandleDiffTypesChild'

function RecursiveInput (props){

    const memoParentDataKey = useMemo(()=>{
        const memoParentDataKey = Object.keys(props.processParentData).sort()
        console.log(memoParentDataKey)
        return memoParentDataKey

    },[props.processParentData])

    return(
        <ul>
            {
                memoParentDataKey.map((key, index) => {
                    console.log(key)
                    console.log(props.processParentData[key])
                    return(
                        <li key={key}>
                            <strong>{key}</strong>:{" "}
                            <HandleDiffTypesChild 
                                key={key}
                                parentCurKey={key} 
                                parentCurValue={props.processParentData[key]} 
                                setLocal={props.setParentData} 
                                localData={props.processParentData}
                                parentKeys={[key]}
                                type="top"
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RecursiveInput