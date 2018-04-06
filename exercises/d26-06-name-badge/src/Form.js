import React from 'react';

function Form() {
    return (
        <div>
        "i am the form"
            <form>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="text" name="birthCity" id="birthCity" placeholder="Place of Birth"/>
                <input type="number" name="phone" id="phone" placeholder="Phone" />
                <input type="text" name="faveFood" id="faveFood" placeholder="Favorite Food" />
                

                <textarea name="about" rows="10" cols="30" id="about">Tell us about yourself</textarea>

                <input type="submit" value="Submit"/>

            </form>

        </div>
    );
}

export default Form;
