import PhaserLogo from '../components/phaserLogo'
import FpsText from '../components/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)
  }

  update() {
    this.fpsText.update(this)
  }
}
