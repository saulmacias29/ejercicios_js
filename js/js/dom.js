/*console.log(window);
const hablar = (texto) => {
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }
    let texto = "Hola, soy Saul Macias";
    hablar(texto);
    console.log("ELEMENTOS DEL DOM");
    console.log(window);
    console.log(document);
    console.log(document.head);
    console.log(document.body);
    console.log(document.documentElement);
    console.log(document.doctype);
    console.log(document.charset);
    console.log(document.title)
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);
    setTimeout(() => {
      console.log(document.getSelection().toString());
    }, 2000);
    document.write("<h2>Hola desde el DOM</h2>")*/
    console.log(document.getElementsByTagName("li"));
    console.log(document.getElementsByClassName("card"));
    console.log(document.getElementsByName("nombre"));
    console.log(document.getElementById("menu"));
    console.log(document.querySelector("#menu"));
    console.log(document.querySelector("a"));
    console.log(document.querySelectorAll("a"));
    document.querySelectorAll("a").forEach((el) =>console.log(el));
     console.log(document.querySelector(".card"));
      console.log(document.querySelectorAll(".card")[2]);
    
      console.log(document.querySelectorAll("#menu li"));
    