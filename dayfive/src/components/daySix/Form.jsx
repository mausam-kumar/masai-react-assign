import React from 'react'
import {Button} from '../../components/Button.jsx'

function Form() {

    const [state,setState] = React.useState({
        name:"",
        gender:"",
        role:"",
        mStatus:false
    })

    let imageUrl = React.useRef(null)

    function handleValue(e){
        // console.log("target",e.target.value);
        switch (e.target.name) {
            case "nameField":
                setState({...state,name:e.target.value})
                break;
            case "genderField":
                setState({...state,gender:e.target.value})
                break;
            case "role":
                setState({...state,role:e.target.value})
                break;
        
            default:
                break;
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        let files = imageUrl.current.files
        let reader = new FileReader()
        reader.readAsDataURL(files[0])

        reader.onload = (e) => {
            console.log("image",e.target.result);
        }

        console.log("Clicked");
        console.log(state);
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nameField">Name : </label>
                <input type="text" id="nameField" name="nameField" placeholder="Enter Name" onChange={(e) => handleValue(e)} />
            </div>
            <div>
                <label htmlFor="gender">Select Gender : </label>
                <select name="genderField" id="gender" onClick={(e) => handleValue(e)}>
                    <option value="Select Gender">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Femele">Femele</option>
                </select>
            </div>
            <div>
                <label htmlFor="role">Select Role : </label>
                <select name="role" id="role" onClick={(e) => handleValue(e)}>
                    <option value="Select Role">Select Role</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
            </div>
            <div>
                <label htmlFor="mStatus">Marital Status : </label>
                <input type="checkbox" name="mStatus" id="mStatus" onClick={(e) => setState({...state, mStatus:e.target.checked?true:false})} />
            </div>
            <div>
                <label htmlFor="imageField">Choose File : </label>
                <input ref={imageUrl} type="file" name="imageField" id="imageField" />
            </div>
            <Button title="Sumbit" color="blue"/>
            </form>
        </div>
    )
}

export default Form
