async function desafioPost() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");

  try {
    const respuesta = await posts.json();
    respuesta.forEach((element) => {
      if (element.id < 21) { //aca se debe cambiar el formato por que se va a eniar al HTML como unalista usando vineta
        console.log(`ID: ${element.id} , Titulo: ${element.title}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
desafioPost();
/* 
function mensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("La información ha sido enviada.");
    }, 3000);
  });
}

async function mostrarMensaje(promesa) {
  const resultado = await promesa;
  console.log(resultado);
}
mostrarMensaje(mensaje()); */
