export function header(){
    
    const header = document.getElementById('div-header');
    const container = document.createElement('section');
    const tagLabel = document.createElement('label');
    const tagInput = document.createElement('input');
    const btnAdd = document.createElement('button');

    container.classList.add('container');
    header.appendChild(container);
    
    tagLabel.textContent = 'Insira o Produto';
    tagLabel.classList.add('label-title');
    tagLabel.id = ('label-title');
    container.appendChild(tagLabel);

    container.appendChild(tagInput);

    btnAdd.textContent = 'Adicionar Produto';
    btnAdd.classList.add('btn-add');
    btnAdd.id = 'btn-add';
    container.appendChild(btnAdd)



}