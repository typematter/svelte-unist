type Mergeable = {
    [key: string]: unknown;
};
declare const merge: (...objects: Mergeable[]) => Mergeable;
export default merge;
