const arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
//[1,0,0,0,0,1,0,0,0,1]
let temp = 0;
let count = 0;
for(let i=0;i<arr.length;i++){
	if(arr[i]==0)
	{
		count = 0;
	}
	else{
		count ++;
		if(count>temp){
			temp = count;
		}
	}
}
console.log('temp: ', temp);