import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import FluentTest from './Utils/fluent-test';


//Este no estaría funcionando por culpa de ReactGA, revisar...
describe('App', () => {
  class AppTest extends FluentTest {
    constructor() {
      super();
    }

    isRendered = () => {
      this.wrapper = shallow(<App />);

      return this;
    };
  }

  const whenApp = () => new AppTest();

  test('debe tener un componente Header.', () => {
    whenApp()
      .isRendered()
      .thenElement('Header')
      .should()
      .exist();
  });

  test('debe tener un componente About.', () => {
    whenApp()
      .isRendered()
      .thenElement('About')
      .should()
      .exist();
  });
});