
const Utileria = {

  /*libreria utileria*/

  
  validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
  },

  soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
  },

  validarLongitud(numero, maxLongitud) {
    const str = String(numero);
    return str.length <= maxLongitud;
  },

  calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  },

  esMayorDeEdad(fechaNacimiento) {
    return this.calcularEdad(fechaNacimiento) >= 18;
  },

  validarContra(contraseña) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(contraseña);
  },

  limpiarCampos(contenedor = document) {
    const inputs = contenedor.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.type !== 'submit' && input.type !== 'button') {
        input.value = '';
      }
    });
  },

  validarCURP(curp) {
    const regex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
    return regex.test(curp.toUpperCase());
  }
};