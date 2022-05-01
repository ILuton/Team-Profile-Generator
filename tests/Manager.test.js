const importManager = require('../lib_classes/Manager');

describe("importManager", () => {
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
      it("make sure each returns a value", () => {
        const officenumber = this.officenumber;
        expect(officenumber).toEqual(this.officenumber);
      });
    });
  });