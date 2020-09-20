import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import Gameboard from "./Gameboard";

describe("Gameboard", () => {
  class GameboardTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        grid: Array(7)
          .fill()
          .map((_) => Array(7).fill()),
        paths: [],
        objects: [],
      };
    }
    isRendered = () => {
      this.wrapper = shallow(<Gameboard {...this.props} />);
      return this;
    };
  }

  const whenGameboard = () => new GameboardTest();

  test("Debe tener una tabla", () => {
    whenGameboard().isRendered().thenElement("table").should().exist();
  });

  test("Debe tener un table body", () => {
    whenGameboard().isRendered().thenElement("tbody").should().exist();
  });

  test("Debe tener exactamente 7 filas", () => {
    whenGameboard().isRendered().thenElement("tr").should().haveNumInstances(7);
  });

  test("Debe tener exactamente 49 celdas del tablero", () => {
    whenGameboard()
      .isRendered()
      .thenElement("BoardCell")
      .should()
      .haveNumInstances(49);
  });
});
