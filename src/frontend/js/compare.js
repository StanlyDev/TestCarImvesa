// Arrays con los modelos y sus imágenes por categoría
const modelosPorCategoria = {
  SUV: [
    { nombre: "Mazda CX9", imagen: "/src/frontend/img/cars-png/cx9.png" },
    { nombre: "Mazda CX5", imagen: "/src/frontend/img/cars-png/cx5.png" },
    { nombre: "Mazda CX30", imagen: "/src/frontend/img/cars-png/cx30.png" },
    { nombre: "Mazda CX50", imagen: "/src/frontend/img/cars-png/cx50.png" },
    { nombre: "Mazda CX90", imagen: "/src/frontend/img/cars-png/cx90.png" },
    { nombre: "Mazda CX60", imagen: "/src/frontend/img/cars-png/cx60.png" },
    { nombre: "Mazda BT-50", imagen: "/src/frontend/img/cars-png/bt50.png" },
    { nombre: "FOTON TUNLAND V9", imagen: "/src/frontend/img/cars-png/tunlandv9.png" }
  ],
  Camiones: [
    { nombre: "TM3", imagen: "/src/frontend/img/cars-png/tm3.png" },
    { nombre: "VIEW CS2", imagen: "/src/frontend/img/cars-png/view-cs2.png" },
    { nombre: "Miler", imagen: "/src/frontend/img/cars-png/miler.png" },
    { nombre: "EST-A S35", imagen: "/src/frontend/img/cars-png/esta-s35.png" },
    { nombre: "EST-A S10", imagen: "" },
    { nombre: "EST-A View", imagen: "" }
  ]
};

