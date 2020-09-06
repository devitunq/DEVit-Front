class ElementEventContext {
  constructor(element, parentContext) {
    this.isClicked = () => {
      element.simulate('click');
      parentContext.wrapper.update();

      return parentContext;
    };

    this.hasValueSetTo = newValue => {
      element.simulate('change', newValue);
      parentContext.wrapper.update();

      return parentContext;
    };

    this.getsFocus = () => {
      element.prop('onFocus')();
      parentContext.wrapper.update();

      return parentContext;
    };

    this.losesFocus = () => {
      element.simulate('blur');
      parentContext.wrapper.update();

      return parentContext;
    };

    this.triggersEvent = (propName, value) => {
      element.prop(propName)(value);
      parentContext.wrapper.update();

      return parentContext;
    };
  }
}

class PropertyAssertionContext {
  constructor(elementUnderTest, propName) {
    this.equalTo = propVal => {
      if (propVal instanceof Date) {
        const currentPropVal = elementUnderTest.prop(propName);
        expect(
          currentPropVal.getFullYear() === propVal.getFullYear() &&
            currentPropVal.getMonth() === propVal.getMonth() &&
            currentPropVal.getDate() === propVal.getDate()
        ).toBe(true);
      } else {
        expect(elementUnderTest.prop(propName)).toEqual(propVal);
      }
    };

    this.thatSatisfies = propertyPredicate => {
      expect(propertyPredicate(elementUnderTest.prop(propName))).toBe(true);
    };

    this.thatExists = () => {
      expect(elementUnderTest.prop(propName)).toBeDefined();
    };
  }
}

class ElementAssertionContext {
  constructor(elementUnderTest) {
    this.exist = () => {
      expect(elementUnderTest.exists()).toBe(true);
    };

    this.notExist = () => {
      expect(elementUnderTest.exists()).toBe(false);
    };

    this.haveProperty = propName =>
      new PropertyAssertionContext(elementUnderTest, propName);

    this.haveNonDOMChild = selector => {
      const nonDOMChild = elementUnderTest.dive().find(selector);

      return {
        thatExists: () => new ElementAssertionContext(nonDOMChild).exist(),
        withProperty: propName =>
          new PropertyAssertionContext(nonDOMChild, propName)
      };
    };

    this.haveNumInstances = num => {
      expect(elementUnderTest.length).toEqual(num);
    };

    this.containText = text => {
      expect(elementUnderTest.contains(text)).toBe(true);
    };

    this.containElement = selector => {
      expect(elementUnderTest.find(selector).exists()).toBe(true);
    };
  }
}

class TextAssertionContext {
  constructor(renderedText) {
    this.equalTo = textVal => {
      expect(renderedText).toEqual(textVal);
    };
  }
}

class DependencyAssertionContext {
  constructor(dependency) {
    this.once = () => {
      expect(dependency).toHaveBeenCalledTimes(1);
    };

    this.with = (...expectedInputValues) => {
      expect(dependency).toHaveBeenCalledWith(...expectedInputValues);
    };

    this.lastWith = lastExpectedArg => {
      expect(dependency).toHaveBeenLastCalledWith(lastExpectedArg);
    };
  }
}

class FluentTest {
  withProps = props => {
    this.props = { ...this.props, ...props };
    return this;
  };

  withContext = context => {
    this.context = { ...this.context, ...context.context };

    jest.doMock(`../${context.contextFilePath}`, () => ({
      [context.contextName]: {
        Consumer: props => props.children(this.context)
      }
    }));
    this.ComponentWithContext = require.requireActual(
      `../${context.componentFilePath}`
    )[context.componentName];
    return this;
  };

  guardIsRenderedImplemented = () => {
    if (!this.wrapper) {
      throw new Error(
        'isRendered not implemented. Use isRender to instantiate shallow wrapper.'
      );
    }
  };

  selectElements = selector => {
    this.guardIsRenderedImplemented();
    const elements = this.store
      ? this.wrapper.dive().find(selector)
      : this.wrapper.find(selector);

    return elements;
  };

  and = selector => {
    this.guardIsRenderedImplemented();

    const element = selector ? this.wrapper.find(selector) : this.wrapper;
    if (!element) {
      throw new Error('Invalid selector used in and().');
    }

    const parentContext = this;
    return new ElementEventContext(element, parentContext);
  };

  thenElement = selector => {
    const elements = this.selectElements(selector);
    return {
      at: index => ({
        should: () => new ElementAssertionContext(elements.at(index))
      }),
      should: () => new ElementAssertionContext(elements)
    };
  };

  thenText = () => {
    const renderedText = this.wrapper.text();
    return {
      should: () => new TextAssertionContext(renderedText)
    };
  };

  thenElements = selector => {
    const elements = this.selectElements(selector);
    return {
      shouldAll: predicate => elements.everyWhere(predicate)
    };
  };

  shouldCall = dependency => new DependencyAssertionContext(dependency);

  shouldNotCall = dependency => {
    expect(dependency).not.toHaveBeenCalled();
  };
}

export default FluentTest;