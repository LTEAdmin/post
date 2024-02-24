
const object = document.getElementById("traerPost");
document.querySelector("#traerPost").addEventListener("click", () => desafioPost());

async function desafioPost() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let construcPost = "";
  try {
    const respuesta = await posts.json();
    respuesta.forEach((element) => {
      //aca se debe cambiar el formato por que se va a eniar al HTML como unalista usando vineta
      construcPost = (`${construcPost} <li><span style="font-weight:bold">${element.title}</span> \n   ${element.body}</li> \n`);
    });
  } catch (error) {
    console.log(error);
  }
  construcPost=(`<ul>${construcPost}</ul>`);
  document.getElementById("post-data").innerHTML = construcPost;
}
