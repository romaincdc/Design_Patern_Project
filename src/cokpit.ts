export class Protection{
    state: boolean = false;
    activate(){
        this.state= true;
    }
    desactivate(){
        this.state = false;
    }
}

interface Command{
    execute():any;
    undo(): any;
}

export class protectionOnCommand implements Command{
    protection: Protection;
    constructor(protection: Protection){
        this.protection = protection;
    }
    execute() {
        this.protection.activate();
    }
    undo() {
        this.protection.desactivate();
    }
}
export class protectionOffCommand implements Command{
    protection :Protection;
    constructor(protection:Protection){
        this.protection = protection;
    }
    execute() {
        this.protection.desactivate();
    }
    undo() {
        this.protection.activate();
    }
}
export class SensorCommand{
    activateCommande : Command;
    desactivateCommande: Command;

    setCommande(activateCommande, desactivateCommande){
        this.activateCommande = activateCommande;
        this.desactivateCommande = desactivateCommande;
    }
    activateProtection(){
        this.activateCommande.execute();
        console.log("Shield Activated");
    }
    desactivateProtection(){
        this.desactivateCommande.execute();
        console.log("Shield Desactivated");
    }
    activateMissile(){
        this.activateCommande.execute();
        console.log("missile launch ");
    }
}