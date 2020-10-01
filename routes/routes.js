const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

router.post('/prime', (req, res) => {
    // Prime logic

    var num=parseInt(req.body.number);
    let count=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            count=count+1;
            break;
        }
    }
    if(count>0){
        res.status(200).send("Not Prime");
    }
    else{
        res.status(200).send("Prime");
    }
    
})

module.exports = router;