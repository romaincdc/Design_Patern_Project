import { sensorFactory } from './manufacturingCompany';
import { EventManager, Observer } from "./EventManager";
import { Protection, protectionOffCommand, protectionOnCommand, SensorCommand } from "./cokpit";
import { message, messageAdapteur } from "./adapteur";

const sensorfactory = new sensorFactory();
const eventManager = EventManager.getInstance();

const protection = new Protection;
const activateProtection = new protectionOnCommand(protection);
const desactivateProtection = new protectionOffCommand(protection);
const sensorCommand = new SensorCommand();
const sensorMessage = new message("");
const messageAdapter = new messageAdapteur(sensorMessage);

sensorCommand.setCommande(activateProtection, desactivateProtection);
const factoryA = sensorfactory.factory('company1');
factoryA.manufacturingCompany();

const factoryB = sensorfactory.factory('company2');
factoryB.manufacturingCompany();

const factoryC = sensorfactory.factory('company3');
factoryC.manufacturingCompany();

const sensor: Observer = {
    update(data) {

        if (data.resultat === 'heat sensor') {
            sensorMessage.messageSensor('heat detected', data.resultat);
            messageAdapter.messageAdapter();
            sensorCommand.activateProtection();
        } else if (data.resultat === 'radar sensor') {
            sensorMessage.messageSensor('motion detected', data.resultat);
            messageAdapter.messageAdapter();
            sensorCommand.activateProtection();
        } else if (data.resultat === 'heat sensor critical' || data.resultat === 'radar sensor critical') {
            if (data.resultat === 'radar sensor critical') {
                sensorMessage.messageSensor('very close movement', data.resultat);
                messageAdapter.messageAdapter();
            }
            else {
                sensorMessage.messageSensor('very close heat', data.resultat);
                messageAdapter.messageAdapter();
            }

            sensorCommand.desactivateProtection();
            sensorCommand.activateMissile();
        } else {
            console.log('No heat or motion detected');
            sensorCommand.desactivateProtection();
        }
    }



}
eventManager.on("heat detected", sensor);
eventManager.on("motion detected", sensor);
eventManager.on("", sensor);
eventManager.emit("heat detected", { resultat: 'heat sensor critical' });