import { Greeter } from "../src/Greeter";

describe("give greeting and name", () => {
  test("annyeong, Sooyeon", () => {
    const theGreeter: Greeter = new Greeter("annyeong");
    expect(theGreeter.greet("Sooyeon")).toBe("annyeong, Sooyeon!");
  });
});
