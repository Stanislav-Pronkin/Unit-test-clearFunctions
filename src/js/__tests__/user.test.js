import healthDisplay from '../user';

test('display healths', () => {
  const hero = { name: 'Маг', health: 100 };
  const received = healthDisplay(hero);
  expect(received).toBe('healthy');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 51 };
  const received = healthDisplay(hero);
  expect(received).toBe('healthy');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 50 };
  const received = healthDisplay(hero);
  expect(received).toBe('wounded');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 16 };
  const received = healthDisplay(hero);
  expect(received).toBe('wounded');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 10 };
  const received = healthDisplay(hero);
  expect(received).toBe('critical');
});

test('display healths', () => {
  const hero = { name: 'Маг', health: 1 };
  const received = healthDisplay(hero);
  expect(received).toBe('critical');
});
