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

  it("To check if /fibonacci endpoint is working", (done) => {
    chai
      .request(app)
      .post("/fibonacci")
      .type("form")
      .send({ number: 7 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);
          res.body.should.have.property("result");
          done();
        }
      });
  });

  it("To check Armstrong number positive case", (done) => {
    chai
      .request(app)
      .post("/armstrong")
      .type("form")
      .send({ number: 153 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("armstrong");
          String(result).toLowerCase().should.not.include("not armstrong");

          done();
        }
      });
  });

  it("To check Armstrong number negative case", (done) => {
    chai
      .request(app)
      .post("/armstrong")
      .type("form")
      .send({ number: 123 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("not");

          done();
        }
      });
  });

  it("To check palindrome positive case", (done) => {
    chai
      .request(app)
      .post("/palindrome")
      .type("form")
      .send({ number: 121 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("palindrome");
          String(result).toLowerCase().should.not.include("not palindrome");

          done();
        }
      });
  });

  it("To check palindrome negative case", (done) => {
    chai
      .request(app)
      .post("/palindrome")
      .type("form")
      .send({ number: 123 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("not");

          done();
        }
      });
  });

  it("To check leap year positive case", (done) => {
    chai
      .request(app)
      .post("/leap_year")
      .type("form")
      .send({ year: 2024 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("leap");
          String(result).toLowerCase().should.not.include("not");

          done();
        }
      });
  });

  it("To check leap year negative case", (done) => {
    chai
      .request(app)
      .post("/leap_year")
      .type("form")
      .send({ year: 2023 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("not");

          done();
        }
      });
  });

  it("To check even number case", (done) => {
    chai
      .request(app)
      .post("/even_odd")
      .type("form")
      .send({ number: 8 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("even");

          done();
        }
      });
  });

  it("To check odd number case", (done) => {
    chai
      .request(app)
      .post("/even_odd")
      .type("form")
      .send({ number: 7 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("odd");

          done();
        }
      });
  });

  it("To check reverse number endpoint", (done) => {
    chai
      .request(app)
      .post("/reverse")
      .type("form")
      .send({ number: 1234 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          Number(result).should.equal(4321);

          done();
        }
      });
  });

  it("To check sum of digits endpoint", (done) => {
    chai
      .request(app)
      .post("/sum_digits")
      .type("form")
      .send({ number: 1234 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          Number(result).should.equal(10);

          done();
        }
      });
  });

  it("To check perfect number positive case", (done) => {
    chai
      .request(app)
      .post("/perfect_number")
      .type("form")
      .send({ number: 6 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("perfect");
          String(result).toLowerCase().should.not.include("not perfect");

          done();
        }
      });
  });

  it("To check perfect number negative case", (done) => {
    chai
      .request(app)
      .post("/perfect_number")
      .type("form")
      .send({ number: 10 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          String(result).toLowerCase().should.include("not");

          done();
        }
      });
  });

  it("To check GCD endpoint", (done) => {
    chai
      .request(app)
      .post("/gcd")
      .type("form")
      .send({ number1: 12, number2: 18 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          Number(result).should.equal(6);

          done();
        }
      });
  });

  it("To check LCM endpoint", (done) => {
    chai
      .request(app)
      .post("/lcm")
      .type("form")
      .send({ number1: 4, number2: 6 })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          res.should.have.status(200);

          const result =
            res.body.result !== undefined ? res.body.result : res.text;

          Number(result).should.equal(12);

          done();
        }
      });
  });
});