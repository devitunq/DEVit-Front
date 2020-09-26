import React from "react";
import { shallow } from "enzyme";
import { Grid } from "@material-ui/core";
import FluentTest from "../../Utils/fluent-test";
import JoystickDisplay from "./JoystickDisplay";

describe("JoystickDisplay", () => {
  class JoystickDisplayTest extends FluentTest {
    constructor() {
      super();

      this.props = {
        displayContent: null,
      };
    }
    isRendered = () => {
      this.wrapper = shallow(<JoystickDisplay {...this.props} />);
      return this;
    };
  }

  const whenJoystickDisplay = () => new JoystickDisplayTest();

  test("Debe tener un grid para contener las instrucciones", () => {
    whenJoystickDisplay()
      .isRendered()
      .thenElement("#jdContainer")
      .should()
      .exist();
  });

  test("Debe renderizar el elemento pasado por prop dentro del grid", () => {
    const elemDisplay = <Grid item xs={2} id="testElem" key="testKey" />;
    const props = { displayContent: [elemDisplay] };

    whenJoystickDisplay()
      .withProps(props)
      .isRendered()
      .thenElement("#jdContainer")
      .should()
      .containElement("#testElem");
  });
});
