import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import BoxObjetive from "./Boxobjective";

describe("BoxObjetive", () => {
  class BoxObjetiveTest extends FluentTest {
    isRendered = () => {
      this.wrapper = shallow(<BoxObjetive {...this.props} />);
      return this;
    };
  }

  const whenBoxObjetive = () => new BoxObjetiveTest();

  test("Debe tener un contenedor para el objetivo", () => {
    const expectedId = "#objContainer";
    whenBoxObjetive().isRendered().thenElement(expectedId).should().exist();
  });

  test("Debe tener una imagen de header del contenedor", () => {
    const expectedId = "#objImg";
    whenBoxObjetive().isRendered().thenElement(expectedId).should().exist();
  });

  test("Debe tener el objetivo pasado por prop", () => {
    const expectedId = "#objText";
    const text = "Objetivo test";
    const props = { text: text };
    whenBoxObjetive()
      .withProps(props)
      .isRendered()
      .thenElement(expectedId)
      .should()
      .containText(text);
  });
});
