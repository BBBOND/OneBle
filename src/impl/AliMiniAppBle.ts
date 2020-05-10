import BaseBle from "./BaseBle";

declare const my: any
type AliMiniError = {
    error: number,
    errorMessage: string
}

type Device = {
    name: string // 蓝牙设备名称，某些设备可能没有。
    deviceName: string // (兼容旧版本)值与 name 一致。
    localName: string // 广播设备名称。
    deviceId: string // 设备 ID。
    RSSI: number // 设备信号强度。
    advertisData: string // Hex String设备的广播内容。
}

export default class AliMiniAppBle extends BaseBle {
    canIUse(api: string) {
        return my.canIUse(api)
    }

    openBluetoothAdapter({autoClose = true} = {}) {
        return new Promise((resolve, reject) => {
            if (this.canIUse('openBluetoothAdapter')) {
                my['openBluetoothAdapter']({
                    autoClose, // 离开页面自动断开(Android Only)
                    success: ({isSupportBLE}: { isSupportBLE: boolean }) => {
                        if (isSupportBLE) {
                            resolve(isSupportBLE)
                        } else {
                            reject({code: 10001, message: '设备不支持蓝牙'})
                        }
                    },
                    fail: ({error, errorMessage}: AliMiniError) => {
                        reject({code: error, message: errorMessage})
                    }
                })
            } else {
                reject({code: -1, message: 'API不可使用'})
            }
        })
    }

    onBluetoothAdapterStateChange(callback: Function) {
        if (this.canIUse('onBluetoothAdapterStateChange')) {
            my['onBluetoothAdapterStateChange'](({error, available, discovering}: { error: AliMiniError, available: boolean, discovering: boolean }) => {
                if (error) {
                    callback && callback({code: error.error, message: error.errorMessage})
                } else {
                    callback && callback(undefined, {available, discovering})
                }
            })
        } else {
            callback && callback({code: -1, message: 'API不可使用'})
        }
    }

    offBluetoothAdapterStateChange(callback: Function) {
        if (this.canIUse('offBluetoothAdapterStateChange')) {
            my['offBluetoothAdapterStateChange'](callback)
        }
    }

    onBluetoothDeviceFound(callback: Function) {
        if (this.canIUse('onBluetoothDeviceFound')) {
            my['onBluetoothDeviceFound']({
                success: ({devices}: { devices: Device[] }) => {
                    callback && callback(undefined, devices)
                },
                fail: (error: AliMiniError) => {
                    callback && callback({code: error.error, message: error.errorMessage})
                }
            })
        } else {
            callback && callback({code: -1, message: 'API不可使用'})
        }
    }

    offBLEConnectionStateChange(callback: Function) {
        if (this.canIUse('offBLEConnectionStateChange')) {
            my['offBLEConnectionStateChange'](callback)
        }
    }
}