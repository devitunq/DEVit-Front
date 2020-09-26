import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import JoystickArrows from "./JoystickArrows";

describe("JoystickArrows", () => {
  class JoystickArrowsTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        onClickLeft: () => null,
        onClickUp: () => null,
        onClickDown: () => null,
        onClickRight: () => null,
      };
    }
    isRendered = () => {
      this.wrapper = shallow(<JoystickArrows {...this.props} />);
      return this;
    };
  }

  const whenJoystickArrows = () => new JoystickArrowsTest();

  test("Debe tener una flecha izquierda", () => {
    const expectedId = "#leftArrow";
    whenJoystickArrows().isRendered().thenElement(expectedId).should().exist();
  });

  test("Debe tener una flecha arriba", () => {
    const expectedId = "#upArrow";
    whenJoystickArrows().isRendered().thenElement(expectedId).should().exist();
  });

  test("Debe tener una flecha abajo", () => {
    const expectedId = "#downArrow";
    whenJoystickArrows().isRendered().thenElement(expectedId).should().exist();
  });

  test("Debe tener una flecha derecha", () => {
    const expectedId = "#rightArrow";
    whenJoystickArrows().isRendered().thenElement(expectedId).should().exist();
  });
});
