import * as PIXI from 'pixi.js'

import { Assets } from "./assets";
import { Bird } from "./bird";



export class Game{
    pixi: PIXI.Application;
    loader: PIXI.Loader;
    bird: Bird;

    screenWidth: number = 1280;
    screenHeight: number = 700;

  constructor(){
    this.pixi = new PIXI.Application({ width: 1280, height: 720 })
        document.body.appendChild(this.pixi.view)
    

    this.loader = new PIXI.Loader();
    let assets = new Assets(this);
    this.loader = assets;

  }

  loadCompleted() {
    console.log("Load")
    const background = new PIXI.Sprite(this.loader.resources["waterImage"].texture!,);
    this.pixi.stage.addChild(background);

    //in frames komen de images te staan die de enemy animate
  

    let birdFrames = this.createBirdFrames();

    this.spawnObjects(birdFrames);
    this.pixi.ticker.add((delta) => this.update(delta));
  }
  spawnObjects(birdFrames: PIXI.Texture[]) {
    

    // nieuwe bird
    this.bird = new Bird(this, birdFrames);

;
  }
  createBirdFrames() {
    let frames: PIXI.Texture[] = [];

    for (let i = 1; i <= 4; i++) {
      const texture = PIXI.Texture.from(`birdSprite${i}.png`);
      frames.push(texture);
    }
    return frames;
  }
  update(delta: number) {
    if (this.bird) {
      this.bird.update(delta);
    }
  }

}
new Game()


