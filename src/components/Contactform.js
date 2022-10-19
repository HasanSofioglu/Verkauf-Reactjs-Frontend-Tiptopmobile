import React from 'react'
import './contactform.css';
function Contactform() {
   
    
  return (
    <div class="containerContactForm">  
  <form id="contact" action="" method="post">
    <h3>Gesellschaft Contact Form</h3>
    <h4>Firm Contact Form</h4>
    <fieldset>
      <input placeholder="Name der Firma" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Ihren Namen" type="text" tabindex="2" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Ihren Email Address" type="email" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Ihren Phone Number (optional)" type="tel" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Firma Web Site (optional)" type="url" tabindex="5" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Schreibe deine Nachricht hier..." tabindex="6" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>

  </form>
  
</div>

  )
}

export default Contactform