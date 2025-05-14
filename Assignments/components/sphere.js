import {
    SphereBufferGeometry,
    BoxBufferGeometry,
    MeshBasicMaterial, // this requires no light
    MeshStandardMaterial, // our light feeling material
    Mesh,
    MathUtils,
    TextureLoader,
    Clock
} from "https://cdn.skypack.dev/three@0.132.2";

const radians = MathUtils.degToRad(90);

// create a general purpose material loader
function createTextureMaterial(pathToMaterial) 
{
    
    const texture_loader = new TextureLoader();
    const texture = texture_loader.load(pathToMaterial);

    const material = new MeshStandardMaterial( {map: texture} );

    return material;
}

function createSphere() 
{
    // 3  = 695700 km radius therefore 1 = 231666km
    const geometry = new SphereBufferGeometry(3,20,20);
    const material = createTextureMaterial("../assets/sunTexture.jpg");
    const sphere = new Mesh(geometry, material);


    sphere.position.set(0,0,2);
    sphere.rotation.set(10,40,30);

    // add a method to the created sphere: YES JS is weird
    sphere.tick = (delta) => 
        {
            // sphere.rotation.x += radians * delta;
            sphere.rotation.y += radians * delta;
            // sphere.rotation.z += radians * delta;
        }
    
    return sphere;
}



class CelestialObject 
{
    
    static planetsCoordinates = {};
    static clock = new Clock(true);

    constructor(radius,position, texturePath, name )   
    {
        CelestialObject.clock.start();
        this.radius = radius;
        this.position = position;
        this.texturePath = texturePath;
        this.name = name;
        this.sphere = null;
        this.planetsArray = [];
        this.materials = new Array("../assets/mercuryTexture.jpg", "../assets/venusTexture.jpg", "../assets/earthTexture.jpg", "../assets/marsTexture.jpg", "../assets/jupiterTexture.jpg", "../assets/saturnTexture.jpg", "../assets/uranusTexture.jpg", "../assets/neptuneTexture.jpg");
        this.orbit = false
        

        // no no no create the entire object here

        const geometry = new SphereBufferGeometry(this.radius, 20,20);
        const material = createTextureMaterial(this.texturePath);
        this.sphere = new Mesh(geometry, material);

    // create a temp solution for revolving planets by all the following vars
        this.c;
        this.distance;
        this.additionalDistance;    
        this.index;
    }

    // decrypt
    createOrbitingPlanets(entity) 
    {
        const position = entity.getPos(); // grab position of sphere

        const array = new Array();
        // using a for loop we will create 8 planets
        const angle = 2*(Math.PI) * 0.05;
        let radius = 3;
        
        let cSphere;
        for (let i=0;i<8;i++) 
            {
                const geo = new SphereBufferGeometry(1, 20, 20);
                const material = createTextureMaterial(materials[i]);
                cSphere = new Mesh(geo, material);
    
                // now alter transformations
                const xCor = Math.cos(angle)+radius;
                const yCor = Math.sin(angle);
    
                radius += 2;
    
                cSphere.position.set(xCor, yCor, position.z);
                cSphere.scale.multiplyScalar(1/2);
    
    
                cSphere.tick = (delta) => 
                    {
    
                        cSphere.rotation.y += delta * radians;
                    }
    
                    console.log("New Sphere position: ", cSphere.position);
                    array.push(cSphere);
        
            }
    
        for (let i=0;i<array.length; i++) 
            {
                array[i].tick = (delta) => 
                    {
                        array[i].rotation.x += delta * radians * 2;
                        array[i].rotation.y += delta * radians * 2;
                        array[i].rotation.z += delta * radians * 2;
                    }
                console.log(array[i]);
            }
        return array;        
    }

    setPos(x,y,z) 
    {

        this.sphere.position.set(x,y,z);
    } 

    getPos() 
    {
        return this.sphere.position;
    }

    getSphere() 
    {
        return this.sphere;
    }

    alterPosition() 
    {
        if (this.index < 7) 
            {

                // if the planet index is not 7 print the next planets coordinate
                this.sphere.position.x = CelestialObject.planetsCoordinates[this.index + 1].x;
                this.sphere.position.z = CelestialObject.planetsCoordinates[this.index + 1].z;
                this.index = this.index + 1;

            }
        else if (this.index == 7)
        {
            console.log( CelestialObject.planetsCoordinates[0].x);
            this.sphere.position.x = CelestialObject.planetsCoordinates[0].x;
            this.sphere.position.z = CelestialObject.planetsCoordinates[0].z;
            this.index = 0;
        }

    }

    tick(delta)  
    {

        if (this.sphere && this.orbit) 
            {
                // rotate the sphere
                this.sphere.rotation.y += radians * delta;
                // But i also need to move its z position
                // this.sphere.position.x += 0.005;
                // if (CelestialObject.clock.getElapsedTime() > 5) 
                //     {
                //         console.log("5 seconds have passed")
                //         console.log(CelestialObject.clock.getElapsedTime());
                //         this.alterPosition();
                //         CelestialObject.clock.stop();
                //         CelestialObject.clock.start();

                //     }
                
                return this.sphere;


            }
        else if (this.sphere ) 
            {
                this.sphere.rotation.y += radians * delta;
                // for (let key in CelestialObject.planetsCoordinates) 
                //     {
                //         if (key < 7) 
                //             {
                //                 this.sphere.position.x = CelestialObject.planetsCoordinates[key+1].x;
                //                 this.sphere.position.z = CelestialObject.planetsCoordinates[key+1].z;
                //             }


                //     }
             
                return this.sphere;
            }


    }

};


// get the current position of a celestial entity
function getCelestialPosition(cEntity) 
{
    return cEntity.position;
}


function createOrbitingPlanets(sphere) 
{
    const position = getCelestialPosition(sphere); // grab position of sun

    const array = new Array();
    const materials = new Array("../assets/mercuryTexture.jpg", "../assets/venusTexture.jpg", "../assets/earthTexture.jpg", "../assets/marsTexture.jpg", "../assets/jupiterTexture.jpg", "../assets/saturnTexture.jpg", "../assets/uranusTexture.jpg", "../assets/neptuneTexture.jpg");
    // using a for loop we will create 8 planets
    const angle = 2*(Math.PI) * 0.05;
    let radius = 3;
    
    let cSphere;
    for (let i=0;i<8;i++) 
        {
            const geo = new SphereBufferGeometry(1, 20, 20);
            const material = createTextureMaterial(materials[i]);
            cSphere = new Mesh(geo, material);

            // now alter transformations
            const xCor = Math.cos(angle)+radius;
            const yCor = Math.sin(angle);

            radius += 2;

            cSphere.position.set(xCor, yCor, position.z);
            cSphere.scale.multiplyScalar(1/2);


            cSphere.tick = (delta) => 
                {

                    cSphere.rotation.y += delta * radians;
                }

                console.log("New Sphere position: ", cSphere.position);
                array.push(cSphere);
    
        }

    for (let i=0;i<array.length; i++) 
        {
            array[i].tick = (delta) => 
                {
                    array[i].rotation.x += delta * radians * 2;
                    array[i].rotation.y += delta * radians * 2;
                    array[i].rotation.z += delta * radians * 2;
                }
            console.log(array[i]);
        }
    return array;

}



export {createSphere};
export {CelestialObject};
export {createOrbitingPlanets};