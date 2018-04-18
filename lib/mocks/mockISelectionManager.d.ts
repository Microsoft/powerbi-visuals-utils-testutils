/// <reference types="powerbi-visuals-tools" />
import IPromise = powerbi.IPromise;
import ISelectionId = powerbi.visuals.ISelectionId;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
export declare class MockISelectionManager implements ISelectionManager {
    private selectionIds;
    select(selectionId: ISelectionId | ISelectionId[], multiSelect?: boolean): IPromise<ISelectionId[]>;
    hasSelection(): boolean;
    clear(): IPromise<{}>;
    getSelectionIds(): ISelectionId[];
    applySelectionFilter(): void;
    containsSelection(id: ISelectionId): boolean;
}
