

//VARIABLES PARA CONTACOT DE NUEVOS PROYECTOS 
let inputNombre = document.getElementById('name-usuario');
let inputEmail = document.getElementById('email-usuario');
let textarea = document.querySelector('textarea');
const form = document.querySelector('.form-contacto');


// NEW PROYECT
let newProyect = {
    nombre: "",
    correo: "",
    mensaje : "",
    summit(){
       if(this.nombre !== '' && this.correo !== '' && this.mensaje !== ''){
        
        const SERVICE_ID  ='service_r3hqfty' ;
        const TEMPLATE_ID = 'template_rfo1cef';
        const PUBLIC_KEY  = 'b-O0hI9PgklH7O5P0';

        emailjs.init({ publicKey: PUBLIC_KEY });

        emailjs.send(SERVICE_ID,TEMPLATE_ID,{
            from_name: this.nombre,
            reply_to: this.correo,
            message: this.mensaje
        })
        
        .then(()=>{
            alert('¡Mensaje enviado! Te respondo pronto 🚀')
            form.reset();
            this.nombre = "";
            this.correo = "";
            this.mensaje = ""; 
        })
        .catch((error) =>{
            console.error('Error:', error)
            alert('Hubo un error al enviar. Intenta de nuevo.')
        })

       }
       else{
            alert('llena primero los cambios para poder tener en cuenta tu proyecto')
       }
    }

}

// ADDEVENTLISTENERS DE LOS IMPUTS DE CONTACTO PARA PROYECTOS NUEVOS 
inputNombre.addEventListener('input', (usuario) =>{
    newProyect.nombre = usuario.target.value;
})

inputEmail.addEventListener('input', (email) =>{
    newProyect.correo= email.target.value;
})

textarea.addEventListener('input', (mensaje)=>{
    newProyect.mensaje = mensaje.target.value
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  newProyect.summit();
})



// botones de contacto y github 
const btnGithub = document.getElementById("btn-github");
btnGithub.addEventListener('click',()=>{
    const url = "https://github.com/felipeandres03";
    window.open(url, "_blank");
})
   

// boton para descargar el cv 
const btnCV = document.getElementById('btnCV');

function descargarCV(){
    const link = document.createElement('a');
    link.href = '/assets/docs/CV-Andrés Felipe Salinas.pdf';
    link.dowloand = 'mi-CV';
    link.click()
} 


btnCV.addEventListener('click', ()=>{
    descargarCV();
})














//boton de proyectos para generar los proyectos completos

// const btnProyectAll = document.getElementById('proyectos-btn');
// btnProyectAll.addEventListener('click', ()=>{
//     console.log('hola mundo');
//     document.querySelectorAll('.container').forEach(section =>{ section.style.display = 'none'});
//     document.querySelectorAll('.proyextosAll').forEach(section =>{ section.style.display = 'flex'});
// })

