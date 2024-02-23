async function desafioAsincrono() {
  const Albums = await fetch("https://jsonplaceholder.typicode.com/albums");

  try {
    const respuesta = await Albums.json();
    respuesta.forEach((element) => {
      if (element.id < 21) {
        console.log(`ID: ${element.id} , Titulo: ${element.title}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
desafioAsincrono();

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
mostrarMensaje(mensaje());
