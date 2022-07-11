import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Log = () => {
    // Varoables qu'on stockes
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    // Logique
    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }
    // rendu visuel
    return (
        <div>
            <ul>
                <li onClick={handleModals} id="register">S'inscrire</li>
                <li onClick={handleModals} id="login">Se connecter</li>
            </ul>
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    );
};

export default Log;