import React, { Component } from "react";
import ContactsArray from "../components/contactsArray";

const TableEntry = ({ picture, name, popularity }) => {
  return (
    <tr>
      <td>
        <img className="image-entry" src={picture} alt="profile" />
      </td>
      <td className="name-entry">{name}</td>
      <td className="populairity-entry"> {popularity}</td>
    </tr>
  );
};

const Table = () => {
  return (
    <div className="container">
      <table className="contacts-table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tbody>
          {ContactsArray().map(item => (
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
  );
};

export default Table;
