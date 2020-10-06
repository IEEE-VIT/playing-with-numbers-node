const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const assert = require("assert");
const should = chai.should();

chai.use(chaiHttp);

describe("Starting tests for app.js ->", () => {
  it("To check if the app is working", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.text.should.equal("Backend running successfully");
          done();
        }
      });
  });

  it("To check if /prime endpoint is working", (done) => {
    chai
      .request(app)
      .post("/prime")
      .type("form")
      .send({ number: 7 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.should.have.status(200);
          res.text.should.satisfy((str) => {
            return ["Prime", "Not Prime"].includes(str);
          });
          done();
        }
      });
  });

  it("To check if /factorial endpoint is working", (done) => {
    const number = 9;
    let fact = 1;

    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }

    chai
      .request(app)
      .post("/factorial")
      .type("form")
      .send({ number })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.should.have.status(200);
          res.body.should.have.property('result');
          res.body.should.have.property('result', fact);
          done();
        }
      });
  });

  it("To check if /triplets endpoint is working; is a right angled triangle",(done)=>{
    const sides = [3, 4, 5];
    chai
      .request(app)
      .post("/triplets")
      .type("application/json")
      .send({sides: sides})
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        }
        else {
          res.should.have.status(200);
          res.body.should.have.property('result');
          res.body.should.have.property('result', "Yes. Given sides form a right angled triangle.");
          done();
        }
      });
  });

  it("To check if /triplets endpoint is working; is not a right angled triangle",(done)=>{
    const sides = [3, 5, 5];
    chai
      .request(app)
      .post("/triplets")
      .type("application/json")
      .send({sides: sides})
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        }
        else {
          res.should.have.status(200);
          res.body.should.have.property('result');
          res.body.should.have.property('result', "No. Given sides don't form a right angled triangle.");
          done();
        }
      });
  });

  it("To check if /triplets endpoint is working; is not a triangle",(done)=>{
    const sides = [1, 4, 5];
    chai
      .request(app)
      .post("/triplets")
      .type("application/json")
      .send({sides: sides})
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        }
        else {
          res.should.have.status(200);
          res.body.should.have.property('result');
          res.body.should.have.property('result', "No. Given sides don't form a triangle.");
          done();
        }
      });
  }); 
  
  it("To check if /triplets endpoint is working; bad credentials",(done)=>{
    const sides = 12;
    chai
      .request(app)
      .post("/triplets")
      .type("application/json")
      .send({sides: sides})
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        }
        else {
          res.should.have.status(400);
          res.body.should.have.property('Error');
          done();
        }
      });
  }); 
  //Add more tests here
});
