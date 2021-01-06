const hablar = (texto) => {
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }
    let texto = "Hola, soy Saul Macias";
    hablar(texto);