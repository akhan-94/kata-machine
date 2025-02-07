export default function bubble_sort(arr: number[]): void {

	const size = arr.length;
	
	for(let i = 0; i < size; i++){
		
		for(let j = 0; j < size - 1 - i; j++){
			
			const currentNumber = arr[j];
			const nextNumber = arr[j + 1];
			
			// check if the numbers need to be swapped
			
			if(currentNumber > nextNumber){
				
				// swap the numbers
				
				arr[j] = nextNumber;
				arr[j + 1] = currentNumber;
			}
		}
		
	}
}