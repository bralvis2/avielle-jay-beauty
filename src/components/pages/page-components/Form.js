import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Style Sheet
import './Form.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("myyabgzo");
    if (state.succeeded) {
        return <p className='thanks'>Thank you for your inquiry!</p>;
    }
    return (

        <form onSubmit={handleSubmit}>
            <h1>Send us an inquiry</h1>
            <div className='name'>
                <div className='custom-input'>
                    <label htmlFor="firstname">
                        Bride's First Name?
                    </label>
                    <input
                        id="firstname"
                        type="name"
                        name="firstname"
                        required
                    />
                    <ValidationError
                        prefix="FirstName"
                        field="firstname"
                        errors={state.errors}
                    />
                </div>
                <div className='custom-input'>
                    <label htmlFor="lastname">
                        Bride's Last Name?
                    </label>
                    <input
                        id="lastname"
                        type="name"
                        name="lastname"
                        required
                    />
                    <ValidationError
                        prefix="LastName"
                        field="lastname"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='contact-info'>
                <div className='custom-input'>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className='custom-input'>
                    <label for="telephone">
                        Telephone Number
                    </label>
                    <input
                        id="telephone"
                        type="telephone"
                        name="telephone"
                        placeholder="(555) 555-5555">
                    </input>
                    <ValidationError
                        prefix="Telephone"
                        field="telephone"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='location'>
                <div className='custom-input'>
                    <label htmlFor="venue">
                        Venue Location
                    </label>
                    <input
                        id="venue"
                        type="text"
                        name="venue"
                        placeholder="Name of Location & Physical Address"
                        required
                    />
                    <ValidationError
                        prefix="Venue"
                        field="venue"
                        errors={state.errors}
                    />
                </div>
                <div className='custom-input'>
                    <label htmlFor="gettingready">
                        Getting Ready Location
                    </label>
                    <input
                        id="gettingready"
                        type="text"
                        name="gettingready"
                        placeholder="Name of Location & Physical Address"
                        required
                    />
                    <ValidationError
                        prefix="gettingready"
                        field="gettingready"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='time'>
                <div className='custom-input'>
                    <label for="weddingdate">
                        Wedding Date
                    </label>
                    <input
                        id="weddingdate"
                        type="date"
                        name="weddingdate"
                        required
                    />
                    <ValidationError
                        prefix="Weddingdate"
                        field="weddingdate"
                        errors={state.errors}
                    />
                </div>
                <div className='custom-input'>
                    <label htmlFor="ceremonytime">
                        Time of the Ceremony
                    </label>
                    <input
                        id="ceremonytime"
                        type="time"
                        name="ceremonytime"
                        required
                    />
                    <ValidationError
                        prefix="ceremonytime"
                        field="ceremonytime"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='time'>
                <div className='custom-input'>
                    <label htmlFor="starttime">
                        Getting Ready Start Time
                    </label>
                    <input
                        id="starttime"
                        type="time"
                        name="starttime"
                        required
                    />
                    <ValidationError
                        prefix="starttime"
                        field="starttime"
                        errors={state.errors}
                    />
                </div>
                <div className='custom-input'>
                    <label htmlFor="readybytime">
                        Desired Ready by Time
                    </label>
                    <input
                        id="readybytime"
                        type="time"
                        name="readybytime"
                        required
                    />
                    <ValidationError
                        prefix="readybytime"
                        field="readybytime"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='services-intro'>
                <h2>What specific services will you require?</h2>
                <p>Please select all that apply</p>
            </div>
            <div className='bridal-services'>
                <h3>BRIDAL SERVICES:</h3>
                <div className='check-container'>
                    <div className='check'>
                        <input
                            id="bridalmakeup"
                            type="checkbox"
                            name="bridalmakeup"
                            value="Bridal-makeup" />
                        <label for="bridalmakeup">
                            Bridal Makeup Service
                        </label>
                    </div>
                    <div className='check'>
                        <input
                            id="bridalhair"
                            type="checkbox"
                            name="bridalhair"
                            value="Bridal-hair" />
                        <label for="bridalhair">
                            Bridal Hair Service
                        </label>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <h3 className='bps'>BRIDAL PARTY SERVICES:</h3>
            <div className='party-services'>
                <div className='drop-down'>
                    <label className='small-label' for="partymakeup">Bridal Party Makeup Application:</label>
                    <select id="partymakeup" name="partymakeup">
                        <option value="" disabled selected hidden>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                    </select>
                </div>
                <div className='drop-down bp-service'>
                    <label className='small-label' for="partyhair">Bridal Party Hair Service:</label>
                    <select id="partyhair" name="partyhair">
                        <option value="" disabled selected hidden>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                    </select>
                </div>
            </div>
            <div className='other'>
                <label htmlFor="message">
                    Any additional services or details you would like to include?
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder='Ex: Mother of the bride hair & makeup, flower girl hair.'
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button className='form-button' type="submit" disabled={state.submitting}>
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
