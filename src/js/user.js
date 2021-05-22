export default function healthDisplay(hero) {
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
