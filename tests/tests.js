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
  
  //Add more tests here
  
  it("Correctly checks if a given year is leap year or not", (done) => {
    const leapYears = [1912, 1928, 1936, 1948, 1980, 2000, 2012];
    const nonLeapYears = [1901, 1913, 1926, 1957, 1962, 1978, 1995];

    for (let i = 1; i < 3; i++) {
      const yearsToCheck = i === 1 ? leapYears : nonLeapYears;
      for (const year of yearsToCheck) {
        chai
          .request(app)
          .post("/leap-year")
          .send({ year })
          .end((err, res) => {
            if (err) {
              done(err);
              process.exit(1);
            } else {
              res.body.message.should.equal(
                `The year ${year} is${i === 1 ? "" : " not"} a leap year`,
              );
            }
          });
      }
    }

    done();
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
});
