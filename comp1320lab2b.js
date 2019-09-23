function comp1320(x) {
    if (x > 0) {
        return "positive";
        //if x is bigger then return word positive
    } else if (x < 0){
        return "negative";
        //if not above, and x is less than 0 then return word negative
    } else ( x = 0)
        return "zero";
        // if not not of the above and x=0 then return word zero
}

console.log(comp1320(0))
