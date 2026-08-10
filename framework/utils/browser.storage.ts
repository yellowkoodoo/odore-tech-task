import fs from "fs";

export const STORAGE_STATE = "./artifacts/storageState.json" as const;

export const readStorageState = async () =>
    JSON.parse(fs.readFileSync(STORAGE_STATE, "utf-8"));

export const disposeStorageState = async () => {
    if (fs.existsSync(STORAGE_STATE)) {
        fs.unlinkSync(STORAGE_STATE);
    }
};
