class Hotel {
    quantReservas: number;
    
    constructor(quantReservas: number) {
        this.quantReservas = quantReservas;
    }
    
    adicionarReserva(): void {
        this.quantReservas++;
    }
}