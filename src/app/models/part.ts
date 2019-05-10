export interface iPart {
    name: string
    number: string
}

export class Part implements iPart {
    constructor(public name: string, public number: string) {
        this.name = name
        this.number = number
    }
}