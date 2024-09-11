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
      eficienciaMotor: 80,
      capacidadTanque: 70,
      peso: 60,
      potencia: 90
    },
    "Mazda CX5": {
      eficienciaMotor: 85,
      capacidadTanque: 75,
      peso: 65,
      potencia: 88
    },
    "Mazda CX30": {
      eficienciaMotor: 90,
      capacidadTanque: 80,
      peso: 70,
      potencia: 85
    },
    "Mazda CX50": {
      eficienciaMotor: 70,
      capacidadTanque: 65,
      peso: 60,
      potencia: 80
    },
    "Mazda CX90": {
      eficienciaMotor: 75,
      capacidadTanque: 70,
      peso: 75,
      potencia: 90
    },
    "Mazda CX60": {
      eficienciaMotor: 80,
      capacidadTanque: 60,
      peso: 65,
      potencia: 85
    },
    "Mazda BT-50": {
      eficienciaMotor: 85,
      capacidadTanque: 75,
      peso: 70,
      potencia: 80
    },
    "FOTON TUNLAND V9": {
      eficienciaMotor: 80,
      capacidadTanque: 65,
      peso: 70,
      potencia: 75
    },
    "TM3": {
      eficienciaMotor: 90,
      capacidadTanque: 60,
      peso: 70,
      potencia: 85
    },
    "VIEW CS2": {
      eficienciaMotor: 85,
      capacidadTanque: 70,
      peso: 65,
      potencia: 80
    },
    "Miler": {
      eficienciaMotor: 80,
      capacidadTanque: 75,
      peso: 60,
      potencia: 85
    },
    "EST-A S35": {
      eficienciaMotor: 70,
      capacidadTanque: 65,
      peso: 75,
      potencia: 80
    },
    "EST-A S10": {
      eficienciaMotor: 75,
      capacidadTanque: 60,
      peso: 70,
      potencia: 85
    },
    "EST-A View": {
      eficienciaMotor: 80,
      capacidadTanque: 70,
      peso: 65,
      potencia: 90
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
      return; // Si no se ha seleccionado una categoría válida, detener
    }
  
    // Añadir nuevos modelos en función de la categoría
    const modelos = modelosPorCategoria[categoriaSeleccionada];
    modelos.forEach(function(modelo) {
      const option = document.createElement('option');
      option.value = modelo.nombre; // Usamos el nombre como valor
      option.text = modelo.nombre;
      modeloSelect.add(option);
    });
  }
  
  // Función para actualizar la imagen del vehículo seleccionado
  function actualizarImagenVehiculo(modeloSelectId, imgElementId) {
    const modeloSelect = document.getElementById(modeloSelectId);
    const imgElement = document.getElementById(imgElementId);
  
    // Obtener el nombre del modelo seleccionado
    const modeloSeleccionado = modeloSelect.value;
  
    // Obtener la categoría seleccionada
    const categoriaSeleccionada = document.getElementById('category1').value;
    const modelos = modelosPorCategoria[categoriaSeleccionada];
  
    if (!modelos) {
      console.error('Categoría seleccionada no válida o no definida.');
      return;
    }
  
    const modelo = modelos.find(m => m.nombre === modeloSeleccionado);
  
    // Actualizar el src del elemento img
    imgElement.src = modelo ? modelo.imagen : '';
  }
  
  // Función para actualizar las barras de progreso
  function actualizarProgreso(modelo, imgElementId) {
    const especificacion = especificaciones[modelo];
    if (!especificacion) return; // Si el modelo no está definido, salir
  
    // Actualizar las barras de progreso
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="motor"] .progress-bar`).style.width = `${especificacion.eficienciaMotor}%`;
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="motor"] .progress-bar`).textContent = `${especificacion.eficienciaMotor}%`;
  
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="tanque"] .progress-bar`).style.width = `${especificacion.capacidadTanque}%`;
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="tanque"] .progress-bar`).textContent = `${especificacion.capacidadTanque}%`;
  
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="peso"] .progress-bar`).style.width = `${especificacion.peso}%`;
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="peso"] .progress-bar`).textContent = `${especificacion.peso}%`;
  
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="potencia"] .progress-bar`).style.width = `${especificacion.potencia}%`;
    document.querySelector(`#${imgElementId} ~ .charts .progress[data-type="potencia"] .progress-bar`).textContent = `${especificacion.potencia}%`;
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
    actualizarImagenVehiculo('model1', 'car-image1');
    actualizarProgreso(this.value, 'car-image1');
  });
  
  document.getElementById('model2').addEventListener('change', function() {
    actualizarImagenVehiculo('model2', 'car-image2');
    actualizarProgreso(this.value, 'car-image2');
  });
  