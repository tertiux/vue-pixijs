<template>
  <div ref="pixiContainer"></div>
</template>

<script>
import * as PIXI from "pixi.js";
import spriteImage from "../assets/soft-drink.png";

export default {
  mounted() {
    // Create a Pixi.js application
    const app = new PIXI.Application({ width: 800, height: 600 });
    this.$refs.pixiContainer.appendChild(app.view);

    // Create a Pixi.js sprite
    const sprite = PIXI.Sprite.from(spriteImage);
    app.stage.addChild(sprite);
  },
};
</script>
