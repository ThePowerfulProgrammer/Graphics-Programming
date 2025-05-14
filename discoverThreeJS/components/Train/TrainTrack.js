import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";


import { createMeshes } from "./meshes.js";


class TrainTrack extends Group 
{
    constructor() 
    {
        super(); // duh call parent

        this.meshes = createMeshes();

        this.leftTrainTrack = this.meshes.trainTrack; // the left track
        this.rightTrainTrack = this.meshes.trainTrackTwo; // the right track

        this.leftTracks = [];
        this.rightTracks = []

        let track = null;
        let trackLength = 4.5;
        

        for (let i=0;i<5;i++) 
            {
                track = this.leftTrainTrack.clone();
                track.position.x -= trackLength;
                trackLength += 4.5;                
                this.leftTracks[i] = track;
            }

        trackLength = 4.5;
        for (let i=0; i<5;i++) 
            {
                track = this.rightTrainTrack.clone();
                track.position.x -= trackLength;
                trackLength += 4.5;
                this.rightTracks[i] = track;
            }





        // add everything to the group : Everything here can be displayed
        this.portalLeft = this.meshes.circleMesh;
        this.portalRight = this.portalLeft.clone()
        this.portalRight.position.x = 2.2;

        console.log("Left Portal Pos X: ", this.portalLeft.position.x);
        console.log("Right Portal Pos X: ", this.portalRight.position.x);

        this.add(
            this.leftTrainTrack,
            this.meshes.trainTrackTwo,
            this.portalLeft,
            this.portalRight,            
        );

        this.leftTracks.forEach( (track) => {
            this.add(track);
        });

        this.rightTracks.forEach( (track) => 
            {
                this.add(track);
            })


        // Defining a variable called trainTrack ie: attribute
        this.trainTrack  = 
        (
            this.meshes.trainTrack,
            this.meshes.trainTrackTwo
        );

        // no need for ticking a trainTrack : Best to remain static
    }
}

export { TrainTrack };