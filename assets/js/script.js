//DATOS       nombre/identificador/clave/saldo
var datos = [["cliente1","iden1","clave1",10000],["cliente2","iden2","clave2",30000],["cliente3","ident3","clave3",0]];

//FUNCIONES
function mymain(){
    try {
        alert("Bienvenido a la banca en Linea ")
        i = iniciosesion()
        if(typeof i !== 'undefined' && i !== null && i !== ''){
            alert("Bienvenido "+ datos[i][0]);
            menu(i)
        }
        else throw "ingrese credenciales validas"
    } catch (error) {
     console.log(error.name, error.message)
     mymain()
    }
}

function menu(i){
    try {
        var opcion = "1"
        if((opcion=="1")||(opcion=="2")||(opcion=="3")||(opcion=="4")){
            while(opcion!="4"){
                opcion = prompt("Banca en linea.\nSeleccione que desea hacer: \n1.- Ver saldo \n2.- Realizar giro \n3.- realizar deposito  \n4.- Salir");
                if(opcion=="1"){
                    versaldo(i)
                }
                else if(opcion=="2"){
                    giro(i)
                }
                else if(opcion=="3"){
                    deposito(i)
                }
                else if(opcion=="4"){

                } 
                else throw "opcion no valida"
            }
        }
        else throw "opcion no valida"
    } catch (error) {
     console.log(error.name, error.message)
     alert(error)
     menu(i)
    }
}

function iniciosesion(){
    try {
        var usuario = prompt("ingrese su identificador");
        var contraseña = prompt("ingrese su contraseña");
        for(i=0;datos.length;i++){
            if(datos[i][1]==usuario){
                if(datos[i][2]==contraseña){
                    activo=i
                    return activo
                }
                else throw "contraseña o usuario incorrecto"
            }
            else throw "contraseña o usuario incorrecto"
            
            
        }
    } catch (error) {
     console.log(error.name, error.message)
     alert(error)
    }
}

function deposito(i){
    try {
        suma = prompt("Su saldo actual es:" + datos[i][3] +"\nIngrese el monto que desea depositar");
        if(Number(suma)){
            parseInt(suma)
            if(suma>=0){
                total = datos[i][3] + suma
                datos[i][3] = total
                alert("deposito realizado, su nuevo saldo es "+total)
            }
            else throw "ingrese valores positivo"
        }
        else throw "ingrese un digito valido"
    } catch (error) {
     console.log(error.name, error.message)
     alert(error)
    }
}

function giro(i){
    try {
        resta = prompt("Su saldo actual es:" + datos[i][3] +"\ningrese el monto que desea girar");
        if(Number(resta)){
            parseInt(resta)
            if(resta>=0){
                if(datos[i][3]>resta){
                    total = datos[i][3] - resta
                    datos[i][3] = total
                    alert("Giro realizado. su nuevo saldo es "+total)
                }
                else if(datos[i][3]<resta) throw "saldo no suficiente"
                else throw "error desconocido"
            }
            else throw "ingrese valores positivo"
        }
        else throw "ingrese un digito valido"

    } catch (error) {
     console.log(error.name, error.message)
     alert(error)
    }
}

function versaldo(i){
    try {
        alert(datos[i][3])
    } catch (error) {
     console.log(error.name, error.message)
     alert(error)
    }
}

mymain()