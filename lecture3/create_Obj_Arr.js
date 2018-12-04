function createLiteral(val) {
	if (isNaN(val) && val.match(/\{|\[/g) === null && val !== 'false' && val !== 'true' && val !== 'null') return String(val);
	if (!isNaN(val)) return Number(val);
	if (val === 'true' || val === 'false' || val === 'null') {
		return val === 'true' ? true : val === 'false' ? false : val === 'null' ? null : undefined;
	}
	if (val.match(/^\[/g)) return createArr(val)
	if (val.match(/\{/g)) return createObj(val);
};
function createObj(value) {
	let result = {}
	let key = ''
	let val = ''
	let keyCount = 0;
	let arrayCount = 0;
	for (indx in value) {
		let token = value[indx]
		if (token === '{' && arrayCount === 0) continue;
		if (token === ' ') continue;
		if (token === '[') arrayCount++;
		if (token === '}' && arrayCount === 0 || token === ',' && arrayCount === 0) {
			result[key] = createLiteral(val);
			key = '';
			val = '';
			keyCount = 0;
		}
		if (arrayCount !== 0) {
			val += token;
		}
		if (keyCount === 0 && token !== ':' && token !== ',') key += token;
		if (keyCount !== 0 && token !== '}' && arrayCount === 0) val += token;
		if (token === ']' && arrayCount !== 0) arrayCount--;
		if (token === ':') keyCount++;
	}
	return result;
}
createObj('{a : [1,[2,[3,[4],7],5],6]}')
function createArr(str) {
	let value = '';
	let result = [];
	let stackCount = -1;
	let endCount = 0;
	let stack = {};
	for (indx in str) {
		let token = str[indx]
		if (token === ' ') continue;
		if (indx === `${str.length - 1}`) {
			if (value.length !== 0) result.push(createLiteral(value))
			continue;
		}
		if (token === '[' && indx === '0') continue;
		if (token === '[' && indx !== '0') {
			stack[stackCount] = [];
			stackCount++;
			endCount++;
			continue;
		}
		if (token !== '[' && token !== ',' && token !== ']' && !value.match(/\{/g)) value += token;
		if (token === ',' && stackCount === -1 && !value.match(/\{/g)) {
			result.push(createLiteral(value));
			value = '';
		}
		if (value.match(/\{/g) && token !== '{') value += token;
		if (token === '}' && stackCount !== -1) {
			stack[stackCount - 1].push(createLiteral(value));
			value = '';
		}
		if (stackCount !== -1 && token === ',' && !value.match(/\{/g) && value.length !== 0 || token === ']' && value.length !== 0 && !value.match(/\{/g) && endCount !== 0) {
			stack[stackCount - 1].push(createLiteral(value));
			value = '';
			continue;
		}
		if (token === ',' && stackCount !== -1) {
			stackCount = arrReducer(stack, stackCount, result);
			continue;
		}
		if (token === ']' && stackCount !== 0) {
			stackCount = arrReducer(stack, stackCount);
			endCount++;
		}
		if (stackCount === 0 && token === ',') {
			result.push(stack[-1]);
		}
	}
	return result;
}
function arrReducer(stack, stackCount, result) {
	if (stackCount === 0) {
		result.push(stack[-1])
		stackCount--;
		return stackCount;
	}
	stack[stackCount - 2].push(stack[stackCount - 1]);
	delete stack[stackCount - 1]
	stackCount--;
	return stackCount;
}