let computerMove = "";

let round = -1;
let computerScore = 0;
let yourScore = 0;

const showOptions = document.querySelectorAll(".option");

const displayYourScore = function (yourScore) {
  document.querySelector(".Yourscore").textContent = `Your score: ${yourScore}`;
  document.querySelector(
    ".computerScore"
  ).textContent = `Computer Score: ${computerScore}`;
};

const displayComputerScore = function (computerScore) {
  document.querySelector(".Yours").textContent = `Your Score: ${yourScore}`;

  document.querySelector(
    ".Computers"
  ).textContent = `Computer Score: ${computerScore}`;
};

const displayUserPick = function (pick) {
  document.querySelector(".human").textContent = `You chose: ${pick}`;
};

const displayComputerPick = function (CpuPick) {
  document.querySelector(
    ".computer"
  ).textContent = `Computer Chose: ${CpuPick}`;
};

const displayRoundWin = function (yourScore) {
  document.querySelector(
    ".roundYou"
  ).textContent = `You won with: ${yourScore} points`;
};

const displayComputerWin = function (computerScore) {
  document.querySelector(
    ".lossComputer"
  ).textContent = `The computer wins the round with: ${computerScore} points`;
};

displayYourScore(yourScore);

displayComputerScore(computerScore);

displayRoundWin(yourScore);

displayComputerWin(computerScore);

const displayMessage = function (message) {
  document.querySelector(".winner").textContent = message;
};

displayMessage("🤔 Who won");
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "Scissors";
  }
}

const computerWinModal = document.querySelector(".modal");

const youWinModal = document.querySelector(".humanModal");

const ItsATieModal = document.querySelector(".tieModal");

const background = document.querySelector(".overlay");

const roundModal = document.querySelector(".winRoundModal");

const compWinModal = document.querySelector(".lossRoundModal");

//Opening the how to play modal

const btnOpenRuleModal = document.querySelector(".howToModal");

const ruleModal = document.querySelector(".howToModal");

// function openRuleModal() {
//   document.querySelector(".howToModal").addEventListener("click", function () {
//     ruleModal.classList.remove("hidden");
//     background.classList.remove("hidden");
//   });
//   console.log("nnoooo!");
// }

document.querySelector(".howToPlay").addEventListener("click", function () {
  console.log("noooo!");
  ruleModal.classList.remove("hidden");
  background.classList.remove("hidden");
});
// openRuleModal();

// btnOpenRuleModal.addEventListener("click", openRuleModal);

// openRuleModal();

const closeRuleModal = function () {
  ruleModal.classList.add("hidden");
  background.classList.add("hidden");
};

const btnCloseRuleModal = document.querySelector(".closeRule");

btnCloseRuleModal.addEventListener("click", closeRuleModal);
background.addEventListener("click", closeRuleModal);

const openRoundModal = function () {
  roundModal.classList.remove("hidden");
  background.classList.remove("hidden");
};

const openComputerWinModal = function () {
  compWinModal.classList.remove("hidden");
  background.classList.remove("hidden");
};

const btnCloseRoundModal = document.querySelector(".closeRound");

const btnCloseCompWinModal = document.querySelector(".closeLoss");

const closeCompWinModal = function () {
  compWinModal.classList.add("hidden");
  background.classList.add("hidden");
};

btnCloseCompWinModal.addEventListener("click", closeCompWinModal);

background.addEventListener("click", closeCompWinModal);

const closeRoundModal = function () {
  roundModal.classList.add("hidden");
  background.classList.add("hidden");
};

const openComputerModal = function () {
  computerWinModal.classList.remove("hidden");
  background.classList.remove("hidden");
};

const openTieModal = function () {
  ItsATieModal.classList.remove("hidden");
  background.classList.remove("hidden");
};

const btnCloseTiemodal = document.querySelector(".closeTie");

const closeTiemodal = function () {
  ItsATieModal.classList.add("hidden");
  background.classList.add("hidden");
};

btnCloseTiemodal.addEventListener("click", closeTiemodal);

background.addEventListener("click", closeTiemodal);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape") {
    closeRoundModal();
    closeModalComp();
    closeModalYou();
    closeTiemodal();
    closeCompWinModal();
    closeRuleModal();
    console.log("yes");
  }
});

const openYourModal = function () {
  youWinModal.classList.remove("hidden");
  background.classList.remove("hidden");
};

const btncloseYourModal = document.querySelector(".closeYou");

const closeModalYou = function () {
  youWinModal.classList.add("hidden");
  background.classList.add("hidden");
};

btncloseYourModal.addEventListener("click", closeModalYou);

background.addEventListener("click", closeModalYou);

const btncloseComputerModal = document.querySelector(".closeComp");

const closeModalComp = function () {
  background.classList.add("hidden");
  computerWinModal.classList.add("hidden");
};

btncloseComputerModal.addEventListener("click", closeModalComp);

background.addEventListener("click", closeModalComp);

btnCloseRoundModal.addEventListener("click", closeRoundModal);
background.addEventListener("click", closeRoundModal);

