const horaManager = function () {
  this.zonaHoraria = null;
  this.time = (horarios) => {
    this.zonaHoraria = horarios;
  };
  this.horaPais = (a, b) => {
    try {
      console.log(this.zonaHoraria.horaPais(a, b));
    } catch (error) {
      console.log(`El horario no está disponible ${error.message}`);
    }
  };
};

module.exports = horaManager;
