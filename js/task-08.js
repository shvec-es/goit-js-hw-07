const refs = {
    inputValue: document.querySelector('input'),
    buttonCreate: document.querySelector('[data-action="render"]'),
    buttonCleare: document.querySelector('[data-action="destroy"]'),
    boxesEl: document.querySelector('#boxes'),
}

refs.buttonCreate.addEventListener("click", getAmount);
refs.buttonCleare.addEventListener("click", destroyBoxes);

function getAmount() {
    let amount = Number(refs.inputValue.value);
    createBoxes(amount) ;
}

const divBoxes = [];

function createBoxes(amount) {

    for (let i = 0; i < amount; i += 1) {
        let newBox = document.createElement('div');
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBox.style.backgroundColor = `#${Math.random()
            .toString(16)
            .substring(2, 8)}`;
        divBoxes.push(newBox);
     }
    
    refs.boxesEl.append(...divBoxes);
    }

function destroyBoxes() {
    refs.boxesEl.remove(divBoxes);
    refs.inputValue.value = '';
}



