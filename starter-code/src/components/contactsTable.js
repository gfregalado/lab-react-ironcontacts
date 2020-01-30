import React, { Component } from "react";
import ContactsArray from "../components/contactsArray";

class DynamicTable extends Component {
  constructor() {
    super();
    this.state = {
      contacts: ContactsArray()
    };
  }

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

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    return (
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
              <this.TableEntry
                key={item.id}
                picture={item.pictureUrl}
                name={item.name}
                popularity={Math.round(item.popularity * 100) / 100}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DynamicTable;
