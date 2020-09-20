import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import Logo from "./Logo";

describe("Logo", () => {
  class LogoTest extends FluentTest {
    isRendered = () => {
      this.wrapper = shallow(<Logo />);
      return this;
    };
  }

  const whenLogo = () => new LogoTest();

  test("Debe contener un div con una imagen", () => {
    whenLogo().isRendered().thenElement("div").should().containElement("img");
  });
});
