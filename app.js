function mensaje(){

    alert("Bienvenido a Mi Primera PWA");

}

// Registrar Service Worker

if('serviceWorker' in navigator){

    window.addEventListener('load',()=>{

        navigator.serviceWorker.register('sw.js')
        .then(registro=>{

            console.log("Service Worker registrado");

        })
        .catch(error=>{

            console.log("Error:",error);

        });

    });

}