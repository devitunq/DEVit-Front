import React from "react";
import { shallow } from "enzyme";
import FluentTest from "../../Utils/fluent-test";
import AuthOrGuest from "./AuthOrGuest";

describe("AuthOrGuest", () => {
  class AuthOrGuestTest extends FluentTest {
    isRendered = () => {
      this.wrapper = shallow(<AuthOrGuest />);
      return this;
    };
  }

  const whenAuthOrGuest = () => new AuthOrGuestTest();

  test("Debe tener un input para ingresar el nombre", () => {
    whenAuthOrGuest().isRendered().thenElement("#inputName").should().exist();
  });

  test("Debe tener un elemento para continuar", () => {
    whenAuthOrGuest().isRendered().thenElement("#nextInput").should().exist();
  });
});
