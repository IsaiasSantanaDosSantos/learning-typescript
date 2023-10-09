export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto("camiseta", 49.9);
const produto2 = new Produto("Caneca", 1.9);
const produto3 = new Produto("Caneta", 0.9);

const carrinhodeCompras = new CarrinhoDeCompras();
carrinhodeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhodeCompras.valorTotal());
console.log(carrinhodeCompras.quantidadeProdutos());
