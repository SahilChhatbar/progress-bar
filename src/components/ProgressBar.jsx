import { useState } from "react"

function ProgressBar(){
    let value;
    const [start, setStart]=useState() 
    const [progressValue, setProgressValue]=useState(0)
    function startProgress(value){
        setProgressValue(value);
    }
    return (
        <div className="w-full flex flex-col gap-4 items-center">
         <button onClick={(e)=>{startProgress(value)}} className="border-transparent bg-purple-600 text-white active:bg-purple-700 w-1/10">
      Start
    </button>
    <label>please enter value between 0 and 1 <input type="number" max={1} min={0} value={value}  onChange={e => setProgressValue(e.target.value)}/></label>
    <progress value={progressValue}/>
        </div>
    )

}

export default ProgressBar