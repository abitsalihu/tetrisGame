// import * as BABYLON from "babylon";
import * as BABYLON from "@babylonjs/core";

const canvas = document.querySelector(".canvas");

const engine = new BABYLON.Engine(canvas, true);

//?light
const scene = new BABYLON.Scene(engine);

//?camera

const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -5),
  scene
);

//! activate this to move around the scene
// camera.attachControl(canvas, true);

//? create Materials

const CoT = new BABYLON.TransformNode("root");

const material = new BABYLON.StandardMaterial("material", scene);

material.emissiveColor = new BABYLON.Color3(0, 1, 0);

const blueMaterial = new BABYLON.StandardMaterial("material", scene);
blueMaterial.emissiveColor = new BABYLON.Color3(0, 0, 1);

const orangeMaterial = new BABYLON.StandardMaterial("material", scene);
orangeMaterial.emissiveColor = new BABYLON.Color3(255, 165, 0);

//? CREATE SCENE CONTAINER

const sceneContainer = new BABYLON.TransformNode("root");

const bottomBox = new BABYLON.MeshBuilder.CreateBox("bottomBox", {
  size: 0.15,
  width: 1.85,
});

const leftBox = new BABYLON.MeshBuilder.CreateBox("leftBox", {
  size: 0.15,
  height: 3.75,
});

const rightBox = new BABYLON.MeshBuilder.CreateBox("rightBox", {
  size: 0.15,
  height: 3.75,
});

leftBox.position.y = 1.85;
leftBox.position.x = -0.9;

rightBox.position.y = 1.85;
rightBox.position.x = 1.05;

bottomBox.position.x = 0.1;
bottomBox.position.y = 0.05;

sceneContainer.position.y = -1.75;

rightBox.parent = sceneContainer;
leftBox.parent = sceneContainer;
bottomBox.parent = sceneContainer;

let currentBlock;

//? CREATE TETRIS SHAPES
const createStraightPolyomino = () => {
  let boxSize = 0.15;
  const CoT = new BABYLON.TransformNode("root");

  const fBox = new BABYLON.MeshBuilder.CreateBox(
    "fBox",
    {
      size: boxSize,
    },
    scene
  );

  fBox.material = blueMaterial;

  fBox.parent = CoT;

  const sBox = new BABYLON.MeshBuilder.CreateBox(
    "sBox",
    {
      size: boxSize,
    },
    scene
  );

  sBox.material = blueMaterial;
  sBox.position.y = 0.15;

  sBox.parent = CoT;

  const thBox = new BABYLON.MeshBuilder.CreateBox(
    "thBox",
    {
      size: boxSize,
    },
    scene
  );

  thBox.material = blueMaterial;
  thBox.position.y = 0.3;

  thBox.parent = CoT;

  const foBox = new BABYLON.MeshBuilder.CreateBox(
    "foBox",
    {
      size: boxSize,
    },
    scene
  );

  foBox.material = blueMaterial;
  foBox.parent = CoT;
  foBox.position.y = 0.45;

  currentBlock = CoT;
};

const createSquarePolyomino = () => {
  let boxSize = 0.15;
  const CoT = new BABYLON.TransformNode("root");

  const fBox = new BABYLON.MeshBuilder.CreateBox(
    "fBox",
    {
      size: boxSize,
    },
    scene
  );

  fBox.material = material;
  fBox.parent = CoT;

  const sBox = new BABYLON.MeshBuilder.CreateBox(
    "sBox",
    {
      size: boxSize,
    },
    scene
  );

  sBox.material = material;
  sBox.parent = CoT;
  sBox.position.y = 0.15;

  const thBox = new BABYLON.MeshBuilder.CreateBox(
    "thBox",
    {
      size: boxSize,
    },
    scene
  );

  thBox.material = material;
  thBox.parent = CoT;
  thBox.position.x = 0.15;

  const foBox = new BABYLON.MeshBuilder.CreateBox(
    "foBox",
    {
      size: boxSize,
    },
    scene
  );

  foBox.material = material;
  foBox.parent = CoT;
  foBox.position.x = 0.15;
  foBox.position.y = 0.15;

  currentBlock = CoT;
};

const createSkewPolyomino = () => {
  let boxSize = 0.15;
  const CoT = new BABYLON.TransformNode("root");

  const fBox = new BABYLON.MeshBuilder.CreateBox(
    "fBox",
    {
      size: boxSize,
    },
    scene
  );

  fBox.material = material;
  fBox.parent = CoT;

  const sBox = new BABYLON.MeshBuilder.CreateBox(
    "sBox",
    {
      size: boxSize,
    },
    scene
  );

  sBox.material = material;
  sBox.parent = CoT;
  sBox.position.x = 0.15;

  const thBox = new BABYLON.MeshBuilder.CreateBox(
    "thBox",
    {
      size: boxSize,
    },
    scene
  );

  thBox.material = material;
  thBox.parent = CoT;
  thBox.position.x = 0.15;
  thBox.position.y = 0.15;

  const foBox = new BABYLON.MeshBuilder.CreateBox(
    "foBox",
    {
      size: boxSize,
    },
    scene
  );

  foBox.material = material;
  foBox.parent = CoT;
  foBox.position.x = 0.3;
  foBox.position.y = 0.15;

  currentBlock = CoT;
};

