import contacts from "../contacts.json";

const ContactsArray = () => {
  let contactsLoop = [];
  for (let i = 0; i <= 4; i++) {
    contactsLoop.push(contacts[i]);
  }

  return contactsLoop;
};

export default ContactsArray;
