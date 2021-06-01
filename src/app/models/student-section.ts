export class StudentSection {
    constructor(_id = '', name ='', patronus = '', age = '', image = ''){ 
        this._id= _id;
        this.name= name;
        this.patronus= patronus;
        this.age= age;
        this.image= image;
    }
    _id: string;
    name: string;
    patronus: string;
    age: string;
    image: string;
}
