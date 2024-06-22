class Contact {

    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`E-mail: ${this.email}`);
        console.log('------------------------');
    }

}