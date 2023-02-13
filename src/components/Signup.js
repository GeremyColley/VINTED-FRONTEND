import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = ({
        handleSubmit,
        setName,
        setEmail,
        setPassword,
        setNewsletter,
        name,
        email,
        password,
        newsletter
    }) => {
        const navigate = useNavigate();
        return (
            <div className="container">

                <form onSubmit={e => handleSubmit(e)}>
                    <label>Création compte</label>
                   
                    <input
                        value={name}
                        placeholder="Nom d'utilisateur"
                        onChange={e => setName(e.target.value)}
                    />
                   
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
                    
                    <input 
                        type="checkbox" 
                        value={newsletter}
                        id="subscribeNews" 
                        name="subscribe" 
                        onChange={e => setNewsletter(e.target.value)}
                    />
                    <button onClick={() => navigate("/")}>ouhaitez-vous vous abonner à la newsletter ?</button>
                    
                    <input className="submit-button" value="S'inscrire" type="submit" />
                </form>
            </div>
        );
  };
  
  export default Signup;