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
          res.body.should.have.property("result");
          res.body.should.have.property("result", fact);
          done();
        }
      });
  });

  // ✅ New test for Fibonacci route
  it("To check if /fibonacci endpoint is working and returns series up to a number", (done) => {
    const limit = 20;
    const expectedSeries = [0, 1, 1, 2, 3, 5, 8, 13];

    chai
      .request(app)
      .post("/fibonacci")
      .type("form")
      .send({ number: limit })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.should.have.status(200);
          res.body.should.have.property("series");
          res.body.series.should.be.an("array");
          res.body.series.should.deep.equal(expectedSeries);
          done();
        }
      });
  });
});
