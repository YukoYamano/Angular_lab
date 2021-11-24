export class Product 
{
    constructor(
      public id?: number,
      public name?: string,
      public category?: string,
      public description?: string,
      public price?: number)
{}
  
  public toString(): string
    {
      return `
      Product
      -------------------------------
      id       : ${this.id}
      Name     : ${this.name}
      Category  : ${this.category}
      Description: ${this.description}
      Price      : ${this.price}
      -------------------------------
      `;
    }
  
}