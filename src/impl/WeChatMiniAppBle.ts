import BaseBle from "./BaseBle";
declare const wx: any

export default class WeChatMiniAppBle extends BaseBle {
    openBluetoothAdapter({mode = 'central'} = {}) {
        return new Promise((resolve, reject) => {
            wx['openBluetoothAdapter']({
                mode, // 主从设备(iOS Only)
                success: resolve,
                fail: reject
            })
        });
    }
}