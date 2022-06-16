const consultar = () =>{
  let opcion = prompt('Desea realizar otra acción? 1. Si o 2. No')
  if(opcion == "1"){
    cajeroAutomatico();
  }else{
    alert('Gracias por usar nuestros servicios.')
  }
}

const intereses = (prestamo, cuotas) => {
  for (let i = 1; i < cuotas; i++) {
    
    return calculo = prestamo * 0.02 * cuotas;
    }
}


let usuario = prompt('Ingrese su usuario');

let saldo = 10000;

const cajeroAutomatico = () => { 
    if (usuario) {
        alert('Bienvenido ' + usuario);
        let opciones = prompt('Ingrese su opcion: 1.Retiro 2.Deposito 3.Consulta 4.Prestamos 5.Salir');
        switch (opciones) {
            case '1':
                let retiro = prompt('Ingrese el monto a retirar');
                if (retiro <= saldo) { 
                    saldo = saldo - retiro;
                    alert('Has retirado: $' + retiro);
                    alert('Su saldo actual es: $' + saldo);
                    consultar();
                } else {
                    alert('No tiene saldo suficiente');
                }
                break;
            case '2':
                let deposito = parseInt(prompt('Ingrese el monto a depositar'));
                saldo = saldo + deposito;
                alert('Su saldo actual es: $' + saldo);
                consultar();
                break;
            case '3':
                alert('Su saldo actual es: $' + saldo);
                consultar();
                break;
            case '4':
                let prestamo = parseInt(prompt('Ingrese el monto a solicitar'));
                let cuotas = parseInt(prompt('Ingrese el numero de cuotas'));
                intereses(prestamo, cuotas);
                alert(`Lo que debera pagar es: ${cuotas} cuotas del $${calculo}`);
                consultar();
                break;
            case '5':
              alert('Gracias por usar nuestros servicios.')
              break;
            default:
                alert('Opcion no valida');
                cajeroAutomatico();
                break;
        }
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

cajeroAutomatico();