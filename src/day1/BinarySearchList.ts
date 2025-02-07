export default function bs_list(haystack: number[], needle: number): boolean {
	
	let lowValue = 0;
	let highValue = haystack.length;
	
	// the lords loop
	
	do {
		const midPoint = Math.floor(lowValue + (highValue - lowValue) / 2);
		const value = haystack[midPoint];
		
		if(value === needle) { 
			return true; 
		} 
		// needle is greater than value
		else if (value > needle) {
			highValue = midPoint;
		} 
		// value is now less than needle
		else {
			lowValue = midPoint + 1;
		}
		
	} while(lowValue < highValue);
	
	return false;
}