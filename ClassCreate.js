var Student = /** @class */ (function () {
    function Student(_RollNo, Name) {
        this.RollNo = _RollNo;
        this.Name = Name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());
