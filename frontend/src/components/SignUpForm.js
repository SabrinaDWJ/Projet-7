import React, { useState } from 'react';

const SignUpForm = () => {
    // Variables qu'on stockes
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [controlPassword, setControlPassword] = useState();

    // Logique
    const handleRegister = (e) => {
        e.preventDefault();
    }

    // rendu visuel
    return (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
            <label htmlFor="lastName">Nom</label>
            <br />
            <input type="text" name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            {/* <div></div> */}
            <br />
            <label htmlFor="firstName">Prenom</label>
            <br />
            <input type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            {/* <div></div> */}
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            {/* <div></div> */}
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            {/* <div ></div> */}
            <br />
            <label htmlFor="controlPassword">Mot de passe</label>
            <br />
            <input type="controlPassword" name="controlPassword" id="controlPassword" onChange={(e) => setControlPassword(e.target.value)} value={controlPassword} />
            {/* <div ></div> */}
            <input type="submit" value="Valider inscription" />
        </form>
    );
};

export default SignUpForm;