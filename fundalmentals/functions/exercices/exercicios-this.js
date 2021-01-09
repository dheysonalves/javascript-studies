let calculator = {
    a: 5,
    b: 6,
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );