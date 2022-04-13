let obj = [{
    id: '',
    name: '',
    value: '',
    paidOut: '',
}];

function getProduct() {
    const tableProducts = document.getElementById('table-products');
    table.innerHTML = "";
    obj.forEach((el) => {
        let id = el.id;
        let name = el.name
        let tableProduct =
            `<li id="${id}>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                        </label>
                </div>
            </li>`;
        tableProducts.innerHTML += tableProduct;
    })
    addProducts();
    addProducts();
    travarOutros(false);

}

function addProdutcs(){
    obj.push({id:'', name:'', value:'',paidOut:''});
    getProduct();
}