// Especificaciones de los vehículos
const especificaciones = {
"Mazda CX9": {
  eficienciaMotor: 116.0,
  capacidadTanque: 97.3,
  peso: 31.6,
  potencia: 109.1,
  motor: "2.5T CORE AWD",
  traccion: "FWD / AWD",
  tanqueGasolina: "72-74 Lts",
  pesoKg: "1.960 Kg",
  potenciaHp: "228 hp a 5.000 rpm"
},
"Mazda CX5": {
  eficienciaMotor: 104.4,
  capacidadTanque: 103.1,
  peso: 24.2,
  potencia: 73.2,
  motor: "2.0 Lt e-Skyactiv G",
  traccion: "2WD / AWD",
  tanqueGasolina: "56-58 Lts",
  pesoKg: "1.500 Kg",
  potenciaHp: "153 hp a 6.000 rpm"
},
"Mazda CX30": {
  eficienciaMotor: 110.7,
  capacidadTanque: 110.0,
  peso: 23.3,
  potencia: 73.2,
  motor: "Skyactiv-G de 2.0L",
  traccion: "2WD / AWD",
  tanqueGasolina: "48-51 Lts",
  pesoKg: "1.443 Kg",
  potenciaHp: "153 hp a 6.000 rpm"
},
"Mazda CX50": {
  eficienciaMotor: 86.0,
  capacidadTanque: 89.5,
  peso: 26.2,
  potencia: 109.1,
  motor: "2.5 L SkyActiv-G",
  traccion: "2WD / AWD",
  tanqueGasolina: "60 Lts",
  pesoKg: "1.622 Kg",
  potenciaHp: "228 hp a 5,000 rpm"
},
"Mazda CX90": {
  eficienciaMotor: 92.2,
  capacidadTanque: 96.3,
  peso: 34.4,
  potencia: 162.7,
  motor: "e-SkyActiv G 3.3L Turbo",
  traccion: "i-Activ 4WD",
  tanqueGasolina: "74 Lts",
  pesoKg: "2.136 Kg",
  potenciaHp: "340 hp a 5.000-6.000 rpm"
},
"Mazda CX60": {
  eficienciaMotor: 98.3,
  capacidadTanque: 82.6,
  peso: 33.1,
  potencia: 135.8,
  motor: "MHEV de 3.3L",
  traccion: "4WD PLUS",
  tanqueGasolina: "50.0 Lts",
  pesoKg: "2.055 Kg",
  potenciaHp: "284 hp a 2.000–3.500 rpm"
},
"Mazda BT-50": {
  eficienciaMotor: 104.4,
  capacidadTanque: 103.1,
  peso: 35.4,
  potencia: 71.7,
  motor: "DOHC",
  traccion: "4x2 / 4x4",
  tanqueGasolina: "80 Lts",
  pesoKg: "2.193 Kg",
  potenciaHp: "150 hp a 3.700rpm"
},
"FOTON TUNLAND V9": {
  eficienciaMotor: 98.3,
  capacidadTanque: 89.5,
  peso: 35.4,
  potencia: 77.0,
  motor: "2.0 AUCAN",
  traccion: "4x2 / 4x4",
  tanqueGasolina: "76 Lts",
  pesoKg: "2.200 Kg",
  potenciaHp: "161 hp a 4.000 rpm"
},
"TM3": {
  eficienciaMotor: 110.7,
  capacidadTanque: 82.6,
  peso: 45.2,
  potencia: 54.5,
  motor: "DOHC",
  traccion: "FWD / RWD",
  tanqueGasolina: "50-55 Lts",
  pesoKg: "2.800 Kg",
  capacidadCarga: "1.500 Kg",
  potenciaHp: "114 hp a 6.000 rpm"
},
"VIEW CS2": {
  eficienciaMotor: 104.4,
  capacidadTanque: 96.3,
  peso: 37.2,
  potencia: 78.5,
  motor: "2.8 Turbo Diésel Cummins ISF",
  traccion: "FWD / RWD",
  tanqueGasolina: "65 Lts",
  pesoKg: "2.300 Kg",
  capacidadCarga: "1.100 Kg",
  potenciaHp: "164 hp a 5.250 rpm"
},
"Miler": {
  eficienciaMotor: 98.3,
  capacidadTanque: 75,
  peso: 56.4,
  potencia: 68.9,
  motor: "Diesel Aucan",
  traccion: "4x2",
  tanqueGasolina: "120 Lts",
  pesoKg: "3.495 Kg",
  capacidadCarga: "1.900 Kg",
  potenciaHp: "144 hp a 5.200 rpm"
},
"EST-A S35": {
  eficienciaMotor: 86.0,
  capacidadTanque: 164.9,
  peso: 612.6,
  potencia: 164.6,
  motor: "Cummins ISG11.8e5-350",
  traccion: "6x4",
  tanqueGasolina: "120 Lts",
  pesoKg: "38.000 Kg",
  capacidadCarga: "28.500 Kg",
  potenciaHp: "345 hp a 1.900 rpm"
},
"EST-A S10": {
  eficienciaMotor: "En Espera",
  capacidadTanque: "En Espera",
  peso: "En Espera",
  potencia: "En Espera",
  motor: "En Espera",
  traccion: "En Espera",
  tanqueGasolina: "En Espera",
  pesoKg: "En Espera",
  potenciaHp: "En Espera"
},
"EST-A View": {
  eficienciaMotor: "En Espera",
  capacidadTanque: "En Espera",
  peso: "En Espera",
  potencia: "En Espera",
  motor: "En Espera",
  traccion: "En Espera",
  tanqueGasolina: "En Espera",
  pesoKg: "En Espera",
  potenciaHp: "En Espera"
}
};


// Función para actualizar los modelos según la categoría seleccionada
function actualizarModelos(categoriaSelectId, modeloSelectId) {
  const categoriaSelect = document.getElementById(categoriaSelectId);
  const modeloSelect = document.getElementById(modeloSelectId);

  // Limpiar las opciones actuales del select de modelos
  modeloSelect.innerHTML = '<option selected>Escoge tu modelo</option>';

  const categoriaSeleccionada = categoriaSelect.value;

  if (!categoriaSeleccionada || !modelosPorCategoria[categoriaSeleccionada]) {
    return;
  }

  // Añadir nuevos modelos en función de la categoría
  const modelos = modelosPorCategoria[categoriaSeleccionada];
  modelos.forEach(function(modelo) {
    const option = document.createElement('option');
    option.value = modelo.nombre;
    option.text = modelo.nombre;
    modeloSelect.add(option);
  });
}

