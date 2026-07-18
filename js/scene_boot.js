class SceneBoot extends Phaser.Scene {
    constructor() {
        super('SceneBoot');
    }

    create() {
        this.generateTextures();
        this.scene.start('SceneMenu');
    }

    generateTextures() {
        this.createPlayerTexture('player', 28, 36);
        this.createPlayerTexture('player_run1', 28, 36, true);
        this.createPlayerTexture('player_run2', 28, 36, true, 2);
        this.createPlayerTexture('player_jump', 28, 36, false, 0, true);

        this.createPlatformTexture('platform', TILE_SIZE, TILE_SIZE);
        this.createGroundTexture('ground', TILE_SIZE, TILE_SIZE);
        this.createCoinTexture('coin', 20, 20);
        this.createCrystalTexture('crystal', 24, 28);
        this.createEnemyTexture('enemy', 30, 28);
        this.createSpikeTexture('spike', TILE_SIZE, 20);
        this.createParticleTexture('particle', 6, 6);
        this.createDoorTexture('door', 40, 56);
        this.createBackgroundTexture('bg', GAME_WIDTH, GAME_HEIGHT);
        this.createCloudTexture('cloud', 80, 30);
        this.createHeartTexture('heart', 20, 18);
        this.createStarTexture('star', 16, 16);
    }

    createPlayerTexture(key, w, h, isRunning, runFrame, isJumping) {
        const g = this.add.graphics();
        g.clear();

        if (isJumping) {
            g.fillStyle(0x00d4ff, 1);
            g.fillRoundedRect(2, 8, w - 4, h - 12, 5);
            g.fillStyle(0x0099cc, 1);
            g.fillRoundedRect(2, 8, w - 4, 6, 3);
            g.fillStyle(0xffffff, 1);
            g.fillCircle(w * 0.35, h * 0.3, 3);
            g.fillCircle(w * 0.65, h * 0.3, 3);
            g.fillStyle(0x003355, 1);
            g.fillCircle(w * 0.35, h * 0.3, 1.5);
            g.fillCircle(w * 0.65, h * 0.3, 1.5);
            g.fillStyle(0x00d4ff, 1);
            g.fillRect(4, h - 4, 8, 4);
            g.fillRect(w - 12, h - 4, 8, 4);
        } else if (isRunning) {
            const offset = runFrame === 2 ? -2 : 2;
            g.fillStyle(0x00d4ff, 1);
            g.fillRoundedRect(2, 8, w - 4, h - 12, 5);
            g.fillStyle(0x0099cc, 1);
            g.fillRoundedRect(2, 8, w - 4, 6, 3);
            g.fillStyle(0xffffff, 1);
            g.fillCircle(w * 0.35, h * 0.3, 3);
            g.fillCircle(w * 0.65, h * 0.3, 3);
            g.fillStyle(0x003355, 1);
            g.fillCircle(w * 0.35, h * 0.3, 1.5);
            g.fillCircle(w * 0.65, h * 0.3, 1.5);
            g.fillStyle(0x00d4ff, 1);
            if (runFrame === 2) {
                g.fillRect(4, h - 6 + offset, 8, 4);
                g.fillRect(w - 12, h - 4 - offset, 8, 4);
            } else {
                g.fillRect(4, h - 4 - offset, 8, 4);
                g.fillRect(w - 12, h - 6 + offset, 8, 4);
            }
        } else {
            g.fillStyle(0x00d4ff, 1);
            g.fillRoundedRect(2, 8, w - 4, h - 12, 5);
            g.fillStyle(0x0099cc, 1);
            g.fillRoundedRect(2, 8, w - 4, 6, 3);
            g.fillStyle(0xffffff, 1);
            g.fillCircle(w * 0.35, h * 0.3, 3);
            g.fillCircle(w * 0.65, h * 0.3, 3);
            g.fillStyle(0x003355, 1);
            g.fillCircle(w * 0.35, h * 0.3, 1.5);
            g.fillCircle(w * 0.65, h * 0.3, 1.5);
            g.fillStyle(0x00d4ff, 1);
            g.fillRect(6, h - 4, 8, 4);
            g.fillRect(w - 14, h - 4, 8, 4);
        }

        g.generateTexture(key, w, h);
        g.destroy();
    }

    createPlatformTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0x3a2a5a, 1);
        g.fillRoundedRect(0, 0, w, h, 4);
        g.fillStyle(0x5a3a8a, 1);
        g.fillRoundedRect(0, 0, w, 6, 4);
        g.fillStyle(0x2a1a4a, 1);
        g.fillRoundedRect(0, h - 4, w, 4, 2);
        g.fillStyle(0x6a4aaa, 0.5);
        g.fillCircle(w * 0.25, h * 0.5, 2);
        g.fillCircle(w * 0.75, h * 0.6, 2);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createGroundTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0x2a1a4a, 1);
        g.fillRect(0, 0, w, h);
        g.fillStyle(0x4a2a7a, 1);
        g.fillRect(0, 0, w, 8);
        g.fillStyle(0x1a0a3a, 1);
        g.fillRect(0, h - 4, w, 4);
        g.fillStyle(0x6a3aaa, 0.4);
        g.fillCircle(w * 0.3, h * 0.4, 3);
        g.fillCircle(w * 0.7, h * 0.6, 2);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createCoinTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0xffd700, 1);
        g.fillCircle(w / 2, h / 2, w / 2 - 1);
        g.fillStyle(0xffaa00, 1);
        g.fillCircle(w / 2, h / 2, w / 2 - 3);
        g.fillStyle(0xffe44d, 1);
        g.fillRect(w / 2 - 2, h / 2 - 5, 4, 10);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createCrystalTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0x00ffaa, 0.9);
        g.beginPath();
        g.moveTo(w / 2, 0);
        g.lineTo(w, h * 0.35);
        g.lineTo(w * 0.8, h);
        g.lineTo(w * 0.2, h);
        g.lineTo(0, h * 0.35);
        g.closePath();
        g.fillPath();
        g.fillStyle(0x66ffcc, 0.8);
        g.beginPath();
        g.moveTo(w / 2, 4);
        g.lineTo(w * 0.8, h * 0.35);
        g.lineTo(w * 0.6, h * 0.8);
        g.lineTo(w * 0.4, h * 0.8);
        g.lineTo(w * 0.2, h * 0.35);
        g.closePath();
        g.fillPath();
        g.fillStyle(0xffffff, 0.6);
        g.fillRect(w / 2 - 1, 4, 2, h - 8);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createEnemyTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0xff3366, 1);
        g.fillRoundedRect(0, 4, w, h - 4, 8);
        g.fillStyle(0xcc1144, 1);
        g.fillRoundedRect(0, h - 8, w, 4, 4);
        g.fillStyle(0xffffff, 1);
        g.fillCircle(w * 0.3, h * 0.4, 5);
        g.fillCircle(w * 0.7, h * 0.4, 5);
        g.fillStyle(0x000000, 1);
        g.fillCircle(w * 0.3, h * 0.4, 2.5);
        g.fillCircle(w * 0.7, h * 0.4, 2.5);
        g.fillStyle(0xffffff, 1);
        g.fillRect(w * 0.2, h * 0.7, 4, 2);
        g.fillRect(w * 0.35, h * 0.7, 4, 2);
        g.fillRect(w * 0.55, h * 0.7, 4, 2);
        g.fillRect(w * 0.7, h * 0.7, 4, 2);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createSpikeTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0x888899, 1);
        const spikeWidth = w / 3;
        for (let i = 0; i < 3; i++) {
            g.beginPath();
            g.moveTo(i * spikeWidth, h);
            g.lineTo(i * spikeWidth + spikeWidth / 2, 0);
            g.lineTo((i + 1) * spikeWidth, h);
            g.closePath();
            g.fillPath();
        }
        g.fillStyle(0xccccdd, 0.6);
        for (let i = 0; i < 3; i++) {
            g.beginPath();
            g.moveTo(i * spikeWidth + 2, h);
            g.lineTo(i * spikeWidth + spikeWidth / 2, 4);
            g.lineTo(i * spikeWidth + spikeWidth / 2, h);
            g.closePath();
            g.fillPath();
        }
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createParticleTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0xffffff, 1);
        g.fillCircle(w / 2, h / 2, w / 2);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createDoorTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0x4a2a1a, 1);
        g.fillRoundedRect(0, 0, w, h, 6);
        g.fillStyle(0x6a4a2a, 1);
        g.fillRoundedRect(4, 4, w - 8, h - 8, 4);
        g.fillStyle(0xffd700, 1);
        g.fillCircle(w * 0.75, h * 0.5, 4);
        g.fillStyle(0x8a5a3a, 0.5);
        g.fillRect(w * 0.2, h * 0.2, 2, h * 0.6);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createBackgroundTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        const gradient = this.add.graphics();
        for (let y = 0; y < h; y += 2) {
            const ratio = y / h;
            const r = Math.floor(10 + ratio * 20);
            const gn = Math.floor(10 + ratio * 15);
            const b = Math.floor(26 + ratio * 30);
            g.fillStyle(Phaser.Display.Color.GetColor(r, gn, b), 1);
            g.fillRect(0, y, w, 2);
        }
        g.fillStyle(0x1a0a3a, 0.3);
        for (let i = 0; i < 30; i++) {
            const sx = (i * 37 + 13) % w;
            const sy = (i * 23 + 7) % (h * 0.6);
            g.fillCircle(sx, sy, 1);
        }
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createCloudTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0x3a3a6a, 0.4);
        g.fillCircle(w * 0.2, h * 0.6, h * 0.5);
        g.fillCircle(w * 0.4, h * 0.4, h * 0.55);
        g.fillCircle(w * 0.6, h * 0.5, h * 0.45);
        g.fillCircle(w * 0.8, h * 0.6, h * 0.4);
        g.fillRect(w * 0.15, h * 0.5, w * 0.7, h * 0.3);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createHeartTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0xff3366, 1);
        g.beginPath();
        g.moveTo(w / 2, h);
        g.lineTo(0, h * 0.3);
        g.lineTo(w * 0.15, 0);
        g.lineTo(w / 2, h * 0.3);
        g.lineTo(w * 0.85, 0);
        g.lineTo(w, h * 0.3);
        g.closePath();
        g.fillPath();
        g.fillStyle(0xff6699, 0.6);
        g.fillCircle(w * 0.3, h * 0.3, 2);
        g.generateTexture(key, w, h);
        g.destroy();
    }

    createStarTexture(key, w, h) {
        const g = this.add.graphics();
        g.clear();
        g.fillStyle(0xffe44d, 1);
        const cx = w / 2;
        const cy = h / 2;
        const outerR = w / 2;
        const innerR = w / 4;
        g.beginPath();
        for (let i = 0; i < 10; i++) {
            const angle = (Math.PI / 5) * i - Math.PI / 2;
            const r = i % 2 === 0 ? outerR : innerR;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            if (i === 0) g.moveTo(x, y);
            else g.lineTo(x, y);
        }
        g.closePath();
        g.fillPath();
        g.generateTexture(key, w, h);
        g.destroy();
    }
}
