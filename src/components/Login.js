import React from "react";

const Login = ({
        handleSubmit,
        setEmail,
        setPassword,
        email,
        password
    }) => {
        return (
            <div className="container">

                <form onSubmit={e => handleSubmit(e)}>
                    <label>Se connecter</label>
                   
                    <input
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                   
                    <input
                        value={password}
                        placeholder="Mot de passe"
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <input className="submit-button" value="S'inscrire" type="submit" />

                    <label>Pas encore de compte ? Inscrivez-vous ?</label>
                </form>
            </div>
        );
  };
  
  export default Login;