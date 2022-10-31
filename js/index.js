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
let apuesta = document.getElementById('apu').value;
apuesta = parseInt(apuesta);

let i = 0
let confirmar = true;


if ( apuesta >= 1000 ) {

    do {
        
        switch (opci) {
            
            case 1:
                swal(`Tu valor apostado es de ${apuesta}`);
                
                break;
            case 2:
                swal(`Tu valor apostado es de ${apuesta}`)
                break;
        
            default:
                break;
        }
         confirmar = window.confirm(`Desea seguir jugando?`)
    
    } while (confirmar == true){
        swal(`Gracias por jugar, espero vuelvas pronto`)
    };


} else {
    swal (`Por favor un valor mayor a 1000 `)
}

});