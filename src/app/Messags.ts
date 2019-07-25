export class Message{
    id : number;
    name : string;
    message : string;
    time : Date;

    constructor(id:number,name:string,message:string){
        this.id = id;
        this.name = name;
        this.message = message;
        this.time = new Date();
    }

}