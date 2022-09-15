import React,{useEffect,useState} from 'react'

function Clock() {
    const [clockState,setState] = useState();

        useEffect(()=>{
            setInterval(()=>{
                const date = new Date();
                setState(date.toLocaleTimeString());
            },1000)
        },[])
  return (
    <div>{clockState}</div>
  )
}

export default Clock;