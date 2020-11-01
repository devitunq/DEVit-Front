import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";
import FluentTest from "../../../Utils/fluent-test";

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

  test("debe tener un Banner.", () => {
    whenHome().isRendered().thenElement("Banner").should().exist();
  });
});