const createLPolyomino = () => {
  let boxSize = 0.15;
  const CoT = new BABYLON.TransformNode("root");

  const fBox = new BABYLON.MeshBuilder.CreateBox(
    "fBox",
    {
      size: boxSize,
    },
    scene
  );

  fBox.material = orangeMaterial;
  fBox.parent = CoT;

  const sBox = new BABYLON.MeshBuilder.CreateBox(
    "sBox",
    {
      size: boxSize,
    },
    scene
  );

  sBox.material = orangeMaterial;
  sBox.parent = CoT;
  sBox.position.x = 0.15;

  const thBox = new BABYLON.MeshBuilder.CreateBox(
    "thBox",
    {
      size: boxSize,
    },
    scene
  );

  thBox.material = orangeMaterial;
  thBox.parent = CoT;

  thBox.position.y = 0.15;

  const foBox = new BABYLON.MeshBuilder.CreateBox(
    "foBox",
    {
      size: boxSize,
    },
    scene
  );

  foBox.material = orangeMaterial;
  foBox.parent = CoT;

  foBox.position.y = 0.3;

  currentBlock = CoT;
};

const createTPolyomino = () => {
  let boxSize = 0.15;
  const CoT = new BABYLON.TransformNode("root");

  const fBox = new BABYLON.MeshBuilder.CreateBox(
    "fBox",
    {
      size: boxSize,
    },
    scene
  );

  fBox.material = orangeMaterial;
  fBox.parent = CoT;

  const sBox = new BABYLON.MeshBuilder.CreateBox(
    "sBox",
    {
      size: boxSize,
    },
    scene
  );

  sBox.material = orangeMaterial;
  sBox.parent = CoT;
  sBox.position.y = 0.15;

  const thBox = new BABYLON.MeshBuilder.CreateBox(
    "thBox",
    {
      size: boxSize,
    },
    scene
  );

  thBox.material = orangeMaterial;
  thBox.parent = CoT;

  thBox.position.y = 0.15;
  thBox.position.x = 0.15;

  const foBox = new BABYLON.MeshBuilder.CreateBox(
    "foBox",
    {
      size: boxSize,
    },
    scene
  );

  foBox.material = orangeMaterial;
  foBox.parent = CoT;

  foBox.position.y = 0.15;
  foBox.position.x = -0.15;

  currentBlock = CoT;
};

// createSkewPolyomino();

// createSquarePolyomino();

// createStraightPolyomino();

createTPolyomino();
let randomNumber;

let createRandomNumber = () => {
  randomNumber = Math.round(Math.random() * 4);
  console.log(randomNumber);
  // return randomNumber;
};
console.log(randomNumber);

let randomShape = [
  createStraightPolyomino,
  createSquarePolyomino,
  createSkewPolyomino,
  createLPolyomino,
  createTPolyomino,
];

//? keyboard arrow LOGIC

let arrowRightTrue = false;
let boxMovementSide = 0;
let boxMovementDown = 1.5;

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "d") {
    if (boxMovementSide < 0.75) {
      if (boxMovementDown > -1.5) {
        boxMovementSide += 0.15;
      }
    }
  }
  if (e.key === "ArrowLeft" || e.key === "a") {
    // console.log(boxMovementSide);
    if (boxMovementSide > -0.75) {
      if (boxMovementDown > -1.5) {
        boxMovementSide -= 0.15;
      }
    }
  }

  if (e.key === "ArrowDown" || e.key === "s") {
    if (boxMovementDown > -1.5) {
      boxMovementDown -= 0.15;
    }
  }

  if (e.key === "ArrowUp" || e.key === "w") {
    if (currentBlock.rotation.z > -1.5) {
      currentBlock.rotation.z -= Math.PI * 0.5;
      console.log(currentBlock.rotation.z);
    } else {
      currentBlock.rotation.z += Math.PI * 0.5;
    }
  }
});

window.addEventListener("resize", () => {
  engine.resize();
});

//? run TICK function
engine.runRenderLoop(() => {
  scene.render();
  if (currentBlock.position.y > -1.35)
    currentBlock.position.x = boxMovementSide;
  currentBlock.position.y = boxMovementDown;

  boxMovementDown -= 0.005 * 2;

  // console.log(currentBlock.position.y);
  if (currentBlock.position.y <= -1.35) {
    createRandomNumber();

    randomShape[randomNumber]();

    boxMovementDown = 1.5;
    boxMovementSide = 0;
  }
});
