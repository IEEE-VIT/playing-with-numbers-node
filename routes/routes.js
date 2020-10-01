const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
 try{


    let str = req.body.str

 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       res.satus(200).send({ message: "The string is not palindrome"})

   }
}
 else{
   res.status(200).send({message:"The string is palindrome"})
}
 }catch(error){
    res.send({Error:error}).status(500)
 }

})

module.exports = router;

