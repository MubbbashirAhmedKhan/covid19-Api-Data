import React, {useEffect} from 'react'

const Covid = ()=>{
    
    const getData = async () =>{

        try{
            const res = await fetch('https://api.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            console.log(res);

        }catch(err){
            console.log(err);

        }
    

    }

    useEffect(()=>{
    
             getData();
        
    },[ ]);

    return(
     <>
         <div className="container">
         <h1> Covid-19 Data</h1>  
        <h2>Pakistan Covid-19 Cases</h2>
         <img src="./image/covid.jpg"/> 

        </div>
    
     </>
    )
  }
  
  export default Covid