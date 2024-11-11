class Automobile extends Veicolo {
  numeroPorte;
  carburante;

  constructor(marca, anno, colore, numeroPorte, carburante) {
    super(marca, anno, colore);
    this.numeroPorte = numeroPorte;
    this.carburante = carburante;
  }
}
