import * as PIXI from "pixi.js";
import { Game } from "./game";
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"


type AssetFile = { name: string; url: string };

export class Assets extends PIXI.Loader {
  private assets: AssetFile[] = [];

  constructor(game: Game) {
    super();
    console.log('super')

    this.assets = [
      
      { name: "birdJson", url: "bird.json" },
      {name: "waterImage", url: waterImage}
      
    ];

    this.assets.forEach((asset) => {
      // Add to loader
      console.log('asset')
      this.add(asset.name, asset.url);
    });

    this.load(() => game.loadCompleted());
  }
}
