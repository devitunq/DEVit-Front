import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import JoystickArrows from "./JoystickArrows";

describe("JoystickArrows", () => {
  class JoystickArrowsTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        onClickLeft: jest.fn(),
        onClickUp: jest.fn(),
        onClickDown: jest.fn(),
        onClickRight: jest.fn(),
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

  test("Al clickear la flecha derecha, debe llamar a onClickRight", () => {
    const expectedId = "#rightArrow";
    const onClickRight = jest.fn();
    const props = { onClickRight: onClickRight };
    whenJoystickArrows()
      .withProps(props)
      .isRendered()
      .and(expectedId)
      .isClicked()
      .shouldCall(onClickRight)
      .once();
  });

  test("Al clickear la flecha izquierda, debe llamar a onClickLeft", () => {
    const expectedId = "#leftArrow";
    const onClickLeft = jest.fn();
    const props = { onClickLeft: onClickLeft };
    whenJoystickArrows()
      .withProps(props)
      .isRendered()
      .and(expectedId)
      .isClicked()
      .shouldCall(onClickLeft)
      .once();
  });

  test("Al clickear la flecha arriba, debe llamar a onClickUp", () => {
    const expectedId = "#upArrow";
    const onClickUp = jest.fn();
    const props = { onClickUp: onClickUp };
    whenJoystickArrows()
      .withProps(props)
      .isRendered()
      .and(expectedId)
      .isClicked()
      .shouldCall(onClickUp)
      .once();
  });

  test("Al clickear la flecha abajo, debe llamar a onClickDown", () => {
    const expectedId = "#downArrow";
    const onClickDown = jest.fn();
    const props = { onClickDown: onClickDown };
    whenJoystickArrows()
      .withProps(props)
      .isRendered()
      .and(expectedId)
      .isClicked()
      .shouldCall(onClickDown)
      .once();
  });
});
