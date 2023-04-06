import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Style Sheet
import './Form.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("myyabgzo");
  if (state.succeeded) {
      return <p>Thank you!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            First & Last Name
        </label>
        <input
            id="name"
            type="name" 
            name="name"
        />
         <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email" 
            name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label htmlFor="email">
            Message
        </label>
        <textarea
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button className='form-button'type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
