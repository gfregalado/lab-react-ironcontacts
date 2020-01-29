import React, { Component } from "react";
import contacts from "../contacts.json";
// import Entry from './tableentry'

const TableEntry = ({ picture, name, populairity }) => {
  return (
    <tr>
      <th>
        <img className="image-entry" src={picture} alt="profile" />
      </th>
      <th className="name-entry">{name}</th>
      <th className="populair-entry">{populairity}</th>
    </tr>
  );
};

const Table = props => {
  return (
    <div className="container">
      <table className="contacts-table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {contacts.map(item => (
          <TableEntry
            key={item.id}
            picture={item.pictureUrl}
            name={item.name}
            populairy={item.popularity}
          />
        ))}
      </table>
    </div>
  );
};

export default Table;
