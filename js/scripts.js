// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();   // <--- This line is new!
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) { 
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//update an addresses information.
Contact.prototype.update = function(addressBook, firstName, lastName, phoneNumber) {
  addressBook.findContact(this.id).firstName = firstName;
  addressBook.findContact(this.id).lastName = lastName;
  addressBook.findContact(this.id).phoneNumber = phoneNumber;
}

var addressBook = new AddressBook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
var contact3 = new Contact("Geoff", "Goetz", "503-555-6969");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

console.log(addressBook.findContact(1))
// console.log(addressBook.findContact(2))
// console.log(addressBook.findContact(3))
// contact.update

// console.log(addressBook.findContact(2))
// console.log(addressBook.findContact(3))
addressBook.findContact(1).update(addressBook, "Jamie");
console.log(addressBook.findContact(1))
