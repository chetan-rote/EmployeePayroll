class EmployeePayroll {
    // Getter & Setter Methods
    get id() { return this._id; }
    set id(id) { return this._id = id; }

    get name() { return this._name; }
    set name(name) {
        let nameRgex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}[ ]?[A-Z]{1}[a-zA-Z]{2,}$');
        if (nameRgex.test(name)) {
            this._name = name;
        } else {
            throw alert('Name is Incorrext.');
        }
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) { this._profilePic = profilePic; }

    get gender() { return this._gender; }
    set gender(gender) { return this._gender = gender; }

    get department() { return this._department; }
    set department(department) { return this._department = department; }

    get salary() { return this._salary; }
    set salary(salary) { return this._salary = salary; }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate.toLocaleDateString(undefined, { timeZone: 'Asia/Kolkata' });
        else {
            alert("Start Date is invalid.");
            throw "Invalid Start date " + startDate;
        }
    }

    get note() { return this._note; }
    set note(note) { return this._note = note; }

    toString() {
        return "id = " + this.id +
            "\n name = " + this.name +
            "\n gender = " + this.gender +
            "\n profilePic = " + this.profilePic +
            "\n department = " + this.department +
            "\n salary = " + this.salary +
            "\n startDate = " + this.startDate +
            "\n note = " + this.note;
    }
}