function fibo(x,y){
		var a = -1, b = 1;
		for(i = 0; i < y; i++) {
			var p = ''
			for( j = 0; j < x; j++) {
				p += (a+b) + ' ';
				c = a
				a = b
				b = b + c
			}
			console.log(p)
		}
	}
	fibo(4,3)