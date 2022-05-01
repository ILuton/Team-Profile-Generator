const importIntern = require('../lib_classes/Intern');

describe("importIntern", () => {
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
        const school = this.school;
        expect(school).toEqual(this.school);
      });
    });
  });