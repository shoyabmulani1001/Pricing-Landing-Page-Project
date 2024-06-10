document.getElementById('monthly-btn').addEventListener('click', function() {
    setActiveButton(this);
    updatePrices('monthly');
});

document.getElementById('yearly-btn').addEventListener('click', function() {
    setActiveButton(this);
    updatePrices('yearly');
});

function setActiveButton(button) {
    document.querySelector('.toggle-button .active').classList.remove('active');
    button.classList.add('active');
}

function updatePrices(plan){
    const price = document.querySelectorAll('.price');
    updatePrices.forEach(price =>{
        const monthlyPrice = price.getAttributr('data-monthly');
        const yearlyPrice = price.getAttributr('data-yearly');
        if (plan === 'monthly') {
            price.textContent = '$${monthlyPrice} / month';
        } else {
            price.textContent = '$${yearlyPrice} / year';  
        }

    });  
}
document.addEventListener('DOMContentLoaded',() =>{
    const monthlyBtn = document.getElementById('monthly-btn');
    const yearlyBtn = document.getElementById('yearly-btn');

    monthlyBtn.addEventListener('click',() =>{
        updatePrices('monthly');
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
    });

    yearlyBtn.addEventListener('click',() =>{
        updatePrices('yearly');
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
    });

    updatePrices('monthly');

})