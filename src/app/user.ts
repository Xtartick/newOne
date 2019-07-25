export class user {
    user_id ; number;
    phone: string;
    password: string;
    username: string;
    mail: string;

    constructor(user_id: number, phone: string, password: string, username: string, mail: string) {
        this.user_id = user_id;
        this.phone = phone;
        this.password = password;
        this.username = username;
        this.mail = mail;
    }

}