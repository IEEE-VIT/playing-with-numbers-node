const router = require("express")();


// Harshad Number
router.post('/harshad', (req,res)=>{
let num = parseInt(req.body.number);
let sum=0,temp=num;
while(temp>0){ sum+=temp%10; temp=Math.floor(temp/10); }
res.status(200).send({ message: num%sum===0 ? "The Number is a Harshad Number" : "The Number is Not a Harshad Number" });
});


// Krishnamurthy Number (fixed GET endpoint)
router.get('/krishnamurthy', (req, res) => {
try {
const number = parseInt(req.query.number);
if (isNaN(number)) return res.status(400).send({ message: "Provide a valid number in query" });
let sum=0,temp=number;
const factorial=(n)=>{ let f=1; for(let i=1;i<=n;i++) f*=i; return f; };
while(temp>0){ sum+=factorial(temp%10); temp=Math.floor(temp/10); }
res.status(200).send({ message: sum===number ? "The Number is a Krishnamurthy Number" : "The Number is Not a Krishnamurthy Number" });
} catch(e){ res.status(500).send({ error:e.message }); }
});


// Armstrong Number
router.post('/armstrong',(req,res)=>{
const num=parseInt(req.body.number);
let digits=num.toString().length;
let sum=0,temp=num;
while(temp>0){ sum+=Math.pow(temp%10,digits); temp=Math.floor(temp/10); }
res.status(200).send({ message: sum===num ? "It is an Armstrong number" : "It is NOT an Armstrong number" });
});


// Amicable Numbers
router.post('/amicable', (req,res)=>{
const x=parseInt(req.body.x), y=parseInt(req.body.y);
if(isNaN(x)||isNaN(y)) return res.status(400).send({ message: "Provide valid numbers x and y" });
const sumDiv=(n)=>{ let sum=0; for(let i=1;i<n;i++) if(n%i===0) sum+=i; return sum; };
res.status(200).send({ message: sumDiv(x)===y && sumDiv(y)===x ? `${x} and ${y} are Amicable Numbers!` : `${x} and ${y} are NOT Amicable Numbers!` });
});


// Tech Number
router.post('/tech-number', (req,res)=>{
const num=parseInt(req.body.number);
const n=num.toString().length;
if(n%2!==0) return res.status(200).send({ message:'The Number is not a Tech number!' });
const left=Math.floor(num/Math.pow(10,n/2));
const right=num%Math.pow(10,n/2);
const sum=(left+right)*(left+right);
res.status(200).send({ message: sum===num ? 'The Number is a Tech number!' : 'The Number is not a Tech number!' });
});


// Duck Number
router.post('/duck-number',(req,res)=>{
const num=req.body.number.toString();
res.status(200).send({ message: num.slice(1).includes('0') ? 'Duck Number' : 'Not Duck Number' });
});


// Buzz Number
router.post('/buzz',(req,res)=>{
const num=parseInt(req.body.number);
res.status(200).send({ message: num%10===7||num%7===0 ? 'Buzz Number' : 'Not a Buzz Number' });
});


module.exports = router;
