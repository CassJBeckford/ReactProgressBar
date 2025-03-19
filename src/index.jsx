import ProgressBar from './progress.jsx'
import { useState } from 'react'
import './index.css'

export default function Index() {
    const [progress, setProgress] = useState(0);

    function handleIncreaseButton(){ 
        if (progress < 100){
          setProgress(progress + 10);
        }
        else {
          setProgress(progress == 0);
        }
    }

    function reset(){
        setProgress(0);
    }


    return(<div> <ProgressBar progress={progress}/>  
    <button onClick={handleIncreaseButton}> Increase Progress </button> 
    
    <button onClick={reset}> reset </button>
    </div>);
}