document.addEventListener('DOMContentLoaded', function () {

    const chargeInput = document.getElementById('maintenanceCharge');
    const totalAmount = document.getElementById('totalAmount');

    const baseAmount = 0; // Your bill amount before charges

    function updateTotal() {
        const charge = parseFloat(chargeInput.value) || 0;
        const total = baseAmount + charge;

        totalAmount.textContent = `PKR ${total.toLocaleString()}`;
    }

    chargeInput.addEventListener('input', updateTotal);

    updateTotal();
});
