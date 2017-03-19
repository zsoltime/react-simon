import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Button from 'Button';

describe('<Button />', () => {
  it('should exist', () => {
    expect(Button).toExist();
  });

  describe('render', () => {
    it('should display a button with the right class', () => {
      const color = 'red';
      const button = shallow(<Button color={color} handleClick={f => f} />);
      const actualButton = button.find('.button');

      expect(actualButton.hasClass(`button--${color}`)).toBe(true);
    });

    it('should have the correct data-color', () => {
      const color = 'red';
      const button = shallow(<Button color={color} handleClick={f => f} />);
      const actualButton = button.find(`.button[data-color="${color}"]`);

      expect(actualButton.length).toBe(1);
    });
  });

  describe('onClick', () => {
    it('should call a callback function on click', () => {
      const spy = expect.createSpy();
      const color = 'red';
      const button = shallow(<Button color={color} handleClick={spy} />);

      button.find('.button').simulate('click');

      expect(spy).toHaveBeenCalledWith(color);
    });
  });
});
