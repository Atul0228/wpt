import Graduate from "./Graduate"

export default function UserValue()
{
    
    return (<>
    <label></label>
    <input type="text" palceholder="enter your name"/>
    <select>
        <option onClick={()=>{<Graduate/>}}>graduate</option>
        <option>under graduate</option>
        <option>post graduate</option>
    </select>
    </>)
}