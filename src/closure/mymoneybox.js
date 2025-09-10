// 📌 MoneyBox con Closures
// Cada instancia de moneyBox mantiene su propio estado (saveCoins)

function moneyBox() {
  let saveCoins = 0; // estado privado
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // 5
myMoneyBox(5); // 10
myMoneyBox(15); // 25

const moneyBoxAna = moneyBox();
moneyBoxAna(10); // 10
moneyBoxAna(20); // 30
moneyBoxAna(5); // 35
