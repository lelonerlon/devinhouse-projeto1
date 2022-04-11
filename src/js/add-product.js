var btnAdd = document.getElementById('add-product');

btnAdd.addEventListener("click", function () {
    const classTr = 'product'
    const classTd = 'info-product';
    const inputform = document.getElementById('input-product').value;

    addProductTable(inputform, classTr, classTd)
});

function addProductTable(product, classTr, classTd){
    const productTr = buildTr(product, classTr, classTd);
    const table = document.getElementById('table-product');
    console.log(table);
    table.appendChild(productTr);

}

function buildTr(product, classTr, classTd) {

    const productTr = document.createElement("tr");
    productTr.classList.add(classTr);
    productTr.appendChild(buildTd(product, classTd));

    return productTr
}

function buildTd(dado, classTd) {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classTd);
    return td;
}

