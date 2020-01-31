import contacts from "../contacts.json";

let contactsLoop = [];

const ContactsArray = () => {
  for (let i = 0; i <= 4; i++) {
    contactsLoop.push(contacts[i]);
  }
  return contactsLoop;
};

export default ContactsArray;
