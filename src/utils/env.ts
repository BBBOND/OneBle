declare const WXEnvironment: any;
declare const __kraken__: any;
declare const my: any;
declare const wx: any;
declare const tt: any;
declare const global: any;
declare const process: any;

function isUndef(type: any): boolean {
    return type === 'undefined';
}

export const isWeb = !isUndef(typeof window) && 'onload' in window;
export const isNode = !isUndef(typeof process) && !!(process.versions && process.versions.node);
export const isWeex = !isUndef(typeof WXEnvironment) && WXEnvironment.platform !== 'Web';
export const isKraken = !isUndef(typeof __kraken__);
export const isMiniApp = !isUndef(typeof my) && my !== null && !isUndef(typeof my.alert);
export const isByteDanceMicroApp = !isUndef(typeof tt) && tt !== null && !isUndef(typeof tt) && !isUndef(tt.showToast);
// In wechat mini program, wx.login is a function
// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
// In bytedance maicro app, there is wx variable.
export const isWeChatMiniProgram = !isByteDanceMicroApp && !isUndef(typeof wx) && wx !== null && (!isUndef(typeof wx.login) || !isUndef(typeof wx.miniProgram));
export const isQuickApp = !isUndef(typeof global) && global !== null && !isUndef(typeof global.callNative) && !isWeex;

export const ENV = (() => {
    if (isWeb) {
        return 'WEB';
    } else if (isNode) {
        return 'NODE';
    } else if (isWeex) {
        return 'WEEX';
    } else if (isKraken) {
        return 'KRAKEN';
    } else if (isMiniApp) {
        return 'ALI_MINI_APP';
    } else if (isByteDanceMicroApp) {
        return 'BYTE_DANCE_MINI_APP';
    } else if (isWeChatMiniProgram) {
        return 'WECHAT_MINI_APP';
    } else if (isQuickApp) {
        return 'QUICK_APP';
    } else {
        return 'OTHER';
    }
})();