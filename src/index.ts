import {ENV} from './utils/env';
import BaseBle from './impl/BaseBle';

const PROXY_MAP: any = {};

/**
 * 注册自定义实现
 * @param env
 * @param proxy
 */
export const registerProxy = (env: string, proxy: any) => {
    PROXY_MAP[env] = proxy
};

const getProxy = () => {
    return PROXY_MAP[ENV] || new BaseBle();
};

/**
 * 打开蓝牙适配器
 * 支持微信小程序、阿里小程序、weex
 * @param autoClose boolean 关闭页面后自动断开离开页面自动断开 (Android Ali Only)
 * @param mode string 主从设备切换(iOS Wechat Only)
 */
export const openBluetoothAdapter = ({autoClose = true, mode = 'central'} = {}) => getProxy().openBluetoothAdapter({autoClose, mode});

/**
 * 关闭蓝牙适配器
 */
export const closeBluetoothAdapter = () => getProxy().closeBluetoothAdapter();

/**
 * 蓝牙适配器状态监听
 */
export const onBluetoothAdapterStateChange = (callback: Function) => getProxy().onBluetoothAdapterStateChange(callback)
/**
 * 注销蓝牙适配器状态监听
 */
export const offBluetoothAdapterStateChange = () => getProxy().offBluetoothAdapterStateChange()

/**
 * 蓝牙发现事件监听
 */
export const onBluetoothDeviceFound = (callback: Function) => getProxy().onBluetoothDeviceFound(callback)
/**
 * 注销蓝牙发现事件监听
 */
export const offBluetoothDeviceFound = () => getProxy().offBluetoothDeviceFound()

/**
 * 蓝牙连接状态事件监听
 */
export const onBLEConnectionStateChange = (callback: Function) => getProxy().onBLEConnectionStateChange(callback)
/**
 * 注销蓝牙连接状态事件监听
 */
export const offBLEConnectionStateChange = () => getProxy().offBLEConnectionStateChange()

/**
 * 搜索设备
 * @param params
 */
export const startBluetoothDevicesDiscovery = (params: { services: string[], allowDuplicatesKey: boolean, interval: number }) => getProxy().startBluetoothDevicesDiscovery(params)
/**
 * 停止搜索设备
 */
export const stopBluetoothDevicesDiscovery = () => getProxy().stopBluetoothDevicesDiscovery()

/**
 * 查找设备并连接
 * @param params
 */
export const connectBLEDevice = (params: { deviceId: string, timeout: number }) => getProxy().connectBLEDevice(params)
/**
 * 断开连接
 * @param params
 */
export const disconnectBLEDevice = (params: { deviceId: string }) => getProxy().disconnectBLEDevice(params)

/**
 * 获取蓝牙服务
 * @param params
 */
export const getBLEDeviceServices = (params: { deviceId: string }) => getProxy().getBLEDeviceServices(params)
/**
 * 获取特征
 * @param params
 */
export const getBLEDeviceCharacteristics = (params: { deviceId: string, serviceId: string }) => getProxy().getBLEDeviceCharacteristics(params)

/**
 * 特征值变化事件通知监听
 */
export const onBLECharacteristicValueChange = (callback: Function) => getProxy().onBLECharacteristicValueChange(callback)
/**
 * 注销特征值变化事件通知监听
 */
export const offBLECharacteristicValueChange = () => getProxy().offBLECharacteristicValueChange()

/**
 * 设置读特征通知模式
 * @param params
 */
export const notifyBLECharacteristicValueChange = (params: { deviceId: string, serviceId: string, characteristicId: string, state: boolean, descriptorId: string }) => getProxy().notifyBLECharacteristicValueChange(params)
/**
 * 向设备的特征值写数据
 * @param params
 */
export const writeBLECharacteristicValue = (params: { deviceId: string, serviceId: string, characteristicId: string, value: string }) => getProxy().writeBLECharacteristicValue(params)
/**
 * 向设备的特征值读数据
 * @param params
 */
export const readBLECharacteristicValue = (params: { deviceId: string, serviceId: string, characteristicId: string }) => getProxy().readBLECharacteristicValue(params)

/**
 * 获取本机蓝牙模块状态
 */
export const getBluetoothAdapterState = () => getProxy().getBluetoothAdapterState()
/**
 * 获取处于已连接状态的设备
 * @param params
 */
export const getConnectedBluetoothDevices = (params: { deviceId: string, services: string[] }) => getProxy().getConnectedBluetoothDevices(params)
/**
 * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
 */
export const getBluetoothDevices = () => getProxy().getBluetoothDevices()

/**
 * 设置蓝牙最大传输单元（WeChat Only）
 * @param params
 */
export const setBLEMTU = (params: { deviceId: string, mtu: number }) => getProxy().setBLEMTU(params)

/**
 * 获取蓝牙设备的信号强度（WeChat Only）
 * @param params
 */
export const getBLEDeviceRSSI = (params: { deviceId: string }) => getProxy().getBLEDeviceRSSI(params)
