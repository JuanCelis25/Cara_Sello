const nom= document.getElementById('ingr');


/*nom.addEventListener('click', ()=>{
    const nombre = document.getElementById('nomb').value;
    const apellido = document.getElementById('apel').value;

    swal({
        title: " Bienvenido ",
        text: ` ${nombre} ${apellido} `,
        icon: "success",
      });

      /*
    swal (`Bienvenido ${nombre} ${apellido}`)*/
  /*  
})*/

/*
function mostrar(){

    swal('titulo', 'hola');
}*/



nom.addEventListener('click', ()=>{
let opci = document.getElementById('opci').value;
opci = parseInt(opci);
let apuesta = document.getElementById('apu').value
apuesta = parseInt(apuesta);

do {
    switch (opci) {
        case 1:
            alert(`Dos mas Dos es igual a 5 Tu valor apostado es de ${apuesta}`);
            
            break;
        case 2:
            alert(`Dos mas Dos es igual a 4`)
            break;
    
        default:
            break;
    }
     confirm(`Desea seguir jugando?`)

} while (confirm = 0){
    alert(`Gracias por jugar, espero vuelvas pronto`)
};

});