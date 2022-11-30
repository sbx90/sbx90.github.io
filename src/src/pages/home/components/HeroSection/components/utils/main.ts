import { Globe, Point3D } from "../classes";

const Hammer = () => import("hammerjs");

const MOBILE_SCREEN_WIDTH_THRESHOLD = 768; //Standard table width

export function init(
  canvas: HTMLCanvasElement,
  setting: {
    radius?: number;
    rings?: number;
    slices?: number;
    globeRenderOffset?: Point3D;
    globeRenderOffsetPercentage?: Point3D;
  } = {},
) {
  const context = canvas.getContext("2d");

  if (!context) return -1;

  let secondsPassed = 0;
  let oldTimeStamp = 0;
  let fps = 0;

  let width = +(canvas.getAttribute("width") || 640);
  let height = +(canvas.getAttribute("height") || 480);
  let canvasCenter = new Point3D(width / 2, height / 2);

  let globeX = width;
  if (setting.globeRenderOffsetPercentage?.x) {
    globeX *= setting.globeRenderOffsetPercentage.x || 1;
  }
  if (setting.globeRenderOffset?.x) {
    globeX += setting.globeRenderOffset.x || 0;
  }

  let globeY = height;
  if (setting?.globeRenderOffsetPercentage?.y) {
    globeY *= setting.globeRenderOffsetPercentage.y || 1;
  }
  if (setting.globeRenderOffset?.y) {
    globeY += setting?.globeRenderOffset.y || 0;
  }

  const globe = new Globe(
    context,
    new Point3D(globeX, globeY),
    width,
    height,
    setting.radius,
    setting.rings,
    setting.slices,
  );

  let timeStamp = 0;
  let lastScrollPosition = 0;

  //-----------------------------------------

  Hammer().then((h) => {
    const Hammer = h.default || h;
    const mc = new Hammer.Manager(canvas);

    // create a recognizer
    const Swipe = new Hammer.Swipe();

    // add the recognizer
    mc.add(Swipe);

    // subscribe to events
    mc.on("swipe", function (e) {
      globe.rotation.y += e.deltaX;
      // globe.rotation.x = e.deltaY;
    });
  });

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

    // eslint-disable-next-line no-constant-condition
    if (false) drawFps();
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
