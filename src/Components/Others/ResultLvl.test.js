import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import ResultLvl from "./ResultLvl";

describe("ResultLvl", () => {
  class ResultLvlTest extends FluentTest {
    isRendered = () => {
      this.wrapper = shallow(<ResultLvl {...this.props} />);
      return this;
    };
  }

  const whenResultLvl = () => new ResultLvlTest();

  test("Debe tener una imagen con el resultado del nivel pasado por props", () => {
    const imgPath = "/test";
    const props = { imgPath: imgPath };
    whenResultLvl()
      .withProps(props)
      .isRendered()
      .thenElement("#resImg")
      .should()
      .haveProperty("src")
      .equalTo(imgPath);
  });

  test("Debe tener un texto acerca del resultado del nivel", () => {
    const text = "Test result";
    const props = { text: text };
    whenResultLvl()
      .withProps(props)
      .isRendered()
      .thenElement("#resText")
      .should()
      .containText(text);
  });
});
