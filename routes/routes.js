const router = require('express')();

function prime(n){
    let count=0;
    for(let i=2;i<n;i++){
        if(n%i==0){
            count=count+1;
            break;
        }
    }
    if(count>0){
        return "Not Prime";
    }
    else{
        return "Prime";
    }
}

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}


router.post('/factorial/:num', (req, res) => {
    //Factorial logic goes here
    var num=req.params.num;
    res.send(factorial(num));
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

router.post('/prime/:num', (req,res)=> {
    var num=req.params.num;
    res.send(prime(num));
})

module.exports = router;
