const ATTACK_VALUE = 10;
const STRONG_ATTACT_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  
  if (currentPlayerHealth > 0 && currentMonsterHealth <= 0) {
    alert('You won');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost');
  } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0) {
    alert('Everyone is dead');
  }
}

function attactMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACT') {
    maxDamage = ATTACT_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACT_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackedHandler() {
  attactMonster('ATTACT');
}

function strongAttacHandler() {
  attactMonster('STRONG_ATTACT')
}

function healPlayerHandler() {
  increasePlayerHealth(HEAL_VALUE);
  endRound();
}
attackBtn.addEventListener('click', attackedHandler);
strongAttactBtn.addEventListener('click', strongAttacHandler);
healBtn.addEventListener('click', healPlayerHandler);