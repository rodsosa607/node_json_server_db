// console.log('Hola nodeJS');
const main = () => {
    console.log('Aquí iniciaremos el servidor');
}

//hacer una función agnóstica autoconvocada
// (()=>{})()
//Agnóstica porque no tiene nombre
//Autoconvocada porque al último tiene ()
( async () => {
    main()
})()