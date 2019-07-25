export class Comment {
    id : number;
    store : string;
    comment : string;
    name : string;
    time : string;

    constructor(id:number , store : string ,name : string ,comment : string){
        this.id = id ;
        this.store = store;
        this.comment = comment;
        this.name = name;
        //"Tue Jul 16 2019 09:42:14 GMT+0800 (台北標準時間)"
        let time1 : string[] = new Date().toString().slice(4,24).split(' ');
        this.time = time1[2]+"\/0"+(new Date().getMonth()+1)+"\/"+time1[1]+"  "+time1[3];
    }

}
