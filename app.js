const diceButton = document.getElementById("dice");
diceButton.addEventListener("click", rollDice);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetBets);

const resultImg = document.querySelectorAll(".result img");

const options = document.querySelectorAll(".option");
options.forEach((option) => option.addEventListener("click", placeBet));

let bets = [];

function setBet(face) {
  if (bets.length < 3) {
    bets.push(face);
    document.getElementById('results').innerText = 'Bạn đã đặt cược vào các mặt: ' + bets.join(', ');
  } else {
    document.getElementById('results').innerText = 'Bạn đã đặt đủ 3 mặt. Hãy quay xúc xắc!';
  }
}

function rollDice() {
  if (bets.length !== 3) {
    document.getElementById('results').innerText = 'Vui lòng đặt cược vào 3 mặt trước khi quay xúc xắc.';
    return;
  }
}


const img = [
    "bau.png",
    "cua.png",
    "ga.png",
    "ca.png",
    "huou.png",
    "tom.png"
];

function randomImage() {
    return img[Math.floor(Math.random() * img.length)];
}

let isRolling = false;
function rollDice() {
    if (isRolling) return;
    isRolling = true;
    diceButton.disabled = true;
    resetButton.disabled = true;
    options.forEach((option) => (option.style.pointerEvents = "none"));
    
    let i = 0;
    const interval = setInterval(() => {
        resultImg.forEach((img) => (img.src = `./baucua/${randomImage()}`));
        i++;
        if (i >= 100) {
            clearInterval(interval);
            isRolling = false;
            diceButton.disabled = false;
            resetButton.disabled = false;
            options.forEach((option) => (option.style.pointerEvents = "auto"));
        }
    }, 50);
}
const diceRolls = [dice1, dice2, dice3];
let correctBets = 0;

for (let i = 0; i < 3; i++) {
  if (diceRolls.includes(bets[i])) {
    correctBets++;
  }
}

if (correctBets === 3) {
  document.getElementById('results').innerText = 'Bạn đã thắng! Các giá trị xúc xắc là:' [dice1, dice2, dice3].join(', ');
} else {
  document.getElementById('results').innerText = 'Bạn đã thua! Các giá trị xúc xắc là: ' [dice1, dice2, dice3].join(', ');
}

function resetBets() {
    bets = [];
    document.getElementById('results').innerText = 'Bạn đã xóa mọi cược.';
}
document.getElementById('dice1').innerHTML = `<img src="./baucua/${diceRoll1}.png" alt="./baucua/ ${diceRoll1}">`;
document.getElementById('dice2').innerHTML = `<img src="./baucua/${diceRoll2}.png" alt="./baucua/ ${diceRoll2}">`;
document.getElementById('dice3').innerHTML = `<img src="./baucua/${diceRoll3}.png" alt="./baucua/ ${diceRoll3}">`;