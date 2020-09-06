import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import Navbar from "./Navbar";

describe("Navbar", () => {
  class NavbarTest extends FluentTest {
    isRendered = () => {
      this.wrapper = shallow(<Navbar {...this.props} />);
      return this;
    };
  }

  const whenNavbar = () => new NavbarTest();

  test("debe tener un link al home.", () => {
    const expectedId = "#navHomeLink";
    whenNavbar().isRendered().thenElement(expectedId).should().exist();
  });

  test("debe tener un link al About.", () => {
    const expectedId = "#navAboutLink";
    whenNavbar().isRendered().thenElement(expectedId).should().exist();
  });
});
