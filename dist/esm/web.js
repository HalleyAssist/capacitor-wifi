var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class WifiWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Wifi',
            platforms: ['web']
        });
    }
    scan() {
        return __awaiter(this, void 0, void 0, function* () {
            return { scan: [] };
        });
    }
    connect(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            return { ssid: '' };
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    connectPrefix(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            return { ssid: '' };
        });
    }
    getConnectedSSID() {
        return __awaiter(this, void 0, void 0, function* () {
            return { ssid: '' };
        });
    }
    getWifiIP() {
        return __awaiter(this, void 0, void 0, function* () {
            return { ip: '' };
        });
    }
}
const Wifi = new WifiWeb();
export { Wifi };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Wifi);
//# sourceMappingURL=web.js.map