//Elisa, o robô
let = contador = 0;
let arr = document.querySelectorAll('.L3NKy'); // campo com o elemento "Follow"
arr.forEach((v,i) => {
    
    
    setTimeout(()=>{
        if(!v.classList.contains('_8A5w5')){ // caso já esteja seguindo, campo do elemento"Following"
            v.click();
            contador++;
            console.log('Elisa seguiu ' +contador+ 'pessoas');

        }else{
             console.log('vc ja seguiu');

        }

    }, i*10000) // delay para que o instagram não bloqueie sua conta
    
    
});