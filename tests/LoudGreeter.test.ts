import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter", () => {
  test("inherits the property from parent", () => {
    const theLoudGreeter: LoudGreeter = new LoudGreeter("how are you");
    expect(theLoudGreeter.greeting).toBe("how are you");
  });
  test("greet is properly overwritten to account for extra", () => {
    const theLoudGreeter: LoudGreeter = new LoudGreeter("how are you");
    expect(theLoudGreeter.greet("Sol")).toBe("how are you, Sol!!");
  });
  test("greet is properly overwritten to account for extra when addVolume is called", () => {
    const theLoudGreeter: LoudGreeter = new LoudGreeter("how are you");
    theLoudGreeter.addVolume();
    theLoudGreeter.addVolume();
    theLoudGreeter.addVolume();
    theLoudGreeter.addVolume();
    theLoudGreeter.addVolume();

    expect(theLoudGreeter.greet("Sol")).toBe("how are you, Sol!!!!!!!");
  });
});
