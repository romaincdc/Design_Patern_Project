let companyName : string;
export interface sensor {
    manufacturingCompany(): void;
}
export interface factory {
    factory(name: string): sensor;
}


export class heatSensor implements sensor {
    manufacturingCompany(): void {
        console.log(companyName," made heat Sensor");
    }
}

export class radarSensor implements sensor {
    manufacturingCompany(): void {
        console.log(companyName," made radar Sensor");
    }
}
export class allSensor implements sensor {
    manufacturingCompany(): void {
        
        console.log(companyName," made radar sensor and heat sensor");
    }
}
export class missile implements sensor {
    manufacturingCompany(): void {
        
        console.log(companyName," made missile");
    }
}
export class shield implements sensor {
    manufacturingCompany(): void {
        
        console.log(companyName," made shield");
    }
}


export class sensorFactory implements factory {
    factory(name: string): sensor {
        companyName = name;
        switch (name) {
            case 'company1':
                return new allSensor;
            case 'company2':
                return new missile;
            case 'company3':
                return new shield;
            default:
                return null;
        }
    }
}
