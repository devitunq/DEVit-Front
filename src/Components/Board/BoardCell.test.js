import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import BoardCell from "./BoardCell";

describe("BoardCell", () => {
  class BoardCellTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        pos: "1_1",
        img: "",
        background: "",
      };
    }

    isRendered = () => {
      this.wrapper = shallow(<BoardCell {...this.props} />);
      return this;
    };
  }

  const whenBoardCell = () => new BoardCellTest();

  test("Debe tener una celda de la tabla", () => {
    const expectedId = "#cell_1_1";
    whenBoardCell().isRendered().thenElement(expectedId).should().exist();
  });

  test("Debe tener una imagen", () => {
    const expectedId = "#cell_img_1_1";
    whenBoardCell().isRendered().thenElement(expectedId).should().exist();
  });
});
