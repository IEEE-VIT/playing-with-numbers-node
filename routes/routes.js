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


router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

router.post('/prime', (req,res)=> {
    var num=req.param;
    res.send(prime(num));
})

module.exports = router;