function newRound(thisRound) {
  document.querySelector(".round").textContent = `Round: ${thisRound}`;
}

newRound(round);
const btnResetUser = document.querySelector(".resetUser");
const reseting = function () {
  document.querySelector(".resetUser").addEventListener("click", function () {
    yourScore = 0;
    computerScore = 0;

    closeModalComp();
    closeModalYou();
    closeTiemodal();
    closeCompWinModal();
    closeRoundModal();
  });

  newRound((round += 1));
};

btnResetUser.addEventListener("click", reseting);

reseting();

const btnResetCpu = document.querySelector(".resetCpu");
const resetingCpu = function () {
  document.querySelector(".resetCpu").addEventListener("click", function () {
    yourScore = 0;
    computerScore = 0;

    closeModalComp();
    closeModalYou();
    closeTiemodal();
    closeCompWinModal();
    closeRoundModal();
  });

  newRound((round += 1));
};

btnResetCpu.addEventListener("click", resetingCpu);

resetingCpu();

function theChoice() {
  document.querySelector(".rock").addEventListener("click", function () {
    document.querySelector(".message").textContent = "You picked : Rock";

    getComputerChoice();

    document.querySelector(
      ".label-score"
    ).textContent = `Computer picked: ${computerMove}`;
    if (computerMove === "Rock") {
      if (computerScore === 0 && yourScore === 0) {
        !openTieModal();
      } else if (computerScore > 0 || yourScore > 0) {
        displayMessage("👀🤝Its a tie");

        openTieModal();

        displayUserPick("Rock");
        displayComputerPick("Rock");
      }
      return computerScore, yourScore;
    } else if (computerMove === "Scissors") {
      displayMessage("🎉😄You win");

      openYourModal();

      displayYourScore((yourScore += 1));
      displayComputerScore(computerScore);

      return yourScore;
    } else if (computerMove === "Paper") {
      displayMessage("😥😩You lose");

      openComputerModal();

      displayComputerScore((computerScore += 1));
      displayYourScore(yourScore);

      console.log(computerMove);
      return computerScore;
    }
  });

  document.querySelector(".paper").addEventListener("click", function () {
    document.querySelector(".message").textContent = "You picked : Paper";

    getComputerChoice();

    document.querySelector(
      ".label-score"
    ).textContent = `Computer picked: ${computerMove}`;

    if (computerMove === "Rock") {
      displayMessage("🎉😄You Win");

      openYourModal();

      displayYourScore((yourScore += 1));
      displayComputerScore(computerScore);

      return yourScore;
    } else if (computerMove === "Paper") {
      if (computerScore === 0 && yourScore === 0) {
        !openTieModal();
      } else if (computerScore > 0 || yourScore > 0) {
        displayMessage("👀🤝Its a tie");

        openTieModal();

        displayUserPick("Paper");
        displayComputerPick("Paper");
      }
    } else if (computerMove === "Scissors") {
      displayMessage("😥😩You Lose");

      openComputerModal();

      displayComputerScore((computerScore += 1));
      displayYourScore(yourScore);
      console.log(computerMove);
      return computerScore;
    }
  });

  document.querySelector(".scissors").addEventListener("click", function () {
    document.querySelector(".message").textContent = "You picked : Scissors";

    getComputerChoice();

    document.querySelector(
      ".label-score"
    ).textContent = `Computer picked: ${computerMove}`;

    if (computerMove === "Rock") {
      displayMessage("😥😩You Lose");

      openComputerModal();

      displayComputerScore((computerScore += 1));
      displayYourScore(yourScore);

      return computerScore;
    } else if (computerMove === "Paper") {
      displayMessage("🎉😄You win");

      openYourModal();
      displayYourScore((yourScore += 1));
      displayComputerScore(computerScore);

      return yourScore;
    } else if (computerMove === "Scissors") {
      if (computerScore === 0 && yourScore === 0) {
        !openTieModal();
      } else if (computerScore > 0 || yourScore > 0) {
        displayMessage("👀🤝Its a tie");

        openTieModal();

        displayUserPick("Scissors");
        displayComputerPick("Scissors");
      }
      console.log(computerScore);
    }
    console.log(computerScore);
    return computerScore;
  });

  for (let i = 0; i < showOptions.length; i++)
    showOptions[i].addEventListener("click", function choose() {
      console.log(computerScore);
      console.log(yourScore);
      if (yourScore > computerScore && yourScore >= 4) {
        console.log(yourScore);
        openRoundModal();
        closeModalYou();
        closeModalComp();

        displayRoundWin(yourScore);

        yourScore = 0;
        computerScore = 0;
      } else if (computerScore > yourScore && computerScore >= 4) {
        openComputerWinModal();
        closeModalComp();
        closeModalYou();

        displayComputerWin(computerScore);

        yourScore = 0;
        computerScore = 0;
      }
      console.log(`You: ${yourScore}`);
      console.log(`Computer: ${computerScore}`);
    });

  console.log(computerScore);
}

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`You rolled a ${dice}`);
//   }
// }

theChoice();
