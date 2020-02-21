export class contact{
    public name: string;
    public ContactNumber:number;
    public Email:string;
    public Image:string;
    

    constructor( name:string,ContactNumber:number,Email:string,Image:string){
       this.name=name;
       this.ContactNumber=ContactNumber;
       this.Email=Email;
       this.Image=Image;
    }
//     getAll(){
//         return this.contact.list('/contacts');
//     }
}