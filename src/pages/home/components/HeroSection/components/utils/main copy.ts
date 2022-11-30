import { Globe, Point3D } from "../classes";

export function init(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");

  if (!context) return -1;

  let secondsPassed = 0;
  let oldTimeStamp = 0;
  let fps = 0;

  let width = +(canvas.getAttribute("width") || 640);
  let height = +(canvas.getAttribute("height") || 480);
  let canvasCenter = new Point3D(width / 2, height / 2);
  const globe = new Globe(context, canvasCenter, width, height);

  let timeStamp = 0;
  let lastScrollPosition = 0;

  //-----------------------------------------

  const addScrollEvent = () => {
    lastScrollPosition = 0;

    document.addEventListener("scroll", () => {
      const y = lastScrollPosition - window.pageYOffset;
      globe.rotation.y = y;
    });
  };

  const addResizeEvent = () => {
    window.addEventListener("resize", function () {
      setTimeout(() => {
        width = canvas.getBoundingClientRect().width;
        height = canvas.getBoundingClientRect().height;

        canvas.setAttribute("width", "" + width);
        canvas.setAttribute("height", "" + height);

        canvasCenter = new Point3D(width / 2, height / 2);
        globe.setPosition(canvasCenter);
      }, 400);
    });
  };

  const updateFps = () => {
    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    secondsPassed = Math.min(secondsPassed, 0.1);
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);
  };

  const update = () => {
    globe.update();

    updateFps();
  };

  const drawFps = () => {
    // Draw number to the screen
    context.font = "25px Arial";
    context.fillStyle = "black";
    context.fillText("FPS: " + fps, 10, 30);
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawFps();
    globe.draw();
  };

  const mainLoop = (timeStamp_ = 0) => {
    timeStamp = timeStamp_;

    update();
    draw();

    window.requestAnimationFrame(mainLoop);
  };

  const create = () => {
    addResizeEvent();
    addScrollEvent();
    mainLoop();
  };

  create();
}
