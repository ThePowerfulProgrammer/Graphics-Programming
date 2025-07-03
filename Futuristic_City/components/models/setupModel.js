import {AnimationMixer} from "https://cdn.skypack.dev/three@0.132.2";

function setUpModel(data) 
{
    const model = data.scene.children[0];
    const clip = data.animations[0];

    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.play();

    // hey a monkey method :) 
    model.tick = (delta) => {
        mixer.update(delta);

        if (model.position.z < 8) 
            {
                model.position.z += 0.05;
            } 
    
        if (model.rotation.y > -1.57 && model.position.z > 8) 
            {
                model.rotation.y -= 0.03;
            }

        if (model.rotation.y <= -1.57 && model.position.z > 8 && model.position.x > -9) 
            {
                model.position.x -= 0.05;
            }
                                                    
    
        

    }

    return model;
}

function setUpModelNoAnimation(data) 
{
    const model = data.scene.children[0]
    return model;

}

export {setUpModel, setUpModelNoAnimation};
