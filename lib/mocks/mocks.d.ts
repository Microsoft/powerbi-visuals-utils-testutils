/// <reference types="powerbi-visuals-tools" />
import ITooltipService = powerbi.extensibility.ITooltipService;
import { MockILocale } from "./mockILocale";
import { MockIAllowInteractions } from "./mockIAllowInteractions";
import IColorInfo = powerbi.IColorInfo;
import ISelectionIdBuilder = powerbi.visuals.ISelectionIdBuilder;
import ISelectionId = powerbi.visuals.ISelectionId;
import IColorPalette = powerbi.extensibility.IColorPalette;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
export declare function createVisualHost(locale?: Object, allowInteractions?: boolean): IVisualHost;
export declare function createColorPalette(colors?: IColorInfo[]): IColorPalette;
export declare function createSelectionId(key?: string): ISelectionId;
export declare function createSelectionIdBuilder(): ISelectionIdBuilder;
export declare function createSelectionManager(): ISelectionManager;
export declare function createTooltipService(isEnabled?: boolean): ITooltipService;
export declare function createLocale(locales?: Object): MockILocale;
export declare function createAllowInteractions(isEnabled?: boolean): MockIAllowInteractions;
