
//String Manipulation Functions:

function ReverseString(s){
	return s.split("").reverse().join("");
}
function ReverseString1(s){
    var ans = "";
    for(let i = 0;i<s.length;i++){
        ans = s[i] + ans;
    }
    return ans;
}

function CountLen(s){
	return s.length;
}

function ConvertToUpp(s){
	s = s.charAt(0).toUpperCase() + s.substring(1);
	for(let i = 0;i<s.length;i++){
		if(s[i] == ' '){
			s = s.substring(0,i+1) + s.charAt(i+1).toUpperCase() + s.substring(i+2);
		}
	}
	return s;
}

var s = "zzzg eee gflj"
console.log(ReverseString(s));
console.log(ReverseString1(s));
console.log(CountLen(s));
console.log(ConvertToUpp(s));


//Array Functions:

function maximum(T){
    var mx = -Infinity;
    for(let x of T){
        if(x>mx){
            mx = x;
        }
    }
    return mx;
}

function minimum(T){
    var mn = Infinity;
    for(let x of T){
        if(x<mn){
            mn = x;
        }
    }
    return mn;
}

function SumArray(T){
	var ans = 0;
	for(let i = 0;i<T.length;i++){
		ans += T[i];
	}
	return ans;
}
function SumArray1(T){
	var ans = 0;
	for(let x of T){
		ans += x;
	}
	return ans;
}

function even(T){
    var ans = [];
    for(let x of T){
        if(!(x&1)){
            ans.push(x);
        }
    }
    return ans;
}

const T = [7,-2,5,-1,0,9,8,6]
console.log(maximum(T));
console.log(minimum(T));
console.log(SumArray(T));
console.log(SumArray1(T));
console.log(even(T));


//Mathematical Functions:

function fact(n){
	let ans = 1;
	for(let i = 1;i<=n;i++){
		ans *= i;
	}
	return ans;
}
function fact1(n){
	if(n == 0 || n == 1) return 1;
	else return n*fact1(n-1);
}

function prime(x){
	if(x == 0 || x == 1) return false;
	for(let i = 2;i<x;i++){
		if(x%i == 0) return false;
	}
	return true;
}
function prime1(n) {
    if (n == 1) return false;
    for (let i = 2; i * i <= n; ++i){
        if (n % i == 0){
            return false;
        } 
    }
    return true;    
}

function fib(n){
    if(n <= 1) return n;
    else return fib(n-1) + fib(n-2);
}
function fib1(n){
    var s = 0;
    var ans = 1;
    for(let i = 1;i<n;i++){
        var s1 = ans + s;
        s = ans;
        ans = s1;
    }
    return ans;
}

var n = 7;
console.log(fact(n));
console.log(fact1(n));
console.log(prime(n));
console.log(prime1(n));
console.log(fib(n));
console.log(fib1(n));
