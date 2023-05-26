import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './Home';
import CardsContainer from '../../Componentes/Cards/CardsContainer/CardsContainer';
import SearchBar from '../../Componentes/SearchBar/SearchBar/SearchBar';
import { getVideoGames } from '../../redux/ActionsGames/getVideoGames';
import { getGenres } from '../../redux/ActionsGenres/getGenres';

// JestMock simula las acciones
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}));

jest.mock('../../redux/ActionsGames/getVideoGames', () => ({
  getVideoGames: jest.fn()
}));

jest.mock('../../redux/ActionsGenres/getGenres', () => ({
  getGenres: jest.fn()
}));

describe('<Home />', () => {
  let dispatchMock;
  let useSelectorMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    useSelectorMock = jest.fn();
    useSelector.mockReturnValue(useSelectorMock);
  });

  it('despacha las acciones getVideoGames y getGenres al montarse', () => {
    shallow(<Home />);

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(getVideoGames).toHaveBeenCalled();
    expect(getGenres).toHaveBeenCalled();
  });

  it('renderiza los componentes SearchBar y CardsContainer', () => {
    useSelectorMock.mockReturnValue([]);

    const wrapper = shallow(<Home />);

    expect(wrapper.find(SearchBar)).toHaveLength(1);
    expect(wrapper.find(CardsContainer)).toHaveLength(1);
  });
});