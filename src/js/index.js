import { addProductTable, cleartInput } from './add-product.js'

var btnAdd = document.getElementById('add-product');

btnAdd.addEventListener("click", function () {

    const classTr = 'product'
    const classTd = 'info-product';
    const inputform = document.getElementById('input-product').value;
    if (inputform) {
        addProductTable(inputform, classTr, classTd);
    } else {
        alert('Insira o produto');
    }
    cleartInput()
});