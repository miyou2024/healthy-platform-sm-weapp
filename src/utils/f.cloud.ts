import { init } from '@cloudbase/wx-cloud-client-sdk'
import Taro from '@tarojs/taro'

export class FunctionCloudBase {

  wxAppInstance: Taro.Cloud;
  wxCloudBaseInstance: Taro.Cloud;

  appId: string;
  appEnv: string;
  isTarget: boolean = false;

  constructor(
    appId: string,
    appEnv: string,
    isTarget: boolean = false,
  ) {
    console.log(`appId-appEnv-isTarget`, {appId, appEnv, isTarget});
    this.appId = appId;
    this.appEnv = appEnv;
    this.isTarget = isTarget;
  }

  async initFunctionInstance() {
    if (this.isTarget) {
      this.wxAppInstance = new Taro.cloud.Cloud({
        resourceAppid: this.appId,
        resourceEnv: this.appEnv,
      });
      await this.wxAppInstance.init();
    } else {
      Taro.cloud.init({
        env: this.appEnv,
      });
      this.wxAppInstance = Taro.cloud;
    }
  }

  async initCloudBaseInstance() {
    Taro.cloud.init({
      env: this.appEnv,
    });
    if (this.isTarget) {
      // @ts-ignore
      this.wxCloudBaseInstance = init(this.wxAppInstance);
    } else {
      // @ts-ignore
      this.wxCloudBaseInstance = init(Taro.cloud);
    }
  }
}
