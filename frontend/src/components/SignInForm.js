import React, { useState } from 'react';

const SignInForm = () => {
    // Variables qu'on stockes
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // Logique
    const handleLogin = (e) => {
        e.preventDefault();
    }

    // rendu visuel
    return (
        <div>
            <form action="" onSubmit={handleLogin} id="sign-in-form">
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                {/* <div></div> */}
                <br />
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                {/* <div ></div> */}
                <input type="submit" value="Se connecter" />
            </form>
        </div>
    );
};

export default SignInForm;