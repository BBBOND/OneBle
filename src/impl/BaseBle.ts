export default class BaseBle {
    notImplement() {
        if (arguments.length > 0 && typeof arguments[0] === 'function') {
            arguments[0]({code: -1, message: 'API未实现'});
        } else {
            return new Promise((reject) => {
                reject({code: -1, message: 'API未实现'});
            });
        }
    }

    openBluetoothAdapter() {
        this.notImplement();
    }

    onBluetoothAdapterStateChange() {
        this.notImplement();
    }

    offBluetoothAdapterStateChange() {
        this.notImplement();
    }

    onBluetoothDeviceFound() {
        this.notImplement();
    }

    offBluetoothDeviceFound() {
        this.notImplement();
    }

    onBLEConnectionStateChange() {
        this.notImplement();
    }

    offBLEConnectionStateChange() {
        this.notImplement();
    }

    startBluetoothDevicesDiscovery() {
        this.notImplement();
    }

    connectBLEDevice() {
        this.notImplement();
    }

    stopBluetoothDevicesDiscovery() {
        this.notImplement();
    }

    getBLEDeviceServices() {
        this.notImplement();
    }

    getBLEDeviceCharacteristics() {
        this.notImplement();
    }

    onBLECharacteristicValueChange() {
        this.notImplement();
    }

    offBLECharacteristicValueChange() {
        this.notImplement();
    }

    notifyBLECharacteristicValueChange() {
        this.notImplement();
    }

    writeBLECharacteristicValue() {
        this.notImplement();
    }

    readBLECharacteristicValue() {
        this.notImplement();
    }

    disconnectBLEDevice() {
        this.notImplement();
    }

    closeBluetoothAdapter() {
        this.notImplement();
    }

    getBluetoothAdapterState() {
        this.notImplement();
    }

    getConnectedBluetoothDevices() {
        this.notImplement();
    }

    getBluetoothDevices() {
        this.notImplement();
    }

    setBLEMTU() {
        this.notImplement();
    }

    getBLEDeviceRSSI() {
        this.notImplement();
    }
}