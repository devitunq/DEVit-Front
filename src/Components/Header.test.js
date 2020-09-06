import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import FluentTest from "../Utils/fluent-test";

describe("Header", () => {
  class HeaderTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        data: { logo: "", description: "TestDescription" },
      };
    }

    isRendered = () => {
      this.wrapper = shallow(<Header {...this.props} />);

      return this;
    };
  }

  const whenHeader = () => new HeaderTest();

  test("debe tener un navBar.", () => {
    const expectedId = "#nav-wrap";
    whenHeader().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener el logo de DEVit.", () => {
    const expectedId = "#logoDevit";
    whenHeader().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener el logo de DEVit.", () => {
    const expectedId = "#logoDevit";
    whenHeader().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener la descripción de DEVit.", () => {
    const expectedId = "#descDevit";
    whenHeader().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener un botón para jugar.", () => {
    const expectedId = "#playButton";
    whenHeader().isRendered().thenElement(expectedId).should().exist();
  });
});
