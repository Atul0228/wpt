import React, { useEffect, useState } from 'react'


export default function Factorial(props)
{
    let num=Number(props.number);
    let [fact,setFact]=useState(1)
    let result=1;

    useEffect(()=>{
        
        for(let i=1;i<=num;i++)
            {
                result=result*i;
            }
                setFact(result)
            }
            ,[num])
    

    
    

    return(<>
    <h1>The factorial is {fact}</h1>
    
    </>)
}