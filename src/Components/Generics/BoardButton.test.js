import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import BoardButton from "./BoardButton";

describe("BoardButton", () => {
  class BoardButtonTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        onClick: "",
        text: "Boton de Prueba",
      };
    }

    isRendered = () => {
      this.wrapper = shallow(<BoardButton {...this.props} />);
      return this;
    };
  }

  const whenBoardButton = () => new BoardButtonTest();

  test("Debe existir un div con el texto Boton de Prueba", () => {
    const text = "Boton de Prueba";
    whenBoardButton()
      .isRendered()
      .thenElement("div")
      .should()
      .containText(text);
  });
});
