window.onload = () => {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")

  // START EVENT

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const startGame = () => {
    clearCanvas()
    drawRoad()
    drawCar()
    limite()
    requestAnimationFrame(startGame)
  }

  // CREACIÓN ROAD Y CAR

  const road = new Image();
  road.src = '/images/road.png'
  
  const car = new Image();
  car.src = '/images/car.png'
  
  // VARIABLES
  
  let carX = 215;
  let carY = 580;
  let counter = 0;
  
  // CHECK (creo que no se está aplicando)

  road.onload = () => {
    counter++;
    checkIfAllImagesAreLoaded();
  };

  car.onload = () => {
    counter++;
    checkIfAllImagesAreLoaded();
  };

  const checkIfAllImagesAreLoaded = () => {
	  if (counter === 2) {
		  startGame();
	  }
  };

  // DIBUJAR

  const drawRoad = () => {
    ctx.drawImage(road, 0, 0, 500, 700);
  };

  const drawCar = () => {
    ctx.drawImage(car, carX, carY, 70, 120);
  };

  // MOVIMIENTO

  function left() {
    carX -= 10
  }

  let right = () => {
    carX += 10
  }

  // LIMITE ROAD

  const limite = () =>{
    if (carX < 35){
    carX = 35}
   else if (carX > 400){
    carX = 400}
  }

  //  TECLADO
  document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowRight'){
      right()
    } else if(event.key === 'ArrowLeft'){
      left()
    }
  })

  // LIMPIAR CAMVAS

  const clearCanvas = () => {
    ctx.clearRect(0, 0, 500, 700);
  }

  // MOVIMIENTO ROAD INTENTO 1

  // let backgroundMovement = () => {
  //   let speed = -1;
  //   let roadY = 0;

  //   let movement = () =>{
  //   roadY += speed;
  //   roadY %= canvas.height;
  //   }
  
  //   let reDraw = () =>{
  //     ctx.drawImage(drawRoad, carY, 0)
  //     if (speed < 0) {
  //       ctx.drawImage(drawRoad, carY + canvas.height, 0);
  //     } else {
  //       ctx.drawImage(drawRoad, carY - drawRoad.height, 0)
  //     }
  //   }
  // }

  // MOVIMIENTO ROAD INTENTO 2

  // const drawRoadRepeat = () => {
  //   ctx.drawImage(road, 0, -5, 500, 650);
  // };
};

