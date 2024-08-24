import React, { useState,useEffect } from 'react'
import Faq from './Faq'



function Faqs() {
    const [data,setData]= useState([])
   useEffect(() => {
     
    const fetchData =  async() =>{
        try{
            const res = await fetch('https://jordfins.onrender.com/api/faqs')
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const response = await res.json()
            // console.log(response)
            const neededFaq = 5
            setData(response.slice(0,neededFaq))
            // console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchData()
   }, [])
    

  return (
    <>
     <div className="faqs">
            <h1 className='catchy-heading'>Need Help? We've got your back!</h1>
            <hr className='faqs-hr about-founders-hr products-page-hr'/>
            <div className="faqs-main ">
                {
                    data &&
                         data.map((faq,index)=>{
                            return(
                            <Faq  key={index} question={faq.question} answer = {faq.answer}/>
                            )
                        })
                    // <Faq/>
                }
               
            </div>
        </div>
    </>
  )
}

export default Faqs