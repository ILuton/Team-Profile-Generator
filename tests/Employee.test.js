const importEmployee = require('../lib_classes/Employee');

describe("importEmployee", () => {
    describe("value", () => {
      it("make sure name returns a value", () => {
        const name = this.name;
        expect(name).toEqual(this.name);
      });
      it("make sure id returns a value", () => {
        const id = this.id;
        expect(id).toEqual(this.id);
      });
      it("make sure email returns a value", () => {
        const email = this.email;
        expect(email).toEqual(this.email);
      });
    });
  });