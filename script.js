const pc1 = document.getElementById("pc_1");
const pc2 = document.getElementById("pc_2");
const pc3 = document.getElementById("pc_3");
const pc4 = document.getElementById("pc_4");

const pcc1 = document.getElementById("pcc-1");
const pcc2 = document.getElementById("pcc-2");
const pcc3 = document.getElementById("pcc-3");
const pcc4 = document.getElementById("pcc-4");

pc1.addEventListener('click', () => {
    pc1.style.color = 'green';
    pc2.style.color = 'blue';
    pc3.style.color = 'blue';
    pc4.style.color = 'blue';

    pcc1.style.display = 'block';
    pcc2.style.display = 'none';
    pcc3.style.display = 'none';
    pcc4.style.display = 'none';
    pcc5.style.display = 'none';
})

pc2.addEventListener('click', () => {
    pc1.style.color = 'blue';
    pc2.style.color = 'green';
    pc3.style.color = 'blue';
    pc4.style.color = 'blue';

    pcc1.style.display = 'none';
    pcc2.style.display = 'block';
    pcc3.style.display = 'none';
    pcc4.style.display = 'none';
    pcc5.style.display = 'none';
})

pc3.addEventListener('click', () => {
    pc1.style.color = 'blue';
    pc2.style.color = 'blue';
    pc3.style.color = 'green';
    pc4.style.color = 'blue';

    pcc1.style.display = 'none';
    pcc2.style.display = 'none';
    pcc3.style.display = 'block';
    pcc4.style.display = 'none';
    pcc5.style.display = 'none';
})

pc4.addEventListener('click', () => {
    pc1.style.color = 'blue';
    pc2.style.color = 'blue';
    pc3.style.color = 'blue';
    pc4.style.color = 'green';

    pcc1.style.display = 'none';
    pcc2.style.display = 'none';
    pcc3.style.display = 'none';
    pcc4.style.display = 'block';
    pcc5.style.display = 'none';
})
