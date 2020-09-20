import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import LevelModal from "./LevelModal";

describe("LevelModal", () => {
  class LevelModalTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        open: true,
        close: () => null,
        result: true,
      };
    }
    isRendered = () => {
      this.wrapper = shallow(<LevelModal {...this.props} />);
      return this;
    };
  }

  const whenLevelModal = () => new LevelModalTest();
  const modalId = "#modalLevel";

  test("Debe contener un Modal", () => {
    whenLevelModal().isRendered().thenElement(modalId).should().exist();
  });

  test("Cuando el resultado es positivo, debe renderizar un modal con un elemento SuccessLevel", () => {
    whenLevelModal()
      .isRendered()
      .thenElement(modalId)
      .should()
      .containElement("#successLevel");
  });

  test("Cuando el resultado es negativo, debe renderizar un modal con un elemento FailedLevel", () => {
    const props = { result: false };
    whenLevelModal()
      .withProps(props)
      .isRendered()
      .thenElement(modalId)
      .should()
      .containElement("#failedLevel");
  });
});
