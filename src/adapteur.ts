export interface Message {
    description: string;
    messageSensor(message: string, value: string): void;
}

export interface formatAdapter {
    messageAdapteur: string;
    descriptionAdapteur: string;
}

export class message implements Message {
    description: string;
    message: Message;
    constructor(description: string) {

        this.description = description;
    }

    messageSensor(message: string, value: string): void {
        if (message === "" && value === 'heat sensor') {
            this.description = "Heat detected in front of you";
        } else if (message === "" && value === 'radar sensor') {
            this.description = "Motion detected in front of you";
        }
        else {
            console.log(message);
        }

    }


}

export class messageAdapteur implements formatAdapter {
    messageAdapteur: string;
    descriptionAdapteur: string;
    message: Message;
    constructor(message: Message) {
        this.message = message;
    }
    messageAdapter() {
        //this.message.messageSensor(this.message.description);
        if (this.message.description != "") {
            console.log("Good format apply ! \nMessage:", this.message.description);
        }

    }

}



