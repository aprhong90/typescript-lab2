import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter", () => {
  test("inherits the property from parent", () => {
    const theHtmlGreeter = new HtmlGreeter("howdy", "h1");
    expect(theHtmlGreeter.greeting).toBe("howdy");
  });
  test("the tagName property is default to h1", () => {
    const theHtmlGreeter = new HtmlGreeter("howdy");
    expect(theHtmlGreeter.tagName).toBe("h1");
  });
  test("the tagName property default to h1", () => {
    const theHtmlGreeter = new HtmlGreeter("howdy", "div");
    expect(theHtmlGreeter.tagName).toBe("div");
  });
  test("the greet method is properly overwritten", () => {
    const theHtmlGreeter = new HtmlGreeter("howdy", "div");
    expect(theHtmlGreeter.greet("gogo")).toBe("<div>howdy, gogo!</div>");
  });
});
