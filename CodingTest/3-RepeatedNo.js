const arr = [0,1,2,3,4,4,6,7,8,9];
for (let i = 0; i < arr.length; i++) {
	if(arr[i]===arr[i+1]){
		console.log('repeated no is', arr[i])
	}
}