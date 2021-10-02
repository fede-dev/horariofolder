const horasManager = require("./horasManager");
const hora = new horasManager();
const zonaHoraria = require("./zonaHoraria");
const h1 = "16hs";
const h2 = "24hs";
hora.time(zonaHoraria.madrid);
hora.horaPais(h1, h2);
