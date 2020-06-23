import React, { Component } from "react";
import { Icon, Label, Menu, Table, Dropdown } from "semantic-ui-react";
import Button from "./EditeUser";
import { connect } from "react-redux";
import {
  getUsersFromApi,
  deleteUsersFromApi,
  editeUserFromApi,
} from "../../actions/userActions";

class VueUser extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    return (
      <div className="tab">
        <Dropdown
          text="Ajouter un utilisateur"
          icon="add user"
          floating
          labeled
          button
          className="icon"
        ></Dropdown>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Pseudo</Table.HeaderCell>
              <Table.HeaderCell>Mot de passe</Table.HeaderCell>
              <Table.HeaderCell className="edit">Editer</Table.HeaderCell>
              <Table.HeaderCell>Supprimer</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Admin</Label>
                salim
              </Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>
              <Button class="ui button"/>
              </Table.Cell>
              <Table.Cell>
                <button class="ui button">Supprimer</button>
              </Table.Cell>
            </Table.Row>
            {this.props.users.map((el) => (
              <Table.Row>
                <Table.Cell>{el.userName}</Table.Cell>
                <Table.Cell>{el.passWord}</Table.Cell>
                <Table.Cell>
                  <Button el={el} />
                </Table.Cell>
                <Table.Cell>
                  <button
                    class="ui button"
                    title="Supprimer"
                    onClick={() => {
                      this.props.delete(el.id);
                    }}
                  >
                    Supprimer
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUsersFromApi()),
  delete: (id) => dispatch(deleteUsersFromApi(id)),
  edite: (el) => dispatch(editeUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VueUser);
