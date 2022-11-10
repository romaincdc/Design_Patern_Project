
export interface Observer {
    update(data: any);
}

export class EventManager {
    private static instance: EventManager;
    private subscribers: Record<string, Observer[]>;

    private constructor() {
        this.subscribers = {};
    }

    public static getInstance(): EventManager {
        if(!EventManager.instance) {
            EventManager.instance = new EventManager();
        }

        return EventManager.instance;
    }

    on(event: string, observable: Observer) {
        if(!this.subscribers[event]) this.subscribers[event] = [];

        this.subscribers[event].push(observable);
    }

    emit(event: string, data: any) {
        this.subscribers[event]?.forEach((observable) => observable.update(data));
    }
}