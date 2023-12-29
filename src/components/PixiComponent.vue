<template>
  <div id="app">
    <canvas id="limboCanvas"></canvas>
    <button @click="startGame">Start</button>
    <button @click="cashOut">Cash Out</button>
    <div>Bet Amount: <input type="number" v-model.number="betAmount"></div>
    <div>Multiplier: {{ multiplier }}</div>
  </div>
</template>


<script>
import * as PIXI from 'pixi.js';

export default {
  data() {
    return {
      app: null,
      stage: null,
      renderer: null,
      line: null,
      betAmount: 10,
      multiplier: 1,
      gameStarted: false,
      intervalId: null,
      crashProbability: 0.1,
    };
  },
  mounted() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      transparent: false,
    });
    this.stage = this.app.stage;
    this.renderer = this.app.renderer;
    document.getElementById('limboCanvas').appendChild(this.renderer.view);

    this.resetLine(); // Initialize the line
  },
  methods: {
    resetLine() {
      this.line = new PIXI.Graphics();
      this.line.lineStyle(2, 0x00ff00);
      this.line.moveTo(50, 400);
      this.line.endFill(); // Ensure proper rendering
      this.stage.addChild(this.line);
    },
    startGame() {
      if (this.betAmount <= 0) {
        alert('Invalid bet amount. Please enter a positive value.');
        return;
      }

      if (!this.gameStarted && window.confirm('Start game with a bet of ' + this.betAmount + '?')) {
        this.gameStarted = true;
        this.intervalId = setInterval(() => {
          this.multiplier += 0.01 + Math.random() * 0.02;
          this.line.lineTo(50, 400 - this.multiplier * 5);
          this.renderer.render(this.stage);

          if (Math.random() < this.crashProbability) {
            this.crash();
          }
        }, 10);
      }
    },
    cashOut() {
      if (this.gameStarted) {
        clearInterval(this.intervalId);
        const winnings = this.multiplier * this.betAmount;
        alert('You cashed out with ' + winnings);
        this.resetGame();
      } else {
        alert('Game not started yet.');
      }
    },
    crash() {
      clearInterval(this.intervalId);
      alert('Crash! You lost your bet.');
      this.resetGame();
    },
    resetGame() {
      this.gameStarted = false;
      this.multiplier = 1;
      this.resetLine(); // Reset the line
    },
  },
};
</script>
