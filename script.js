//your code here
const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add');
const cart = document.getElementById('cart');
const total = document.getElementById('total');

let grandTotal = 0;

function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Invalid input!');
        return;
    }

    grandTotal += itemPrice;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>$${itemPrice.toFixed(2)}</td>
    `;
    cart.appendChild(newRow);
    itemNameInput.value = '';
    itemPriceInput.value = '';
    total.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}

addButton.addEventListener('click', addItem);