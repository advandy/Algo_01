function factorial(val){
	if(val <=1){
		return val;
	}else{
		return factorial(val-1)*val;
	}
}

function rearZero(val){
	var count = 0;
	var arr=[];
	return (countZero(reversedArray(val)))

	function reversedArray(decimal){
		if((decimal/2)>0){
			arr.push(decimal%2);
			reversedArray(Math.floor(decimal/2));
		}

		return arr;
	}

	function countZero(arr){
		var count = 0;
		for (var i=0; i<arr.length; i++){
			if(arr[i]==0){
				count++;
			}
			else{
				break;
			}
		}

		return count;
	}
}



/* arguments:
	val: decimal to be converted
	type: 2 for binary, 3 for ternary*/
function convert(val, type){
	var arr=[];
	return inverseArray(iterate(val));


	function iterate(value){
		if((value/type)>0){
			arr.push(value%type);
			iterate(Math.floor(value/type));
		}

		return arr;
	}

	function inverseArray (array){
		var arr = [];
		for(var i= array.length - 1; i>=0; i--){
			arr.push(array[i]);
		}
		return arr;
	}
}