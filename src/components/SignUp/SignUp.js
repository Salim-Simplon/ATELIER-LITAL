import React, { Component } from "react";
import './SignUp.css';

export class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="Sin">
          <div className="Siin">
            <h1>CONNEXION</h1>
            <div>
              <span>Nom d'utilisateur</span>
              <input
                type="text"
                placeholder="Entrer le nom d'utilisateur"
                required
              />
              <span>Mot de passe</span>
              <input type="password" placeholder="Entrer le mot de passe" />
              <button>Se connecter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
