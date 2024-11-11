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
    const year = currentDate.getFullYear() - this.anno;
    if (year > 1) {
      console.log(`Questa ${this.marca} ha ${year} anni`);
    } else if (year == 1) {
      console.log(`Questa ${this.marca} ha 1 anno`);
    } else {
      console.log(`Questa ${this.marca} ha meno di 1 anno`);
    }
  }
}
