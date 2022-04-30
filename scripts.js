let rand = Math.random() * 2;
console.log(rand);
for (var i=0;i < 5; i++) {
    if (rand < 1) {
        console.log('Орел');
    } else if (rand >= 1) {
        console.log('Решка')
    }
    rand = Math.random() * 2;
}

const hellau = document.getElementById('glass1')
 setTimeout(()=>{
     hellau.textContent = 'НЕТ!'
 }, 1500)

 hellau.onmouseover =()=>{
     hellau.style.backgroundColor = 'red';
 }
 hellau.onmouseout =()=>{
    hellau.style.backgroundColor = 'green';
}