import React from 'react';
import { render, shallow } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Landing from './Landing';

describe('<Landing />', () => {
  it('renderiza el título correctamente', () => {
    const wrapper = shallow(<Landing />);
    const title = wrapper.find('.Titulo');
    expect(title.text()).toBe('Bienvenidos a VideoGames');
  });

  it('renderiza un componente Link con la prop "to" correcta', () => {
    const wrapper = shallow(<Landing />);
    const link = wrapper.find(Link);
    expect(link.prop('to')).toBe('/home');
  });

  it('renderiza un botón con el texto correcto', () => {
    const wrapper = shallow(<Landing />);
    const button = wrapper.find('.Boton');
    expect(button.text()).toBe('Página Principal');
  });

  it('renderiza un elemento h5 con el texto correcto', () => {
    const wrapper = shallow(<Landing />);
    const h5 = wrapper.find('.miniTitulo');
    expect(h5.text()).toBe('Presiona para ir');
  });
});