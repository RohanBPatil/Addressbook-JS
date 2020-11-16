// UC 1
var prompt = require('prompt-sync')();
let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
let addressRegex = RegExp('^[A-Za-z0-9]{4,}$');
let zipRegex = RegExp('[0-9]{6}');
let phoneRegex = RegExp('^([0-9]{1,4}[ ][0-9]{10})$');
let emailRegex = RegExp('^[a-zA-Z0-9_]+[-+.]?[A-Za-z0-9_]+@[A-Za-z0-9]+[.][a-z]{2,}[.]?([a-z]{2,})?$');

class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName }
    set firstName(firstName) {
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "Invalid First Name";
        }
    }
    get lastName() { return this._lastName }
    set lastName(name) {
        if (nameRegex.test(name)) {
            this._lastName = name;
        } else {
            throw "Invalid Last Name";
        }
    }
    get address() { return this._address }
    set address(add) {
        if (addressRegex.test(add)) {
            this._address = add;
        } else {
            throw "Invalid address";
        }
    }
    get city() { return this._city }
    set city(cityName) {
        if (addressRegex.test(cityName)) {
            this._city = cityName;
        } else {
            throw "Invalid city";
        }
    }
    get state() { return this._state };
    set state(stateName) {
        if (addressRegex.test(stateName)) {
            this._state = stateName;
        } else {
            throw "Invalid state";
        }
    }
    get zip() { return this._zip }
    set zip(zipCode) {
        if (zipRegex.test(zipCode)) {
            this._zip = zipCode;
        } else {
            throw "Invalid zip";
        }
    }
    get phone() { return this._phone }
    set phone(number) {
        if (phoneRegex.test(number)) {
            this._phone = number;
        } else {
            throw "Invalid phone number";
        }
    }
    get email() { return this._email }
    set email(email) {
        if (emailRegex.test(email)) {
            this._email = email;
        } else {
            throw "Invalid Email";
        }
    }
    toString() {
        return "FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city + " State: " + this.state
            + " Zip: " + this.zip + " Phone: " + this.phone + " Email: " + this.email;
    }
}
function createContact() {
    let firstName = prompt("Enter first name: ");
    let lastName = prompt("Enter last name: ");
    let address = prompt("Enter the address: ");
    let city = prompt("Enter the city: ");
    let state = prompt("Enter the state: ");
    let zip = prompt("Enter the zip: ");
    let phone = prompt("Enter the phone: ");
    let email = prompt("Enter the email: ");
    let contact;
    try {
        contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        console.log(contact);
    } catch (e) {
        console.log(e);
    }
    return contact;
}

// UC 3
let addressBookArr = new Array();
function addContact() {
    let newContact = createContact();
    if (checkDuplicate(newContact)) {
        console.log("Contact already exists and hence this will not be added");
        return;
    } else {
        addressBookArr.push(newContact);
    }
}
while (true) {
    addContact();
    let ask = prompt("Do you want to add one more contact?(y/n) : ");
    if (ask != "y")
        break;
}
console.log(addressBookArr);

// UC 4
function editContact(personName) {
    addressBookArr.forEach(contact => {
        if ((contact._firstName + " " + contact._lastName) == (personName)) {
            let choice = prompt("Enter choice\n1.Add new phone \n2.Add new email \n3.Exit ");
            switch (parseInt(choice)) {
                case 1:
                    var phoneNumber = prompt("Enter new phone number : ");
                    contact._phone = phoneNumber;
                    break;
                case 2:
                    var emailId = prompt("Enter new email : ");
                    contact._email = emailId;
                    break;
                case 3:
                    return;
                default:
                    console.log("Enter correct choice");
            }

        }
    });
}
let editName = prompt("Enter person's full name to edit contact : ");
editContact(editName);
console.log(addressBookArr);

// UC 5
function deleteContact(personName) {
    let i = 0;
    addressBookArr.forEach(contact => {
        if ((contact._firstName + " " + contact._lastName) == (personName)) {
            addressBookArr.splice(i, 1);
            addressBookArr.indexOf()
        }
        i++;
    });
}

