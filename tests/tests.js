
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

  it("To check if /factorial endpoint is working", (done) => {
    chai
      .request(app)
      .post("/factorial")
      .type("form")
      .send({"number": 9})
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.should.have.property('result');
          done();
        }
      });
  });

  //Add more tests here
})