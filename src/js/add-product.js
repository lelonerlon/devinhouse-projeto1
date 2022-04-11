export function addProductTable(product, classTr, classTd) {
    const productTr = buildTr(product, classTr, classTd);
    const table = document.getElementById('table-product');
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
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    // td.textContent = ;
    td.classList.add(classTd);
    div.classList.add("form-check");
    input.classList.add("form-check-input");
    label.classList.add("form-check-label");
    label.textContent = dado;
    input.id = "defaultCheck1";
    input.value = "";
    input.type = "checkbox";
    label.for = "defaultCheck1";
    
    div.appendChild(input);
    div.appendChild(label)
    td.appendChild(div)

    return td;
}

export function cleartInput() {
    document.getElementById('input-product').value = "";
}