let deleteName = prompt("Enter the person's full name to delete : ");
deleteContact(deleteName);
console.log(addressBookArr);

// UC 6
function countContacts(length, Contact) {
    length++;
    return length;
}
console.log("Number of contacts in array : " + addressBookArr.reduce(countContacts, 0));


// UC 7
function checkDuplicate(newContact) {
    addressBookArr.forEach(contact => {
        if ((contact.firstName + contact.lastName) == (newContact.firstName + newContact.lastName)) {
            return true;
        }
    });
}

// UC 8 
function searchPersonByCity(name, city) {
    return addressBookArr.filter(contact => contact._city == city).filter(contact => (contact._firstName + " " + contact._lastName) == name);
}
let nameToSearch = prompt("Enter name to search : ");
let cityToSearch = prompt("Enter city name from which name to search: ");
let personByCity = searchPersonByCity(nameToSearch, cityToSearch);
console.log("Person in " + cityToSearch + " is: " + personByCity);

function searchPersonByState(name, state) {
    return addressBookArr.filter(contact => contact._state == state).filter(contact => (contact._firstName + " " + contact._lastName) == name);
}
nameToSearch = prompt("Enter name to search : ");
let stateToSearch = prompt("Enter state name from which name to search: ");
let personByState = searchPersonByState(nameToSearch, stateToSearch);
console.log("Person in " + stateToSearch + " is: " + personByState);

// UC 9
function viewPersonsByCity(city) {
    let list = addressBookArr.filter(contact => contact.city == city);
    return list;
}
cityToSearch = prompt("Enter city name to view contacts: ");
let personsByCity = viewPersonsByCity(cityToSearch);
console.log("All persons by " + cityToSearch + " are : " + personsByCity);

function viewPersonsByState(state) {
    return addressBookArr.filter(contact => contact._state == state);
}
stateToSearch = prompt("Enter state name to view contacts: ");
let personsByState = viewPersonsByStates(stateToSearch);
console.log("All persons by " + state + " are : " + personsByState);

// UC 10
function countByCity(city) {
    return addressBookArr.filter(contact => contact._city = city).reduce(countContacts, 0);
}
let cityToCount = prompt("Enter city name to count contacts : ");
console.log("Number of persons in " + cityToCount + " are : " + countByCity(cityToCount));
function countByState(state) {
    return addressBookArr.filter(contact => contact._state = state).reduce(countContacts, 0);
}
let stateToCount = prompt("Enter state name to count contacts : ");
console.log("Number of persons in " + stateToCount + " are : " + countByState(stateToCount));

// UC 11
function compareByName(contact1, contact2) {
    let c1 = (contact1._firstName + " " + contact1._lastName).toUpperCase();
    let c2 = (contact2._firstName + " " + contact2._lastName).toUpperCase();
    if (c1 > c2) return 1;
    if (c1 < c2) return -1;
}
function sortByName() {
    let sortedList = addressBookArr.sort(compareByName);
    console.log(sortedList);
}
sortByName();


// UC 12
function compareByState(contact1, contact2) {
    let c1 = contact1._state;
    let c2 = contact2._state;
    return c1 - c2;
}
function sortByState() {
    let sortedList = addressBookArr.sort(compareByState);
    console.log(sortedList);
}
sortByState();
function compareByCity(contact1, contact2) {
    let c1 = contact1._city;
    let c2 = contact2._city;
    return c1 - c2;
}
function sortByState() {
    let sortedList = addressBookArr.sort(compareByState);
    console.log(sortedList);
}
sortByCity();
function compareByZip(contact1, contact2) {
    let c1 = contact1.zip;
    let c2 = contact2.zip;
    return c1 - c2;
}
function sortByZip() {
    let sortedList = addressBookArr.sort(compareByZip);
    console.log(sortedList);
}
sortByZip(); 