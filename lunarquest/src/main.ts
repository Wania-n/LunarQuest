
import Phaser from 'phaser';
import './style.css';

class LunarScene extends Phaser.Scene {
  constructor() {
    super('LunarScene');
  }

  create() {
    const width = 960;
    const height = 540;

    // Pixel art helper - visual rectangles only
    const px = (
      x: number,
      y: number,
      w: number,
      h: number,
      color: number,
      alpha = 1
    ) => {
      return this.add
        .rectangle(x, y, w, h, color, alpha)
        .setOrigin(0, 0);
    };

    // ============================
    // PIXEL SPACE BACKGROUND
    // ============================

    this.cameras.main.setBackgroundColor('#080e20');

    px(0, 0, width, height, 0x080e20);

    // Pixel stars

    // Animated pixel stars
    for (let i = 0; i < 60; i++) {
      const x = Phaser.Math.Between(10, 950);
      const y = Phaser.Math.Between(120, 260);
      const size = i % 5 === 0 ? 4 : 2;

      const star = px(x, y, size, size, 0xffffff, 0.85);

      // Gentle twinkling animation
      this.tweens.add({
        targets: star,
        alpha: 0.3,
        duration: Phaser.Math.Between(1200, 2600),
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
        delay: Phaser.Math.Between(0, 1500)
      });
    }


    // ============================
    // PIXEL MOON LANDSCAPE
    // ============================

    // Distant lunar mountains
    px(0, 310, 150, 30, 0x38445a);
    px(40, 290, 80, 20, 0x38445a);
    px(90, 280, 40, 10, 0x38445a);

    px(210, 320, 180, 20, 0x303d52);
    px(260, 300, 100, 20, 0x303d52);
    px(290, 280, 40, 20, 0x303d52);

    px(600, 315, 160, 25, 0x38445a);
    px(640, 295, 100, 20, 0x38445a);
    px(680, 280, 40, 15, 0x38445a);

    px(810, 305, 150, 35, 0x303d52);
    px(850, 285, 80, 20, 0x303d52);

    // Main lunar surface
    px(0, 340, 960, 200, 0x687589);
    px(0, 340, 960, 8, 0x8491a3);
    px(0, 348, 960, 8, 0x586577);

    // Ground texture
    for (let i = 0; i < 28; i++) {
      const x = Phaser.Math.Between(15, 940);
      const y = Phaser.Math.Between(435, 480);

      px(x, y, 12, 4, 0x536074, 0.75);
    }

    // Pixel craters
    px(28, 475, 64, 8, 0x4c596c);
    px(40, 483, 40, 4, 0x8290a1);

    px(265, 472, 52, 8, 0x4c596c);
    px(277, 480, 28, 4, 0x8290a1);

    px(610, 460, 60, 8, 0x4c596c);
    px(622, 468, 36, 4, 0x8290a1);

    px(850, 475, 68, 8, 0x4c596c);
    px(862, 483, 44, 4, 0x8290a1);

    // ============================
    // SOLAR ARRAY - PIXEL ART
    // ============================

    // Ground shadow
    px(48, 428, 232, 8, 0x455166);

    // Panel support legs
    px(102, 413, 12, 23, 0x9daec4);
    px(210, 413, 12, 23, 0x9daec4);

    // Panel outer frame
    px(48, 351, 224, 72, 0x91d4ff);
    px(52, 355, 216, 64, 0x122d59);

    // Individual pixel solar cells
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        const x = 56 + col * 26;
        const y = 359 + row * 20;

        const color =
          (row + col) % 3 === 0
            ? 0x397fc2
            : 0x245b9e;

        px(x, y, 22, 16, color);
        px(x + 2, y + 2, 8, 2, 0x69b6ef);
      }
    }

    // Metal side pieces
    px(44, 370, 4, 34, 0xc0d4e8);
    px(272, 370, 4, 34, 0xc0d4e8);

    // ============================
    // LUNAR HABITAT - PIXEL ART
    // ============================

    // Building shadow
    px(386, 409, 178, 12, 0x485568);

    // Habitat body outline
    px(382, 287, 176, 124, 0xdbe6f1);
    px(390, 295, 160, 108, 0xa6bbd0);

    // Side wall shading
    px(390, 295, 16, 108, 0x7e95ae);
    px(534, 295, 16, 108, 0x8da5bd);

    // Pixel roof
    px(398, 271, 144, 16, 0x607b9a);
    px(414, 263, 112, 8, 0x8eaccb);
    px(406, 287, 128, 8, 0x495f7b);

    // Roof highlights
    px(418, 267, 28, 4, 0xc4d6e8);
    px(454, 267, 28, 4, 0xc4d6e8);

    // Left window
    px(413, 328, 42, 36, 0x526783);
    px(417, 332, 34, 28, 0x55bde8);
    px(421, 336, 14, 6, 0xa3e5ff);
    px(433, 346, 4, 14, 0x317ba8);

    // Right window
    px(487, 328, 42, 36, 0x526783);
    px(491, 332, 34, 28, 0x55bde8);
    px(495, 336, 14, 6, 0xa3e5ff);
    px(507, 346, 4, 14, 0x317ba8);

    // Main entrance
    px(447, 365, 48, 46, 0x445773);
    px(455, 369, 32, 42, 0x233851);
    px(459, 373, 24, 34, 0x344d69);

    // Door details
    px(481, 388, 4, 8, 0xffd66d);
    px(455, 365, 32, 4, 0x8dd7ff);

    // Habitat control panel
    px(508, 383, 24, 16, 0x344b66);
    px(512, 387, 8, 4, 0x63e8a7);
    px(524, 387, 4, 4, 0xffd66d);

    // Antenna
    px(544, 253, 4, 34, 0xc3d5e6);
    px(536, 249, 20, 4, 0x8daac7);
   
    // Animated habitat antenna light
    const antennaLight = px(540, 241, 12, 8, 0xf9d578);

    this.tweens.add({
      targets: antennaLight,
      alpha: 0.25,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });


    // ============================
    // GREENHOUSE - PIXEL ART
    // ============================

    // Ground shadow
    px(681, 427, 182, 9, 0x465668);

    // Outer stepped structure
    px(710, 342, 120, 12, 0x9be5cc);
    px(696, 354, 148, 12, 0x9be5cc);
    px(686, 366, 168, 58, 0x9be5cc);

    // Glass interior
    px(714, 350, 112, 12, 0x3b897d);
    px(700, 362, 140, 12, 0x367a76);
    px(692, 374, 156, 44, 0x245d5c);

    // Glass section highlights
    px(716, 354, 28, 4, 0xb8fff2);
    px(754, 354, 28, 4, 0xb8fff2);
    px(792, 354, 28, 4, 0xb8fff2);

    // Structural supports
    px(726, 358, 6, 60, 0x8acfc1);
    px(766, 350, 6, 68, 0x8acfc1);
    px(806, 358, 6, 60, 0x8acfc1);

    // Interior soil
    px(696, 405, 148, 13, 0x705b51);
    px(696, 405, 148, 4, 0x96745d);

    // Pixel plants
    const plantXs = [714, 744, 784, 814];

    plantXs.forEach((x, i) => {
      const plantHeight = i % 2 === 0 ? 22 : 30;

      // Stem
      px(
        x + 6,
        405 - plantHeight,
        4,
        plantHeight,
        0x58c97a
      );

      // Leaves
      px(
        x - 2,
        389 - (plantHeight - 22),
        12,
        8,
        0x6ee28b
      );

      px(
        x + 8,
        381 - (plantHeight - 22),
        12,
        8,
        0x47b86b
      );

      // Top leaf
      px(
        x + 2,
        373 - (plantHeight - 22),
        12,
        8,
        0x91f0a1
      );
    });

    // Greenhouse bottom frame
    px(682, 418, 176, 10, 0x619b8d);
    px(690, 422, 160, 4, 0xb2ead5);

    // ============================
    // SMALL PIXEL ASTRONAUT
    // Decorative only
    // ============================

    // Astronaut shadow
    px(601, 435, 48, 6, 0x495668);

    // Backpack
    px(601, 383, 12, 38, 0x718cae);

    // Helmet
    px(611, 358, 28, 8, 0xe2edf9);
    px(607, 366, 36, 25, 0xe2edf9);

    // Dark visor
    px(615, 370, 24, 16, 0x2a709c);
    px(619, 373, 12, 4, 0x80d4ff);

    // Spacesuit body
    px(611, 391, 28, 30, 0xd6e2ed);
    px(615, 398, 20, 13, 0x92a8c0);

    // Suit display
    px(621, 402, 8, 5, 0x6de0bf);

    // Arms
    px(603, 394, 8, 22, 0xc4d5e5);
    px(639, 394, 8, 22, 0xc4d5e5);

    // Boots
    px(613, 421, 10, 14, 0x526c89);
    px(629, 421, 10, 14, 0x526c89);

    // ============================
    // PIXEL GAME HEADER
    // ============================

    // Header background
    px(0, 0, 960, 114, 0x111b33, 0.96);

    // Bottom header border
    px(0, 110, 960, 4, 0x385778);

    // Title decoration
    px(23, 23, 5, 32, 0x70d5ff);

    this.add.text(38, 22, 'LUNARQUEST', {
      fontFamily: 'monospace',
      fontSize: '29px',
      color: '#ffffff',
      fontStyle: 'bold'
    });

    this.add.text(
      38,
      67,
      'JUNIOR ASTRONAUT MISSION TRAINER',
      {
        fontFamily: 'monospace',
        fontSize: '13px',
        color: '#89b8d7'
      }
    );

    // Resource HUD box
    px(594, 14, 338, 91, 0x22334c);
    px(598, 18, 330, 83, 0x111c32);

    // HUD border accents
    px(594, 14, 338, 3, 0x5e91b5);
    px(594, 102, 338, 3, 0x5e91b5);

    // Original resource indicators
    this.add.text(615, 24, 'OXYGEN: 100%', {
      fontFamily: 'monospace',
      fontSize: '17px',
      color: '#78d9ff'
    });

    this.add.text(615, 51, 'ENERGY: 100%', {
      fontFamily: 'monospace',
      fontSize: '17px',
      color: '#ffe17a'
    });

    this.add.text(615, 78, 'SAFETY: 100%', {
      fontFamily: 'monospace',
      fontSize: '17px',
      color: '#88e8a3'
    });

    // ============================
    // FACILITY LABELS
    // ============================

    // Solar label plate
    px(72, 445, 176, 30, 0x18283f);
    px(72, 445, 176, 3, 0x65bdff);

    this.add.text(160, 453, 'SOLAR ARRAY', {
      fontFamily: 'monospace',
      fontSize: '15px',
      fontStyle: 'bold',
      color: '#ffffff'
    }).setOrigin(0.5, 0);

    // Habitat label plate
    px(396, 445, 148, 30, 0x18283f);
    px(396, 445, 148, 3, 0x65bdff);

    this.add.text(470, 453, 'HABITAT', {
      fontFamily: 'monospace',
      fontSize: '15px',
      fontStyle: 'bold',
      color: '#ffffff'
    }).setOrigin(0.5, 0);

    // Greenhouse label plate
    px(689, 445, 162, 30, 0x18283f);
    px(689, 445, 162, 3, 0x75dfac);

    this.add.text(770, 453, 'GREENHOUSE', {
      fontFamily: 'monospace',
      fontSize: '15px',
      fontStyle: 'bold',
      color: '#ffffff'
    }).setOrigin(0.5, 0);

    // ============================
    // MISSION STATUS
    // ============================

    // Bottom status panel
    px(140, 488, 680, 42, 0x101e35);
    px(140, 488, 680, 3, 0x579bc7);
    px(140, 527, 680, 3, 0x579bc7);

    this.add.text(
      480,
      507,
      'MISSION DAY 1 - BASE ONLINE',
      {
        fontFamily: 'monospace',
        fontSize: '19px',
        color: '#b2e7ff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5);

    // ============================
    // INTERACTIVE FACILITY PANEL
    // ============================

    // Panel shadow and body
    px(154, 136, 660, 76, 0x050d1c);
    px(150, 132, 660, 76, 0x1b2d4b, 0.95);

    // Pixel borders
    px(150, 132, 660, 4, 0x5ca8dd);
    px(150, 204, 660, 4, 0x5ca8dd);
    px(150, 132, 4, 76, 0x5ca8dd);
    px(806, 132, 4, 76, 0x5ca8dd);

    // Corner highlights
    px(150, 132, 20, 6, 0x9de9ff);
    px(790, 132, 20, 6, 0x9de9ff);
    px(150, 202, 20, 6, 0x9de9ff);
    px(790, 202, 20, 6, 0x9de9ff);

    const facilityInfo = this.add.text(
      480,
      170,
      'CLICK A FACILITY TO EXPLORE',
      {
        fontFamily: 'monospace',
        fontSize: '17px',
        color: '#ffffff',
        align: 'center',
        wordWrap: { width: 620 }
      }
    ).setOrigin(0.5);

    // ============================
    // CLICKABLE FACILITIES
    // Original logic + hover effects
    // ============================

    const facilities = [
      {
        x: 160,
        y: 390,
        width: 230,
        height: 100,
        message:
          'SOLAR ARRAY: Generates electricity for the lunar base.'
      },
      {
        x: 470,
        y: 340,
        width: 220,
        height: 150,
        message:
          'HABITAT: Provides shelter and living space for astronauts.'
      },
      {
        x: 770,
        y: 390,
        width: 180,
        height: 110,
        message:
          'GREENHOUSE: Grows food and supports oxygen production.'
      }
    ];

    facilities.forEach((facility) => {

      // Pixel-art hover highlight
      const highlight = this.add.rectangle(
        facility.x,
        facility.y,
        facility.width,
        facility.height,
        0xffffff,
        0
      );

      // Blue pixel-style outline
      highlight.setStrokeStyle(3, 0x78d9ff);
      highlight.setVisible(false);

      // Original invisible clickable zone
      const zone = this.add.zone(
        facility.x,
        facility.y,
        facility.width,
        facility.height
      );

      zone.setInteractive({
        useHandCursor: true
      });

      // Highlight facility on mouse hover
      zone.on('pointerover', () => {
        highlight.setVisible(true);
      });

      // Remove highlight when mouse leaves
      zone.on('pointerout', () => {
        highlight.setVisible(false);
      });

      // Original click functionality
      zone.on('pointerdown', () => {
        facilityInfo.setText(facility.message);
      });

    });
  }
}

// ============================
// GAME CONFIGURATION
// Original settings retained
// ============================

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
