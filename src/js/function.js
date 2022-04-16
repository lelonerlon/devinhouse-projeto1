let id = 0;
let value = 0;
let arr = JSON.parse(localStorage.getItem('data')) || [];
let objAtual = '';

const url_img_delete = 'https://img.icons8.com/ultraviolet/40/000000/delete-sign.png';
const url_img_payout = 'https://img.icons8.com/fluency/48/000000/money-yours.png';

function saveProduct() {
    //Obtem o produto a partir do salvamento do produto
    let product = getProduct();
    //Verifica se o input tem dados
    if (product.name) {
        //Chama a função para incluir no array
        addProduct(product);
        //Limpa o INPUT do HTML
        document.getElementById('input-product').value = '';
    } else {
        alert('É necessário informar o produto');
    }
    //Monta o HTML após salvar no array
    listTable()

}

//Cria o produto
function getProduct() {
    let product = {
        id: id,
        name: (document.getElementById('input-product').value.trim()).toUpperCase(),
        value: '',
        payOut: false,
    };

    return product
}

//Adiciona o produto no storage
function addProduct(product) {
    arr.push(product)
    localStorage.setItem('data', JSON.stringify(arr))
    id++;
}

//Deleta o produto do array
function deleteProduct(id) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr.splice(i, 1);
            localStorage.setItem('data', JSON.stringify(arr))
            listTable()
        }
    }
}

//Monta a lista de produtos
function listTable() {
    let tbody = document.getElementById('table-products');
    let totalItem = document.getElementById('total');
    let total = 0;
    tbody.innerText = '';

    for (let i = 0; i < arr.length; i++) {
        let tr = tbody.insertRow();
        let tdName = tr.insertCell();
        let tdExcluir = tr.insertCell();

        //Cria a Linha e a coluna
        let span = createElementSpan(arr[i]);

        //Cria o elemento para excluir
        let removeItem = createRemoveItem(arr[i].id);

        //Appensa as colunas e linhas na tabela raiz
        tdExcluir.appendChild(removeItem);
        tdName.appendChild(span);

        total += Number(arr[i].value);
        totalItem.innerHTML = (`Total da compra: ${total}`).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
}

//Cria os elementos dinamicamente, que monta a lista de Produtos
function createElementSpan(obj) {
    const span = document.createElement('span');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const s = document.createElement('s');

    span.id = `id-${obj.id}`;

    //cria o elemento HTML e define o atributo e valor
    div.classList.add = "form-check";

    //cria o elemento HTML label e define os atributos e valores
    label.classList.add("form-check-label");
    label.setAttribute("for", "flexCheckDefault");

    //cria o o elemento HTML input e define os atributos e valores
    input.classList.add("form-check-input");
    input.value = "#exampleModal";
    input.type = "checkbox";
    input.id = "flexCheckDefault";
    input.setAttribute("data-bs-toggle", "modal");
    input.setAttribute("data-bs-target", "#exampleModal");

    div.appendChild(input);

    //verifica se o Produto está pago para colocar o atachado no item quando é pago
    if (obj.payOut == false) {
        label.textContent = obj.name;
        div.appendChild(label);
    } else {
        input.checked = true;
        input.id = "flexCheckChecked";
        label.setAttribute("for", "flexCheckChecked");
        s.textContent = obj.name;
        label.appendChild(s)
        div.appendChild(label)
    }

    span.appendChild(div);
    span.addEventListener('click', () => createModal(obj));

    return span
}
//Cria dinamicamente a Imagem para remover o produto, 
function createRemoveItem(elID) {

    let removeItem = document.createElement('img');
    removeItem.src = url_img_delete;
    removeItem.setAttribute("onclick", "deleteProduct(" + elID + ")");

    return removeItem
}

//Cria o Modal de acordo com o item selecionado
function createModal(obj) {
    let title = document.getElementById('exampleModalLabel');
    objAtual = obj;
    title.innerText = `Valor da (o) ${obj.name}`;
}

// function openModal() {
//     const exampleModal = document.getElementById('exampleModal')

//     exampleModal.addEventListener('show.bs.modal', function (event) {
//         // Button that triggered the modal
//         var button = event.relatedTarget

   
//         // var recipient = button.getAttribute('data-bs-whatever')

//         // var modalTitle = exampleModal.querySelector('.modal-title')
//         // var modalBodyInput = exampleModal.querySelector('.modal-body input')


//     });
// }

//Salva o valor do Produto selecionado
function saveValueItem() {
    let obj = objAtual;
    let valueItem = Number(document.getElementById('valueItem').value.trim())
    if (valueItem) {
        obj.value = valueItem;
        obj.payOut = true;


        arr.push()
        localStorage.setItem('data', JSON.stringify(arr))

        listTable()

    } else {
        alert('Para salvar é necessário informar o valor');
    }
}