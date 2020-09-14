import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import FluentTest from "../../Utils/fluent-test";

describe("Home", () => {
  class HomeTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        data: { logo: "", description: "TestDescription" },
      };
    }

    isRendered = () => {
      this.wrapper = shallow(<Home {...this.props} />);

      return this;
    };
  }

  const whenHome = () => new HomeTest();

  test("debe tener un navBar.", () => {
    whenHome().isRendered().thenElement("Navbar").should().exist();
  });

  test("debe tener el logo de DEVit.", () => {
    const expectedId = "#logoDevit";
    whenHome().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener el logo de DEVit.", () => {
    const expectedId = "#logoDevit";
    whenHome().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener la descripción de DEVit.", () => {
    const expectedId = "#descDevit";
    whenHome().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener un botón para jugar.", () => {
    const expectedId = "#playButton";
    whenHome().isRendered().thenElement(expectedId).should().exist();
  });
});
