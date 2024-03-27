import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className='login'>
            <section>
                <form>
                    <input type="name" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                    <button type="submit">Sign Up</button>
                    <h4>Or</h4>
                    <Link to="/login">Login</Link>
                </form>
            </section>
        </div>
    )
}

export default Register