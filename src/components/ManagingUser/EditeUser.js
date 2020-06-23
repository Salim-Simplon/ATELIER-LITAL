import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { editeUserFromApi } from "../../actions/userActions";

const ModalEdite = () => (
  <Modal trigger={<Button className="ui button">Editer</Button>} closeIcon>
    <Header icon="edit" content="Modifier le profil" />
    <Modal.Content>
      <form className="modaledit">
        <div>
        <span>Prénom : </span>
        </div><div>
        <input
          type="text"
          placeholder="Entrer le prénom d'utilisateur"
          required
        /></div><div>
        <span>Nom</span>
        </div><div>
        <input
          type="text"
          placeholder="Entrer le prénom d'utilisateur"
          required
        /></div><div>
        <span>Mot de passe</span></div><div>
        <input
          type="password"
          placeholder="Entrer le mot de passe"
          minLength="8"
          required
        /></div><div>
        <span>Pseudo</span></div><div>
        <input
          type="text"
          placeholder="Entrer le pseudo d'utilisateur"
          required
        /></div><div>
        <span>Mail</span></div><div>
        <input
          type="text"
          placeholder="Entrer le mail "
          required
        /></div><div>
        <span>Numéro de téléphone</span></div><div>
        <input
          type="phone"
          placeholder="Entrer le numero de téléphone"
          minLength="8"
          required
        /></div><div>
        <span>Type d'utilisateur</span></div><div>
        <input
          type="text"
          placeholder="Role d'utilisateur"
          required
        /></div>
      </form>
    </Modal.Content>
    <Modal.Actions>
      <Button color="red">
        <Icon name="remove" /> Non
      </Button>
      <Button color="green">
        <Icon name="checkmark" /> Oui
      </Button>
    </Modal.Actions>
  </Modal>
);

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  edite: (el) => dispatch(editeUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdite);
