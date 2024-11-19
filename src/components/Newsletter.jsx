import { useState } from "react";

const Newsletter = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email.includes("@")) {
            setMessage("Thank you for subscribing");
            setEmail("");
        }else {
            setMessage("Please enter a valid address.");
        }
    }

  return (
    <>
      <div className="newsletter-container">
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className='newsletter-form'>
            <input type="email"  value={email} onChange={handleInputChange} placeholder='Enter your email' className='newsletter-input'/>
            <button className='subscribe-button' type='submit'>Subscribe</button>
        </form>
       {message && ( <p className="message">{message}</p>)}
      </div>
    </>
  )
}

export default Newsletter;
