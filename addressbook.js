//Usecase1:
var prompt = require('prompt-sync')();
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

let contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
console.log(contact);