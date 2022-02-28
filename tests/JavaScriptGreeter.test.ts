import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("greetings and names", () => {
  test("inherits the property from parent", () => {
    const theJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("hi");
    expect(theJavaScriptGreeter.greeting).toBe("hi");
  });
  test("the greet method was properly overwritten", () => {
    const theJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "hello"
    );
    expect(theJavaScriptGreeter.greet("Paul")).toBe(
      "console.log('hello, Paul!')"
    );
  });
});
