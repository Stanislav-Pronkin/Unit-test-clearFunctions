import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export function healthDisplay(hero) {
  let levelHealth;
  if (hero) {
    if (hero.health > 50) {
      levelHealth = 'healthy';
    } else if (hero.health >= 15 && hero.health <= 50) {
      levelHealth = 'wounded';
    } else if (hero.health >= 1 && hero.health < 15) {
      levelHealth = 'critical';
    }
  }
  return levelHealth;
}
