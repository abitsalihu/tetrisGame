import * as BABYLON from "@babylonjs/core";
import * as CANNON from "cannon";

// console.log(CANNON);
console.log(BABYLON);

window.CANNON = CANNON;

const canvas = document.querySelector(".canvas");

const engine = new BABYLON.Engine(canvas, true);

const scene = new BABYLON.Scene(engine);

let cannonJSPlugin = new BABYLON.CannonJSPlugin();
cannonJSPlugin.setGravity(new BABYLON.Vector3(0, -9.81, 0));

scene.enablePhysics(new BABYLON.Vector3(0, -0.1, 0), cannonJSPlugin);

scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);

const camera = new BABYLON.ArcRotateCamera(
  "Camera",
  -Math.PI / 2,
  Math.PI / 3,
  10,
  BABYLON.Vector3.Zero(),
  scene
);
// camera.attachControl(canvas, true);

// scene.activeCamera.attachControl(canvas, true);
const myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);

myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
myMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

// const box = BABYLON.MeshBuilder.CreateBox("box", { size: 0.3 });

// box.physicsImpostor = new BABYLON.PhysicsImpostor(
//   box,
//   BABYLON.PhysicsImpostor.BoxImpostor,
//   {
//     mass: 1,
//     friction: 0,
//     restitution: 0,
//   }
// );

// box.material = myMaterial;

const ground = BABYLON.MeshBuilder.CreateGround("ground", {
  width: 2,
  height: 0.3,
});

let fallingObject;

const createLine = () => {
  const CoT = new BABYLON.TransformNode("root");

  const box = BABYLON.MeshBuilder.CreateBox("box", { size: 0.3 });

  box.physicsImpostor = new BABYLON.PhysicsImpostor(
    box,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 1,
      friction: 0,
      restitution: 0,
    }
  );
  box.position.y = 0;
  //   box.parent = CoT;

  const box2 = BABYLON.MeshBuilder.CreateBox("box2", { size: 0.3 });

  box2.physicsImpostor = new BABYLON.PhysicsImpostor(
    box2,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 1,
      friction: 0,
      restitution: 0,
    }
  );
  box2.position.y = 0.3;
  box2.parent = CoT;

  const box3 = BABYLON.MeshBuilder.CreateBox("box3", { size: 0.3 });

  box3.physicsImpostor = new BABYLON.PhysicsImpostor(
    box3,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 1,
      friction: 0,
      restitution: 0,
    }
  );
  box3.position.y = 0.6;
  box3.parent = CoT;

  fallingObject = CoT;

  const box4 = BABYLON.MeshBuilder.CreateBox("box4", { size: 0.3 });

  box4.physicsImpostor = new BABYLON.PhysicsImpostor(
    box4,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 1,
      friction: 0,
      restitution: 0,
    }
  );
  box4.position.y = 0.9;
  box4.parent = CoT;

  fallingObject = CoT;
};

const createBox = () => {
  const group = new BABYLON.TransformNode("root");

  const box1 = BABYLON.MeshBuilder.CreateBox("box1", { size: 0.3 });

  box1.physicsBody = new BABYLON.PhysicsImpostor(
    box1,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0.1,
      friction: 0,
      restitution: 0,
    }
  );
  box1.parent = group;

  const box2 = BABYLON.MeshBuilder.CreateBox("box2", { size: 0.3 });

  box2.physicsBody = new BABYLON.PhysicsImpostor(
    box2,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0.1,
      friction: 0,
      restitution: 0,
    }
  );
  box2.position.y = 0.3;
  box2.parent = group;

  const box3 = BABYLON.MeshBuilder.CreateBox("box3", { size: 0.3 });

  box3.physicsBody = new BABYLON.PhysicsImpostor(
    box3,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0.1,
      friction: 0,
      restitution: 0,
    }
  );
  box3.position.x = 0.3;
  box3.parent = group;

  const box4 = BABYLON.MeshBuilder.CreateBox("box4", { size: 0.3 });

  box4.physicsBody = new BABYLON.PhysicsImpostor(
    box4,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0.1,
      friction: 0,
      restitution: 0,
    }
  );
  box4.position.x = 0.3;
  box4.position.y = 0.3;

  box4.parent = group;

  fallingObject = group;
};

// createLine();
createBox();

ground.position.y = -3;
ground.physicsImpostor = new BABYLON.PhysicsImpostor(
  ground,
  BABYLON.PhysicsImpostor.PlaneImpostor,
  {
    mass: 0,
    friction: 0,
    restitution: 0,
  }
);

// box.physicsImpostor.registerOnPhysicsCollide(ground.physicsImpostor, (e) => {
//   console.log(e);
// });

// let boxMovementDown = 0;
let boxMovement = 0;
// box.position.x = boxMovement;
window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowRight") {
    boxMovement += 0.3;
  }

  if (e.key === "ArrowLeft") {
    boxMovement -= 0.3;
  }

  if (e.key === "ArrowDown") {
    console.log(e);
  }
});

engine.runRenderLoop(() => {
  scene.render();
  fallingObject.position.x = boxMovement;
  console.log(fallingObject);
  // console.log(fallingObject);
});

window.addEventListener("resize", () => {
  engine.resize();
});
//?

//?
