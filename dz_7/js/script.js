
function createCalculator(a){
    return {      
        sum: ((a) => b => a += b)(a),       
        mult: ((a) => b => a *= b)(a),
        sub: ((a) => b => a -= b)(a),
        div: ((a) => b => a/= b)(a),
        set: (a)=>(a),
       };
}

const calc = createCalculator(10)