class Student  
{  
    RollNo: Number;  
    Name: String;   
    constructor(_RollNo: number, Name: string)   
    {  
        this.RollNo = _RollNo;  
        this.Name = Name;  
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}  