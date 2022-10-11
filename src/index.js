const messages = [
    "Parrrtieeeroooon!!",
    "Solicitud solicitada",
    "Controlar versiones? Archivo final final guardado",
    "SUBIENDO TODOS LOS ARCHIVOS!!!",
    "Lo mismo que haces toda las noches ¡Se encontró un error en la linea 56!",
    "Borrando base de datos.",
    "The cake is a lie!",
    "ALGUIEN QUIERE CAFÉ?!!",
    "I'm a Witcher",
    "Aqui vamos de nuevo!",
    "Aquí no hay nada para tí",
    "...",
    "Hello World!"
  ];
  
  const funnyMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`${message}`);
  }
  
  module.exports = {
    funnyMessage
  };