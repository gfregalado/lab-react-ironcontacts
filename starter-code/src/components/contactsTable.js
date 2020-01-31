import React, { Component } from "react";
import ContactsArray from "../components/contactsArray";
import contacts from "../contacts.json";

// ============================== Fetched info from Map to each HTML Element ==============================

const TableEntry = props => {
  return (
    <tr>
      <td>
        <img className="image-entry" src={props.picture} alt="profile" />
      </td>
      <td className="name-entry">{props.name}</td>
      <td className="populairity-entry"> {props.popularity}</td>
      <td className="delete-button">
        <button onClick={props.clickToDelete}>delete</button>
      </td>
    </tr>
  );
};

class DynamicTable extends Component {
  constructor() {
    super();

    // ================ Get's elements from the JSON file to an array (Imported from contactsArray)========================

    this.state = {
      contacts: ContactsArray()
    };
  }

  // ============================== Adds a contact to the array State ==============================

  addContact = () => {
    if (contacts.length > 1) {
      const contactIds = this.state.contacts.map(r => r.id);
      let uniqueContacts = contacts.filter(r => !contactIds.includes(r.id));
      let index = Math.floor(Math.random() * Math.floor(uniqueContacts.length));
      let newEntry = uniqueContacts[index];
      this.setState({
        contacts: [newEntry, ...this.state.contacts]
      });
      return;
    } else {
      return;
    }
  };

  // ============================== Sort by Name ==============================

  sortByName = () => {
    let contactsLoop = [...this.state.contacts];

    let sortedContactsByName = contactsLoop.sort(function(a, b) {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    this.setState({
      contacts: sortedContactsByName
    });
    return;
  };

  // ============================== Sort by Popularity ==============================

  sortByPopularity = () => {
    let contactsLoop = [...this.state.contacts];

    let sortedContactsByPopularity = contactsLoop.sort(function(a, b) {
      let textA = a.popularity;
      let textB = b.popularity;
      return textB < textA ? -1 : textA > textB ? 1 : 0;
    });

    console.log(sortedContactsByPopularity);

    this.setState({
      contacts: sortedContactsByPopularity
    });
    return;
  };

  // ============================== Delete Button Handler ==============================

  deleteContactHandler(contactID) {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(contactID, 1);
    this.setState({
      contacts: contactsCopy
    });
    return;
  }

  // ============================== allows to Render the Table in the App ==============================

  render() {
    return (
      <div>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <div className="container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(item => (
                <TableEntry
                  key={item.id}
                  picture={item.pictureUrl}
                  name={item.name}
                  popularity={Math.round(item.popularity * 100) / 100}
                  //   delete={this.state.contacts.indexOf(item)}
                  clickToDelete={() => this.deleteContactHandler(this.state.contacts.indexOf(item))}
                  //   delete={this.deleteContactHandler(this.state.contacts.indexOf(item))}
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
