
export class Company {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return this.name + ", " + this.address;
  }
}