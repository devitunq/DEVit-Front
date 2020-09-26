import React from "react";
import { shallow } from "enzyme";
import About from "./About";
import FluentTest from "../../Utils/fluent-test";

describe("About", () => {
  class AboutTest extends FluentTest {
    isRendered = () => {
      this.wrapper = shallow(<About />);

      return this;
    };
  }

  const whenAbout = () => new AboutTest();

  test("debe tener un Paragraph para la bio.", () => {
    const expectedId = "#bioParagraph";
    whenAbout().isRendered().thenElement(expectedId).should().exist();
  });
});
