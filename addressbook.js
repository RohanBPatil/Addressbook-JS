//UC1:
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
        if (emailRegex.test(emailRegex)) {
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
let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");
let address = prompt("Enter the address: ");
let city = prompt("Enter the city: ");
let state = prompt("Enter the state: ");
let zip = prompt("Enter the zip: ");
let phone = prompt("Enter the phone: ");
let email = prompt("Enter the email: ");

try {
    let contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
    console.log(contact);
} catch (e) {
    console.log(e);
}