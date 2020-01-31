import React, { Component } from "react";
import ContactsArray from "../components/contactsArray";
import contacts from "../contacts.json";

const TableEntry = props => {
  return (
    <tr>
      <td>
        <img className="image-entry" src={props.picture} alt="profile" />
      </td>
      <td className="name-entry">{props.name}</td>
      <td className="populairity-entry"> {props.popularity}</td>
    </tr>
  );
};

class DynamicTable extends Component {
  constructor() {
    super();

    // ============================== Get's elements from the JSON file to an array ==============================

    this.state = {
      contacts: ContactsArray()
    };
  }

  // ============================== Adds a contact to the array State ==============================

  addContact = () => {
    let contactsLoop = [...this.state.contacts];
    let index = Math.floor(Math.random() * Math.floor(contacts.length));
    let newEntry = contacts[index];

    if (contactsLoop.includes(newEntry)) {
      console.log("test");
    } else {
      contactsLoop.unshift(newEntry);
    }
    this.setState({
      contacts: contactsLoop
    });
    return;
  };

  // ============================== Fetched info from Map to each HTML Element ==============================

  TableEntry = props => {
    return (
      <tr>
        <td>
          <img className="image-entry" src={props.picture} alt="profile" />
        </td>
        <td className="name-entry">{props.name}</td>
        <td className="populairity-entry"> {props.popularity}</td>
      </tr>
    );
  };

  // ============================== allows to Render the Table in the App ==============================

  render() {
    return (
      <div>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button>Sort by Name</button>
        <button>Sort by Popularity</button>
        <div className="container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(item => (
                <TableEntry
                  key={item.id}
                  picture={item.pictureUrl}
                  name={item.name}
                  popularity={Math.round(item.popularity * 100) / 100}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DynamicTable;
