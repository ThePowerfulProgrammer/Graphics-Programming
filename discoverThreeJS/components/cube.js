import {BoxBufferGeometry, Mesh, MeshBasicMaterial,
     BufferGeometry,
    BufferAttribute,
    MeshStandardMaterial,
    MathUtils,
    TextureLoader,
} from "https://cdn.skypack.dev/three@0.132.2";



const radiansPerSecond = MathUtils.degToRad(30);

function createMaterial() 
{
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("../assets/textures/uv-test-bw.png");

    const material = new MeshStandardMaterial({map: texture});
    return material;
}

// The geometry defines the shape of the mesh. 
// While the geometry defines the shape, the material defines how the surface of the mesh looks.BoxBufferGeometry
// Meshes are the most common kind of visible object used in 3D computer graphics, 
// and are used to display all kinds of 3D objects
function createCube() 
{
    const geometry = new BoxBufferGeometry(2,2,2);
    const material = createMaterial();
    const cube = new Mesh(geometry, material)
    cube.position.set(-2,0,0);
    cube.rotation.set(-0.5,-0.1,0.8); // let us actually rotate our cube so it looks like a cube 
    
    // adding a property to an existing class at run time is called 'monkey patching' not a good practice
    cube.tick = (delta) => 
        {
            cube.rotation.z += radiansPerSecond * delta;
            cube.rotation.x += radiansPerSecond * delta;
            cube.rotation.y += radiansPerSecond * delta;       
        }
    return cube;
}

// material does not absorb/reflect light
function createMeshBasicCube() 
{
    const geometry =  new BoxBufferGeometry(2,2,2);
    const material = new MeshBasicMaterial({color: "purple"} );
    const cube = new Mesh(geometry, material);
    cube.position.set(2,0,0);
    cube.rotation.set(-0.5, -0.1, 0.8);
    cube.scale.z = 1;

    // adding a property to an existing class at run time is called 'monkey patching' not a good practice
    cube.tick = (delta) => 
        {
            cube.rotation.z += radiansPerSecond * delta;
            cube.rotation.x += radiansPerSecond * delta;
            cube.rotation.y += radiansPerSecond * delta;        
        }
    return cube;
}

// this was essentially the tick function (how the cube is updated each frame)
function rotateCube(cube) 
{

   cube.rotation.set(cube.rotation.x - 0.0125, cube.rotation.y - 0.0025, cube.rotation.z + 0.002);
   return cube;
}

export { createCube };
export { createMeshBasicCube } ;
export { rotateCube };