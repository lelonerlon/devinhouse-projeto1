let id = 0;
let value = 20;
let arr = [];
let payOut = 'não';
const url_img_delete = 'https://img.icons8.com/ultraviolet/40/000000/delete-sign.png';
const url_img_payout = 'https://img.icons8.com/fluency/48/000000/money-yours.png';

function saveProduct() {
    let product = getProduct();

    if (product.name) {
        addProduct(product);
        document.getElementById('input-product').value = '';
    } else {
        alert('É necessário informar o produto');
    }

    listTable()

}

function addProduct(product) {

    arr.push(product)
    id++;
    console.log(arr)

}

function getProduct() {
    let product = {
        id: id,
        name: document.getElementById('input-product').value.trim(),
        value: '',
        payOut: '',
    };

    return product
}

function deleteProduct(id) {
    console.log('Deletou: ' + id);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr.splice(i, 1);
            listTable()
        }
    }
}




function listTable() {
    let tbody = document.getElementById('table-products');
    tbody.innerText = '';

    for (let i = 0; i < arr.length; i++) {
        let tr = tbody.insertRow();
        let tdName = tr.insertCell();
        let tdExcluir = tr.insertCell();

        //Cria a Linha e a coluna
        let span = createElementSpan(arr[i]);

        //Cria o elemento para pagar
        let payOutItem = createPayOutItem();

        //Cria o elemento para excluir
        let removeItem = createRemoveItem(arr[i].id);

        //Appensa as colunas e linhas na tabela raiz
        tdExcluir.appendChild(payOutItem);
        tdExcluir.appendChild(removeItem);
        tdName.appendChild(span);
    }
}

function createElementSpan(ob) {

    let span = document.createElement('span');
    span.id = `id-${ob.id}`;
    span.innerHTML = `               
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${ob.name}
                    </label>
                </div>
            `;
    span.addEventListener('click', creatorModal(span.id));

    return span
}

function createPayOutItem() {
    let payOutItem = document.createElement('img');
    payOutItem.src = url_img_payout;
    payOutItem.setAttribute("data-bs-toggle", "modal");
    payOutItem.setAttribute("data-bs-target", "#exampleModal");

    return payOutItem
}

function createRemoveItem(elID) {

    let removeItem = document.createElement('img');
    removeItem.src = url_img_delete;
    removeItem.setAttribute("onclick", "deleteProduct(" + elID + ")");

    return removeItem
}

function creatorModal(id) {
    let span = document.getElementById('span-modal');
    let spanModal = document.createElement('span');
    spanModal.id = id;
    span.appendChild(spanModal);
    spanModal.innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>`;
}

function openModal() {
    const exampleModal = document.getElementById('exampleModal')

    exampleModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget

        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = exampleModal.querySelector('.modal-title')
        var modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = 'New message to ' + recipient
        modalBodyInput.value = recipient

    });
}





