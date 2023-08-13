import { useState } from "react";

const TaskForm = ({onAdd}) => {
    const [name,setName] = useState("");

    function handleSubmit (ev){
        ev.preventDefault();
        onAdd(name);
        setName("");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input 
                type="text"
                placeholder="your next task"
                value={name}
                onChange={e=> setName(e.target.value)}
                />
        </form>
     );
}
 
export default TaskForm;