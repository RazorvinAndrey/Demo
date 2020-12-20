import React, {useEffect, useState} from 'react'

const ProfileStatusWithHook = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () =>{
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () =>{
        setEditMode(true);
    }

    const deActivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }
    return(
        <div>
            {!editMode &&
                <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook;