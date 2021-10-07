//global variable
let contacts = [];

//add a contact
function addContact() {

    //retrieve the values from the user interface
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;

    //create an object using the values from the form on the web page
    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    //adds an item to the array
    contacts.push(contact);

    //displays the new contact
    displayContacts(contacts);

    //Clear the form
    document.getElementById("contactForm").reset()
}


function displayContacts(contacts) {

    document.getElementById("results").innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {

        contacts[i].firstName
        contacts[i].lastName
        contacts[i].email
        let templateRow = `<tr><td>${contacts[i].firstName}</td><td>${contacts[i].lastName}</td><td>${contacts[i].email}</td></tr>`
        document.getElementById("results").innerHTML += templateRow;
    }

}