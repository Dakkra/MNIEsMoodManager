export enum SupportedVersions {
    v1 = "v1"
}

export interface Entity {
    id: string;
    version: string;
}

export const saveEntity = (entity: Entity) => {
    window.localStorage.setItem(entity.id, JSON.stringify(entity));
}

export const getEntity = <T extends Entity>(id: string) => {
    return JSON.parse(window.localStorage.getItem(id) ?? "") as T;
}

export const deleteEntity = (id: string) => {
    window.localStorage.removeItem(id);
}

const entriesModelStorageKey = "entries-model";

export interface EntriesModel {
    entriesList: Array<string>;
    version: string;
}

export const saveEntriesModel = (entriesModel: EntriesModel) => {
    window.localStorage.setItem(entriesModelStorageKey, JSON.stringify(entriesModel));
}

export const getEntriesModel = () => {
    const model = window.localStorage.getItem(entriesModelStorageKey);
    if (model) return JSON.parse(model) as EntriesModel;
    return undefined;
}

export const deleteAllEntries = () => {
    const model = getEntriesModel();
    if (model) model.entriesList.forEach(id => deleteEntity(id));
}