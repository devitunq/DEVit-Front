import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import Banner from "./Banner";

describe("Banner", () => {
  class BannerTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        description: "Description Test",
      };
    }

    isRendered = () => {
      this.wrapper = shallow(<Banner {...this.props} />);
      return this;
    };
  }

  const whenBanner = () => new BannerTest();

  test("Debe contener una descripcion.", () => {
    whenBanner()
      .isRendered()
      .thenElement("#descDevit")
      .should()
      .containText("Description Test");
  });

  test("Debe contener un logo.", () => {
    whenBanner().isRendered().thenElement("#logoDevit").should().exist();
  });

  test("Debe contener un elemento StartButton.", () => {
    whenBanner().isRendered().thenElement("StartButton").should().exist();
  });
});
