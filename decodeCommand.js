import { Buffer } from 'buffer';

import chalk from 'chalk';

// a and b must be 1 byte numbers
function oneByteXor(a, b) {
	// a ^ b makes 32 signed int, e. g.      00000000 00000000 00000000 11111001
	// not flips it to negative number:      11111111 11111111 11111111 00000110
	// to get the real number we'll add 256: 00000000 00000000 00000000 00000110
	return ~ (a ^ b) + 256; 
}

export default function decodeCommand(buffer) {
	const signature = buffer.slice(0, 2);
	let result = [];
	if (Buffer.from([0x54, 0x50]).equals(signature) === true) {
		const firstKey = buffer[2];
		const firstValues = buffer.slice(3, 6);
		
		for(let i = 0; i < firstValues.length; i++) {
			const a = oneByteXor(firstKey, firstValues[i]);
			
			result.push(a)
		}
		
		console.log('#### Decoded:', result);

	} else {
	//	console.log(chalk.red('Unknown signature!'));
	}
}

