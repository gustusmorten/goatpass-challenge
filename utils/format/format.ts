export const snakeToCamel = (str: string): string => {
	return str.replace(/(_\w)/g, (match) => match[1].toUpperCase());
};

export const convertKeysToCamelCase = <T>(obj: any): T => {
	if (Array.isArray(obj)) {
		return obj.map((item) => convertKeysToCamelCase(item)) as unknown as T;
	} else if (obj !== null && typeof obj === 'object') {
		return Object.keys(obj).reduce((acc, key) => {
			const camelKey = snakeToCamel(key);
			acc[camelKey] = convertKeysToCamelCase(obj[key]);
			return acc;
		}, {} as any);
	}
	return obj;
};

export const capitalize = (str: string): string => {
	if (str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
};
