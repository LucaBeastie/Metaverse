import Movements from "./Movements.js";
// Declaration of a new scene with Three.js

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xbfd1e5);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Camera and renderer configuration
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Setting the scene lights
const ambient_light = new THREE.AmbientLight(0xbda355);
const direction_light  = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add(direction_light);

scene.add(ambient_light)
//Set up a flat space of the metaverse
const geometry_space = new THREE.BoxGeometry(100, .5, 50 );
const material_space = new THREE.MeshPhongMaterial({ color: 0xffffff });
const space = new THREE.Mesh(geometry_space, material_space);
scene.add(space);

//Geometric figure to be represented in the Metqaverse - Cube

const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Geometric figure to be represented in the Metqaverse - Cone
const geometry_cone = new THREE.ConeGeometry( 5, 20, 32 );
const material_cone = new THREE.MeshPhongMaterial( {color: 0xedb10a} ); 
const cone = new THREE.Mesh( geometry_cone, material_cone);
cone.position.set(-10, 5, 0);
scene.add( cone );

//Geometric figure to be represented in the Metqaverse - Cylinder
const geometry_cylinder = new THREE.CylinderGeometry( 5, 5, 3, 32 );
const material_cylinder = new THREE.MeshPhongMaterial( {color: 0x0000ff} );
const cylinder = new THREE.Mesh( geometry_cylinder, material_cylinder );
cylinder.position.set(10, 5, 0);
scene.add( cylinder );

//Geometric figure to be represented in the Metaverse - Torus
const geometry_torus = new THREE.TorusGeometry( 4, 1.5, 6, 50);
const material_torus = new THREE.MeshPhongMaterial( {color: 0xff0000} );
const torus = new THREE.Mesh( geometry_torus, material_torus );
torus.position.set(25, 5, 0);
scene.add( torus );

camera.position.set(10, 5, 40);

 function animate() {
    cube.rotation.x +=0.05
    cube.rotation.y +=0.05
    
    cone.rotation.x +=0.05
    cone.rotation.y +=0.05
   
   cylinder.rotation.x +=0.05
   cylinder.rotation.y +=0.05
           
    requestAnimationFrame( animate );
    //Movement to the left
    if (Movememts.isPressed(37)){
        camera.position.x -= 0.5;
    }

    //Upward movement
    if (Movememts.isPressed(38)){
        camera.position.x += 0.5;
        camera.position.y += 0.5;
    }

    //Movement to the right
    if (Movememts.isPressed(39)){
        camera.position.x += 0.5;
    }

     //Downward movement
     if (Movememts.isPressed(40)){
        camera.position.x -= 0.5;
        camera.position.y -= 0.5;
    }

    camera.lookAt(space.position);
	renderer.render( scene, camera );
}
animate();

