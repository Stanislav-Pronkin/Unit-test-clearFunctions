import { healthDisplay, loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});


test('save user', () => {
  expect(() => saveUser()).toThrow('Unimplemented');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 100 };
  const received = healthDisplay(hero);
  expect(received).toEqual('healthy');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 51 };
  const received = healthDisplay(hero);
  expect(received).toEqual('healthy');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 50 };
  const received = healthDisplay(hero);
  expect(received).toEqual('wounded');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 16 };
  const received = healthDisplay(hero);
  expect(received).toEqual('wounded');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 10 };
  const received = healthDisplay(hero);
  expect(received).toEqual('critical');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 1 };
  const received = healthDisplay(hero);
  expect(received).toEqual('critical');
});
