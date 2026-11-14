
import Phaser from 'phaser';
import './style.css';

class LunarScene extends Phaser.Scene {
  constructor() {
    super('LunarScene');
  }

  create() {
    const width = 960;
    const height = 540;

    // Space background
    this.cameras.main.setBackgroundColor('#101a30');

    // Moon surface
    this.add.rectangle(480, 440, 960, 200, 0x667080);

    // Game heading
    this.add.text(30, 25, 'LUNARQUEST', {
      fontSize: '30px',
      color: '#ffffff',
      fontStyle: 'bold'
    });

    this.add.text(30, 65, 'Junior Astronaut Mission Trainer', {
      fontSize: '16px',
      color: '#a8c9e8'
    });

    // Resource indicators (initial sample values)
    this.add.text(600, 30, 'OXYGEN: 100%', {
      fontSize: '18px',
      color: '#78d9ff'
    });

    this.add.text(600, 60, 'ENERGY: 100%', {
      fontSize: '18px',
      color: '#ffe17a'
    });

    this.add.text(600, 90, 'SAFETY: 100%', {
      fontSize: '18px',
      color: '#88e8a3'
    });

    // Main lunar habitat
    this.add.rectangle(470, 340, 220, 150, 0xb7c6d5);
    this.add.rectangle(470, 270, 160, 35, 0x748da8);
    this.add.rectangle(470, 375, 60, 80, 0x34465f);

    // Solar panels
    this.add.rectangle(160, 390, 220, 65, 0x23588e);
    this.add.rectangle(160, 390, 220, 65)
      .setStrokeStyle(3, 0x85c5ff);

    // Greenhouse
    this.add.ellipse(770, 390, 180, 110, 0x518b78);
    this.add.ellipse(770, 390, 180, 110)
      .setStrokeStyle(4, 0xb7f0ce);

    // Facility labels
    this.add.text(95, 455, 'SOLAR ARRAY', {
      color: '#ffffff'
    });

    this.add.text(420, 455, 'HABITAT', {
      color: '#ffffff'
    });

    this.add.text(715, 455, 'GREENHOUSE', {
      color: '#ffffff'
    });

    this.add.text(300, 500, 'MISSION DAY 1 - BASE ONLINE', {
      fontSize: '20px',
      color: '#ffffff'
    });
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  parent: 'app',
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [LunarScene]
});
