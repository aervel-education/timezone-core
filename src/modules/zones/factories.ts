import { Timezone } from "./types";

export class TimezoneFactory {

    create(name: string, longitude: number): Timezone {
        const offset = Math.floor((longitude <= 180 ? longitude : 180 - longitude) / 15);
        const time = new Date(Date.now() + offset * 1000 * 60 * 60); // + offset * 1 hour
        return new UtcTimezone(name, time, offset);
    }

}

class UtcTimezone implements Timezone {

    constructor(
        readonly name:string,
        readonly time: Date,
        readonly offset: number
    ){}

}
