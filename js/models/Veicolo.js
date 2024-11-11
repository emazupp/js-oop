class Veicolo {
  marca;
  anno;
  colore;

  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }

  informazioni() {
    console.log(
      `Quest'auto è una ${this.marca} dell'anno ${this.anno}, colore ${this.colore}.`
    );
  }

  calcolaEta() {
    const currentDate = new Date();
    console.log(currentDate.getFullYear());
  }
}
