class Product {

    constructor() {
        this.id = 1;
        this.arr = [];

    }

    save() {
        let product = this.get()

        if (this.valid(product)) {
            this.add(product)
        }

        this.listTable()
    }

    add(product) {
        this.arr.push(product)
        this.id++;
    }

    get() {

        let product = {}
        product.id = this.id;
        product.nameProduct = document.getElementById('input-product').value

        return product
    }
    remove() {

    }

    listTable() {
        let tbody = document.getElementById('table-products');
        tbody.innerText = '';
        for (let i = 0; i < this.arr.length; i++) {
            let tr = tbody.insertRow();

            let tdId = tr.insertCell();
            let tdName = tr.insertCell();

            tdId.innerText = this.arr[i].id;
            tdName.innerText = this.arr[i].nameProduct;
        }

    }

  

let product = new Product()