import { FlatI18n } from "@netless/flat-i18n";
import { FlatPrefersColorScheme, Region } from "flat-components";
import { autoPersistStore } from "./utils";

// clear storage if not match
const LS_VERSION = 1;

/**
 * Properties in Config Store are persisted and shared globally.
 */
export class ConfigStore {
    /** Turn on camera when joining room */
    public autoCameraOn = false;
    /** Turn on mic when joining room */
    public autoMicOn = true;
    /** Region, default by language */
    public region: Region | null = null;

    public prefersColorScheme: FlatPrefersColorScheme = "light";

    public constructor() {
        autoPersistStore({ storeLSName: "ConfigStore", store: this, version: LS_VERSION });
    }

    public updateAutoCameraOn = (isOn: boolean): void => {
        this.autoCameraOn = isOn;
    };

    public updateAutoMicOn = (isOn: boolean): void => {
        this.autoMicOn = isOn;
    };

    public setRegion = (region: Region): void => {
        this.region = region;
    };

    public getRegion = (): Region => {
        return (
            this.region ||
            (FlatI18n.getInstance().language.startsWith("zh") ? Region.CN_HZ : Region.US_SV)
        );
    };

    public updatePrefersColorScheme = (prefersColorScheme: FlatPrefersColorScheme): void => {
        this.prefersColorScheme = prefersColorScheme;
    };
}

export const configStore = new ConfigStore();
