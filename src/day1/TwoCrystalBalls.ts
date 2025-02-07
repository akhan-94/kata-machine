export default function two_crystal_balls(breaks: boolean[]): number {
	
	const size = breaks.length;
	
	const jumpAmount = Math.floor(Math.sqrt(size));
	
	let i = jumpAmount;
	
	for(; i < size; i += jumpAmount){
		if(breaks[i]){
			break;
		}
	};
	
	i -= jumpAmount;
	
	for (let j = 0; j < jumpAmount && i < size; ++j, ++i){
		if(breaks[i]){
			return i;
		}
	}
	
	// false
	return -1;
}