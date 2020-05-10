import BaseBle from "./BaseBle";

declare const my: any

export default class AliMiniAppBle extends BaseBle {
    openBluetoothAdapter({autoClose = true} = {}) {
        return new Promise((resolve, reject) => {
            my['openBluetoothAdapter']({
                autoClose, // 离开页面自动断开(Android Only)
                success: ({isSupportBLE}: { isSupportBLE: boolean }) => {
                    if (isSupportBLE) {
                        resolve(isSupportBLE)
                    } else {
                        reject({code: 10001, message: '设备不支持蓝牙'})
                    }
                },
                fail: ({error, errorMessage}: { error: any, errorMessage: string }) => {
                    reject({code: error, message: errorMessage})
                }
            });
        });
    }
}