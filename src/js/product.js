export class Product {
    constructor(id, name, value, payOut) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.payOut = payOut;
        
    }
}

export class Pedidos {

    adicionarProduto(item) {

        this.listaProdutos.push(item)
    }

    adicionarProdutos(...produtosAdd) {
        this.listaProdutos = [...this.listaProdutos, ...produtosAdd]
    }

    calcularTotal() {
        let totalPedido = 0;
        this.listaProdutos.forEach(item => {
            totalPedido = totalPedido + (item.quantidade * item.preco);
        });
        return totalPedido;
    }
    constructor(numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.nomeCliente = nomeCliente;
        this.listaProdutos = [];
    }
}

