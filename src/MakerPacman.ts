import MakerBase, { MakerOptions } from '@electron-forge/maker-base';
import { ForgePlatform } from '@electron-forge/shared-types';
import { buildForge } from 'app-builder-lib';

export default class MakerPacman extends MakerBase<any> {
  public name: string = 'pacman';
  public defaultPlatforms: ForgePlatform[] = ['linux'];

  isSupportedOnCurrentPlatform(): boolean {
    return process.platform === 'linux';
  }

  async make(options: MakerOptions): Promise<string[]> {
    return buildForge(options, { linux: [`pacman:${options.targetArch}`] });
  }
}