// Función para actualizar la imagen del vehículo seleccionado
function actualizarImagenVehiculo(modeloSelectId, imgElementId, tablaId) {
  const modeloSelect = document.getElementById(modeloSelectId);
  const imgElement = document.getElementById(imgElementId);

  // Obtener el nombre del modelo seleccionado
  const modeloSeleccionado = modeloSelect.value;
  const categoriaSeleccionada = document.getElementById('category1').value;
  const modelos = modelosPorCategoria[categoriaSeleccionada];

  if (!modelos) {
    console.error('Categoría seleccionada no válida o no definida.');
    return;
  }

  const modelo = modelos.find(m => m.nombre === modeloSeleccionado);

  // Añadir clase 'animate' para ocultar la imagen antes de cambiar
  if (!imgElement.classList.contains('animate')) {
    imgElement.classList.add('animate');
  }

  // Cambiar la imagen después de un pequeño retraso
  setTimeout(() => {
    imgElement.src = modelo ? modelo.imagen : '/src/frontend/img/logos/logoimvesa-logo.png';
  }, 200);

  // Cuando la nueva imagen esté cargada, remover 'animate' y agregar 'loaded'
  imgElement.onload = function() {
    imgElement.classList.remove('animate');
    imgElement.classList.add('loaded');
    // Actualizar detalles en la tabla correspondiente
    actualizarDetalles(modeloSeleccionado, tablaId);
  };
}

// Función para actualizar las barras de progreso
function actualizarProgreso(modelo, imgElementId) {
  const especificacion = especificaciones[modelo];
  if (!especificacion) return;

  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="motor"] .progress-bar`).style.width = `${especificacion.eficienciaMotor}%`;
  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="motor"] .progress-bar`).textContent = `${especificacion.eficienciaMotor}%`;

  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="tanque"] .progress-bar`).style.width = `${especificacion.capacidadTanque}%`;
  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="tanque"] .progress-bar`).textContent = `${especificacion.capacidadTanque}%`;

  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="peso"] .progress-bar`).style.width = `${especificacion.peso}%`;
  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="peso"] .progress-bar`).textContent = `${especificacion.peso}%`;

  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="potencia"] .progress-bar`).style.width = `${especificacion.potencia}%`;
  document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="potencia"] .progress-bar`).textContent = `${especificacion.potencia}%`;
}

// Función para actualizar los detalles del vehículo seleccionado
function actualizarDetalles(modelo, tablaId) {
  const especificacion = especificaciones[modelo];
  if (!especificacion) {
    console.error('Especificación no encontrada para el modelo:', modelo);
    return;
  }

  const prefix = tablaId === 'tabla1' ? 'car1' : 'car2'; // Definir el prefijo basado en la tabla

  // Ajustar los IDs de acuerdo con los que están en el HTML
  const motorElement = document.getElementById(`motor-${prefix}`);
  const tractionElement = document.getElementById(`traction-${prefix}`);
  const gasCapacityElement = document.getElementById(`gas-capacity-${prefix}`);
  const weightElement = document.getElementById(`weight-${prefix}`);
  const powerElement = document.getElementById(`power-${prefix}`);

  if (!motorElement || !tractionElement || !gasCapacityElement || !weightElement || !powerElement) {
    console.error('Uno o más elementos no encontrados.');
    return;
  }

  // Actualizar los detalles en la tabla
  motorElement.textContent = especificacion.motor || 'No disponible';
  tractionElement.textContent = especificacion.traccion || 'No disponible';
  gasCapacityElement.textContent = especificacion.capacidadTanque ? `${especificacion.capacidadTanque} Lts` : 'No disponible';
  weightElement.textContent = especificacion.pesoKg ? `${especificacion.pesoKg} Kg` : 'No disponible';
  powerElement.textContent = especificacion.potenciaHp ? `${especificacion.potenciaHp} hp` : 'No disponible';
}


// Agregar eventos de cambio a ambos formularios
document.getElementById('category1').addEventListener('change', function() {
  actualizarModelos('category1', 'model1');
});

document.getElementById('category2').addEventListener('change', function() {
  actualizarModelos('category2', 'model2');
});

// Evento para actualizar la imagen y las barras de progreso cuando se selecciona un vehículo
document.getElementById('model1').addEventListener('change', function() {
  actualizarImagenVehiculo('model1', 'car-image1', 'tabla1');
  actualizarProgreso(this.value, 'car-image1');
});

document.getElementById('model2').addEventListener('change', function() {
  actualizarImagenVehiculo('model2', 'car-image2', 'tabla2');
  actualizarProgreso(this.value, 'car-image2');
});
