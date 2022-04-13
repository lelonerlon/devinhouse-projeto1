export function addProductTable(product, classTr, classTd) {
    saveLocalStorage(product)
    const productTr = buildTr(product, classTr, classTd);
    const tableProduct = document.getElementById('table-products');
    tableProduct.appendChild(productTr);


}

function buildTr(product, classTr, classTd) {
    
    const productTr = document.createElement("tr");
    productTr.classList.add(classTr);
    productTr.appendChild(buildTd(product, classTd));

    return productTr
}

function buildTd(data, classTd) {

    const td = document.createElement("td");
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const tagS = document.createElement('s')
    // td.textContent = ;
    td.classList.add(classTd);
    div.classList.add("form-check");
    input.classList.add("form-check-input");
    label.classList.add("form-check-label");
    label.textContent = dataName;
    tagS.textContent = dataName;
    input.id = `id-${dataName}`;
    input.value = "";
    input.type = "checkbox";
    label.for = "defaultCheck1";

    div.appendChild(input);
    if (dataPay == 0) {
        div.appendChild(label)
    } else{
        div.appendChild(label);
        label.appendChild(tagS);
    }
    td.appendChild(div);

    return td;
}

export function cleartInput() {
    document.getElementById('input-product').value = "";
}


function saveLocalStorage(product) {
    let save = JSON.parse(localStorage.getItem('save')) || []
    save.push(product)
    localStorage.setItem('produtos', JSON.stringify(save))
}
