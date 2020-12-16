class EmployeePayroll{
    // Getter & Setter Methods
    get id(){ return this._id; }
    set id(id){ return this._id = id; }

    get name() { return this._name; }
    set name(name){
        let nameRgex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}[ ]?[A-Z]{1}[a-zA-Z]{2,}$');
        if(nameRgex.test(name)){
            this._name = name;
        } else {
            throw alert('Name is Incorrext.');
        }
    } 

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic){ this._profilePic = profilePic; }

    get gender() { return this._gender; }
    set gender(gender) { return this._gender = gender; }

    get department() { return this._department; }
    set department(department) { return this._department = department; }

    get salary() { return this._salary; }
    set salary(salary) { return this._salary = salary; }

    get startDate() { return this._startDate; }
    set startDate(startDate) { return this._startDate = startDate; }

    get note() { return this._note; }
    set note(note) { return this._note = note; }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" :  this.startDate.toLocaleDateString("en-US", options);

        return "id = " + this.id +
        ", name = " + this.name +
        ", gender = " + this.gender +
        ", profilePic = " + this.profilePic + 
        ", department = " + this.department + 
        ", salary = " + this.salary +
        ", startDate = " + empDate +
        ", note = " + this.note;
    }
}