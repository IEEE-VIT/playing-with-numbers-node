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

  describe("To check if /amicable is working for positive cases -> ", () => {
    [
      [220, 284],
      [1184, 1210],
      [2620, 2924],
      [5020, 5564],
      [6232, 6368],
      [10744, 10856],
      [12285, 14595],
      [17296, 18416],
      [63020, 76084],
      [66928, 66992],
    ].forEach(([x,y]) => {
      it(`should work for (${x}, ${y})`, (done) => {
        chai
            .request(app)
            .post("/amicable")
            .send({
              'x': '220',
              'y': '284',
            })
            .end((err, res) => {
              if (err) {
                done(err);
                process.exit(1);
              } else {
                res.body.message.should.contain("are Amicable");
                done();
              }
            });
      });
    })
  })

 

  it("To check if /amicable is working for negative case", (done) => {
    chai
      .request(app)
      .post("/amicable")
      .send({
        'x': '221',
        'y': '284',
      })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.message.should.contain("are Not Amicable");
          done();
        }
      });
  });


  //Add more tests here
});
