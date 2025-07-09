import { DirectionalLight, PointLight, AmbientLight, HemisphereLight, SpotLight } from "https://cdn.skypack.dev/three@0.132.2";

/*
    When we render objects, we must understand that we are trying to mimic the properties of real life.
    In real life, light interacts with objects.
    While we can use materials that do not require the presence of light, those materials are limiting in what we can achieve with them.

    Thus we work with materials that require light to be present so that we can see the material in our world.

    Lights in 3JS Mimic real life light types.

    Directional Light: Mimics sunlight — parallel rays, uniform direction and intensity : Direction matters : Casts shadows : Use Case: Outdoor light eg: Sun
    Point Light: : Mimics light bulbs : Emits light in all directions from a point — like a bare light bulb	: Has a Position DUH : Casts shadows : Use Case: Lamps, Fireballs, Street lamps
    Ambient Light: Adds uniform light to all objects - no direction/no shadow : Use case: Basic scene light, place anywhere it illuminates EVERYTHING! I guess if you want to illuminate everything sure
    Hemisphere Light: Blends sky color from above and ground color from below: No position needed: Use Case: Natural outdoor ambience, can be used to create a sky illusion
    Spot Light: Emits a Cone of light in a specific direction: Like a flashlight: Has Position and angle: Casts Shadow: Use Case: Flash light, spot light, shine a cone of light onto an object

*/

function createDirectionalLight() 
{
    const directionalLight = new DirectionalLight("white", 0);
    directionalLight.position.set(0,10,10);
    directionalLight.castShadow = true;
    return directionalLight;
}


function createPointLight() 
{
    const pointLight = new PointLight("#0062ff", 100);
    pointLight.position.set(0,20,0);
    pointLight.castShadow = true;
    return pointLight;
}

function createRoadLights() 
{
    const pointLightOne = new PointLight("#2b1035", 100);
    const pointLightTwo = new PointLight("#2b1035", 100);

    pointLightOne.castShadow = true;
    pointLightTwo.castShadow = true;

    pointLightOne.position.set(12,3,-10);
    pointLightTwo.position.set(12,3,-4);

    return {pointLightOne, pointLightTwo};
}

// #2b1035

export {createDirectionalLight};
export {createPointLight};
export {createRoadLights};