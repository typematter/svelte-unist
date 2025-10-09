type Mergeable = { [key: string]: unknown };

const isObject = (item: unknown): item is Mergeable =>
	item !== undefined && item !== null && typeof item === 'object' && !Array.isArray(item);

const merge = (...objects: Mergeable[]): Mergeable =>
	objects.reduce((prev, curr) => {
		Object.keys(curr).forEach((key) => {
			const resultValue = prev[key];
			const objValue = curr[key];

			if (isObject(resultValue) && isObject(objValue)) {
				prev[key] = merge(resultValue, objValue);
			} else if (isObject(objValue)) {
				prev[key] = merge({}, objValue);
			} else {
				prev[key] = objValue;
			}
		});

		return prev;
	}, {} as Mergeable);

export default merge;
