import React, { useState } from 'react'

function Footer() {
    const [email,setEmail]= useState("");

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    }

    const handleSubmit = async(btn)=>{
        console.log("Submitted Successfully")
        btn.preventDefault()
        try{

            const response = await fetch("https://jordfins.onrender.com/api/newuser",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email})
            });
            if (!response.ok){
                throw new Error("Error is from server")
            }
            setEmail('')
        }
        catch(err){
            console.log("Error Frontend" , err)
        }
        finally{
            setEmail('')
        }
    }
    return (
        <>
            <div className="footer">


                <div className="ft-newsletter">
                    <h1>Subscribe to stay in loop with our latest products</h1>
                    <p>Email Address :</p>
                    <form onSubmit={handleSubmit}>

                    <input type="email" name="email" placeholder="Email  : " onChange={handleEmailChange} value={email}/>
                    <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="ft-quick-links">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About-Founders</a></li>
                        <li><a href="#">Products</a></li>
                    </ul>
                </div>
                <div className="ft-contact">
                    <h1>Contact</h1>
                    <ul>
                        <li><i className="fa-solid fa-house"></i><span>No physical shops</span></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a><span>jord.155</span></li>
                        <li><i className="fa-brands fa-whatsapp"></i><span>8826667521</span></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer