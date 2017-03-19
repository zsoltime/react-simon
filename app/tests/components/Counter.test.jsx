import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Counter from 'Counter';

describe('<Counter />', () => {
  it('should exist', () => {
    expect(Counter).toExist();
  });

  describe('render', () => {
    it('should display two digit numbers', () => {
      const count = 12;
      const counter = shallow(<Counter count={count} />);
      const actualNumber = counter.find('.counter').text();

      expect(actualNumber).toEqual(count);
    });

    it('should display one digit numbers w/ leading zero', () => {
      const count = 3;
      const counter = shallow(<Counter count={count} />);
      const actualNumber = counter.find('.counter').text();

      expect(actualNumber).toBe(`0${count}`);
    });
  });
});
