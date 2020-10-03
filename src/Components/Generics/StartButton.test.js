import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import StartButton from "./StartButton";

describe("StartButton", () => {
  class StartButtonTest extends FluentTest {
    constructor() {
      super();
      this.props = {
        styledClassName: "button btn btn-primary",
        href: "/sign",
        text: "Comenzar",
        iconClassName: "fa-fa-play",
      };
    }
    isRendered = () => {
      this.wrapper = shallow(<StartButton {...this.props} />);
      return this;
    };
  }

  const whenStartButton = () => new StartButtonTest();

  test("Debe renderizar un href de id playButton", () => {
    whenStartButton().isRendered().thenElement("#playButton").should().exist();
  });

  test("El href debe contener el texto pasado por props (Comenzar)", () => {
    whenStartButton()
      .isRendered()
      .thenElement("#playButton")
      .should()
      .containText("Comenzar");
  });

  test("El href debe referenciar al link pasado por props (/sign)", () => {
    whenStartButton()
      .isRendered()
      .thenElement("#playButton")
      .should()
      .haveProperty("href")
      .equalTo("/sign");
  });
});
