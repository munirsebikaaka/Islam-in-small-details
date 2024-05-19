"use strict";

const allAllahNames = {
  names: [
    "Allah",
    "AR-RAHMAN",
    "AR-RAHEEM",
    "AR-MALIK",
    "AR-QUDUS",
    "AL-SALAM",
    "AL-MU'MIN",
    "ALMUHAIMIN",
    "AL-AZIIZ",
    "AL-JABBAR",
    "AL-MUTAKABBIR",
    "AL-KHAALIQ",
    "AL-BAARI",
    "AL-MUSAWWIR",
    "AL-GHAFAR",
    "AL-QAHHAR",
    "AL-WAHHAAB",
    "AR-RAZZAKAQ",
    "AL-FATTAAH",
    "AL-ALEEM",
    "AL-QAABID",
    "AL-BAASIT",
    "AL-KHAAFIDH",
    "AR-RAAFI",
    "AL-MU'IZZ",
    "AL-MUZIL",
    "AS-SAMEE",
    "AL-BASEER",
    "AL-HAKAM",
    "AL-ADL",
    "AL-LATEEF",
    "AL-KHABEER",
    "AL-HALEEM",
    "AL-ATHEEM",
    "AL-GHAFOOR",
    "ASH-SHAKOOR",
    "AL-ALEE",
    "AL-KABEER",
    "AL-HAFEEDH",
    "AL-MUQEET",
    "AL-HASEEB",
    "AL-JALEEL",
    "AL-AKREEM",
    "AL-RAQEEB",
    "AL-MUJEEB",
  ],
  translation: [
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
    "Trunslation in english",
  ],
};
const prophetName = {
  names: ["names", "names", "names", "names", "names", "names", "names"],
  translation: ["trans", "trans", "trans", "trans", "trans", "trans", "trans"],
};
const typesOfDhikar = {
  dhikarList: [
    "arabic words",
    "arabic words",
    "arabic words",
    "arabic words",
    "arabic words",
  ],
  times: [30, 100, 36, 200, 150],
  savedDhikar: {
    saved: [],
  },
};
const kalmaReading = {
  position: [
    "First Kalma Tayyab",
    "Second Kalma Shahadaat",
    "Third Kalma Tumjeed",
    "Fourth Kalma Tauhid",
    "Fifth Kalma Istaghfar",
    "Sixth Kalma Rud-A-Kuffer",
  ],
  inArabic: [
    "in arabic",
    "in arabic",
    "in arabic",
    "in arabic",
    "in arabic",
    "in arabic",
  ],
  inEng: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi officia quod ipsa perspiciatis minus. ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi officia quod  ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi officia quod ipsa  dolorum ",
    "Lorem ipsum dolor sit amet consectetur dolorum praesentium harum id architecto illo odio cum minima!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi officia quod ipsa  laudantium dolorum  odio cum minima!",
    " Consectetur adipisicing elit. Ea commodi officia quod ipsa perspiciatis minus. Nulla nostrum, qui consectetur mollitia, ",
  ],
};
const salahObj = {
  salah: [
    "al-Fajir",
    "sunrise",
    "al-Dhuhar",
    ,
    "al-Asar",
    "sunset",
    "al-Maghrid",
    "al-Isha",
  ],
  timesPerSalah: [
    "00:00",
    "00:00",
    "00:00",
    "00:00",
    "00:00",
    "00:00",
    "00:00",
    "00:00",
  ],
  minutes: ["mints", "mints", "mints", "mints"],
};

const cotrolButtons = {
  closeSalahBtn: ".btn-close-salah",
  openWindowCell: ".window-btn",
  closeWindowCell: ".close-window",
  openNamesCell: ".about-names",
  openDikarAllCell: ".dhikars-list-all",
  closeDhikarCell: ".btn-close-all-dhikar",
  openTasmeeCell: ".tasmee-counter",
  openKalmaCell: ".kalma-reading-btn",
  btnCloseANDOpenSemiCells: {
    closeNames: ".close-btn",
    restartDhikar: "restart-dhikar",
    startDhikar: ".start-dhikar",
    closeDhikarWindow: ".close-dhikar-windows",
    saveDhikar: ".btn-dhikar-save",
    leaveSaved: ".btn-leave-saved-dhikar",
    closeKalma: ".close-kalma-btn",
    deleteSavedDhikarBtn: ".delete-list-el",
    cancelDhikarBtn: ".cancel-dhikar",
    savedBtn: "save",
    unsavedBtn: "unsaved",
  },
};
////////////////////////////////////////////////////////////////////////
const btnCloseSalah = document.querySelector(cotrolButtons.closeSalahBtn);
const openWindowBtn = document.querySelector(cotrolButtons.openWindowCell);
const btnAbaoutNames = document.querySelector(cotrolButtons.openNamesCell);
const btnAllDhikarTogether = document.querySelector(
  cotrolButtons.openDikarAllCell
);
const closeWindowBtn = document.querySelector(cotrolButtons.closeWindowCell);
const btnOpenTasmeeCounter = document.querySelector(
  cotrolButtons.openTasmeeCell
);
const btnCloseAllDhikar = document.querySelector(cotrolButtons.closeDhikarCell);
const btnOpenKalmaReadin = document.querySelector(cotrolButtons.openKalmaCell);
const openSalahCell = document.querySelector(".about-salah-time");
const btnOpenTime = document.querySelector(".mints");
const closeTime = document.querySelector(".set-salah");
const TimeCell = document.querySelector(".times-cell");
const setUp = document.querySelector(".btn-set-app");
///////////////////////////////////////////////////////////////////////////////
const btnCloseNames = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.closeNames
);
const btnRestartDhikar = document.getElementById(
  cotrolButtons.btnCloseANDOpenSemiCells.restartDhikar
);
const btnstartDhikar = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.startDhikar
);
const btnCloseDhikarWindow = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.closeDhikarWindow
);
const btnDhikarSave = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.saveDhikar
);
const btnLeaveSavedDhikar = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.leaveSaved
);
const btnCloseKalma = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.closeKalma
);
const saved = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.savedBtn
);
const unsaved = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.unsavedBtn
);
const btnDeleteSavedDhikar = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.deleteSavedDhikarBtn
);
const cancelDhikar = document.querySelector(
  cotrolButtons.btnCloseANDOpenSemiCells.cancelDhikarBtn
);

/////////////////////////////////////////////////////////////////////
const controlBodyApp = {
  inputDhikarUl: ".saved-dhikar-list-paper",
  windowCardCell: ".pro-section",
  overlayCheckCell: ".overlay",
};
const inputDhikarSavedIdUl = document.querySelector(
  controlBodyApp.inputDhikarUl
);
const windowCard = document.querySelector(controlBodyApp.windowCardCell);
const overlayCheck = document.querySelector(controlBodyApp.overlayCheckCell);
const internationalTime = document.querySelector(".about-monthEn");
const remainTime = document.querySelector(".remain");
const secAllahNames = document.querySelector(".about-Allah-names");
const secDhikar = document.querySelector(".about-dhikar");
const appBody = document.querySelector(".application-body");
const inputDhikar = document.getElementById("counter-dhikar");
const inputDhikarSaved = document.getElementById("saved-dhikar-input");

const tasmeeCounterHead = document.querySelector(".tasmee-counter-head");
const kalmaBody = document.querySelector(".all-kalma-readings");
const saveddhikarLISTCell = document.querySelector(".saved-dhikar-list-paper");
const dhikarListUnsaved = document.querySelector(".about-dhikar-body");
const allAboutAllahNames = document.querySelector(".about-Allah-names-cell");
const allAboutProphNames = document.querySelector(".about-prophet-names-cell");
const btnAllah = document.querySelector(".Allah-names");
const btnProphet = document.querySelector(".prophet-names");
const salahCell = document.querySelector(".getSalahALL");
const salahTimeAndTons = document.querySelector(".salah-time-cell-all");
const insideDhikar = document.querySelector(".inside-dhikar");
const savedDhikarCell = document.querySelector(".saved-dhikar-cell");
const allKalmaReadingCell = document.querySelector(".all-kalma-readings-cell");
const tasmeeCounterBody = document.querySelector(".tasmee-counter-body");
const minutes = document.querySelector(".times2");
const steps = document.querySelectorAll(".step-cell");
const btnRight = document.querySelector(".slide--right");
const btnLeft = document.querySelector(".slide--left");

let time = 0;

const allWindowActivitiesAdded = () => {
  const openWindow = () => {
    windowCard.classList.remove("hidden");
    overlayCheck.classList.remove("hidden");
  };
  const closeWidow = () => {
    windowCard.classList.add("hidden");
    overlayCheck.classList.add("hidden");
  };
  const useOverlayClose = () => {
    windowCard.classList.add("hidden");
    overlayCheck.classList.add("hidden");
    salahSettings.classList.add("hidden");
  };
  overlayCheck.addEventListener("click", useOverlayClose);
  openWindowBtn.addEventListener("click", openWindow);
  closeWindowBtn.addEventListener("click", closeWidow);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeWidow();
    }
  });
};
allWindowActivitiesAdded();

function getCuurrentDate() {
  const now = new Date();
  internationalTime.textContent = new Intl.DateTimeFormat().format(now);
}
getCuurrentDate();

const namesOfAllah = (obj) => {
  obj.names.forEach((el, i) => {
    const trans = obj.translation[i];
    secAllahNames.insertAdjacentHTML(
      "beforebegin",
      `
    <div class="about-Allah-names">
      <div>
        <h1 class="name">${el}</h1>
        <p class="trans-eng">${trans}</p>
    </div>
    <p class="trans-arabic">in arabic</p>
      </div>
    `
    );
  });
};
namesOfAllah(allAllahNames);
const allDhikar = (obj) => {
  obj.dhikarList.forEach((el, i) => {
    const times = obj.times[i];
    secDhikar.insertAdjacentHTML(
      "beforebegin",
      `
    <div class="about-dhikar">
      <div class="dhikar-list-element">
        <h1 class="name">${el}</h1>
        <p class="trans-arabic">${times}</p>
      </div>
    </div>
    `
    );
  });
};
allDhikar(typesOfDhikar);

const savedDhikarList = () => {
  let elementBody = inputDhikarSaved;
  const dhikar = elementBody.value;
  typesOfDhikar.savedDhikar.saved.push(dhikar);
  inputDhikarSavedIdUl.innerHTML += `
              <li class="saved-dhikar-list-element">
                <p class="el-list-dhikar">${dhikar}</p>
                <p class="times-per-dhikar">${inputDhikar.value}</p>
                <button class="btn delete-list-el" onclick="deleteSavedDhikar('${controlBodyApp.inputDhikarUl}', '${dhikar}')">Delete</button>
              </li>
  
  `;
  elementBody.value = "";
};

function updateUI(arr, ulEL) {
  let deletedUl = document.querySelector(ulEL);
  deletedUl.innerHTML = "";
  arr.forEach((dhikar) => {
    deletedUl.innerHTML += `
  <li class="saved-dhikar-list-element">
                <p class="el-list-dhikar">${dhikar}</p>
                <p class="times-per-dhikar">${inputDhikar.value}</p>
                <button class="btn delete-list-el" onclick="deleteSavedDhikar('${controlBodyApp.inputDhikarUl}', '${dhikar}')">Delete</button>
              </li>
  
  `;
  });
}

document.querySelector(".save-inputs ").addEventListener("click", function () {
  savedDhikarList();
});
savedDhikarList();
function deleteSavedDhikar(ulElement, dhikar) {
  if (ulElement === controlBodyApp.inputDhikarUl) {
    const index = typesOfDhikar.savedDhikar.saved.indexOf(dhikar);
    console.log(index);
    typesOfDhikar.savedDhikar.saved.splice(index, 1);
    updateUI(typesOfDhikar.savedDhikar.saved, controlBodyApp.inputDhikarUl);
  }
}

const makeKalmaPage = () => {
  kalmaReading.position.flatMap((el, i) => {
    const translation = kalmaReading.inEng[i];
    const kalmaHTMLStructure = `
    <div class="all-kalma-readings">
    <div class="kalmas">
     <h2 class="kalma-postion">${el}</h2>
      <h3 class="kalma-in-arabic">in arabic</h3>
     <h3 class="translate-kalma">translation in english</h3>
     <h2 class="kalma-in-english">
${translation}
     </h2>
    </div>
    </div>`;
    kalmaBody.insertAdjacentHTML("beforebegin", kalmaHTMLStructure);
  });
};
makeKalmaPage();
const allAboutProphetNames = (obj) => {
  obj.names.forEach((el, i) => {
    const namesTranslation = obj.translation[i];
    document.querySelector(".about-prophet-names").insertAdjacentHTML(
      "beforebegin",
      `
      <div class="about-prophet-names">
        <h1 class="name pro">${el}</h1>
        <p class="trans-eng pro">${namesTranslation}</p>
      </div>
    `
    );
  });
};

allAboutProphetNames(prophetName);
const salahCellFunc = (obj) => {
  obj.salah.forEach((el, i) => {
    const times = obj.timesPerSalah[i];
    const getHtmlStructureOfSalah = `
    <div class="getSalahALL">
    <p class="icon">icon</p>
    <div>
      <button class="btn salah-name">${el}</button>
      <p class="icon">${times}</p>
    </div>
    <button class="icon">btn</button>
  </div>
    `;
    salahCell.insertAdjacentHTML("beforebegin", getHtmlStructureOfSalah);
  });
};
salahCellFunc(salahObj);
///
const salahSettings = document.querySelector(".set-salah");
const allSallahsAcc = document.querySelectorAll(".salah-name");
const salahSetMsg = document.querySelector(".reminder-head");
////
allSallahsAcc.forEach((el) =>
  el.addEventListener("click", function () {
    salahSettings.classList.remove("hidden");
    overlayCheck.classList.remove("hidden");
    salahSetMsg.textContent = `set salat ${el.textContent} reminder`;
  })
);
document.querySelectorAll(".add-salah-func").forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target.classList.contains("dont-close")) {
      salahSettings.classList.add("hidden");
      overlayCheck.classList.add("hidden");

      console.log(e.target);
    }
  })
);

function chooseTime(obj) {
  obj.forEach((el, i) => {
    const mintsHtmlStructure = `
    <div class="times2">
     <p class="mint">${i + 1} ${el}</p>
    </div>
    
    `;
    minutes.insertAdjacentHTML("beforebegin", mintsHtmlStructure);
  });
}
chooseTime(salahObj.minutes);
/////////////////////////////////////////////////
const x = document.querySelector(".times-cell");
const appSetCell = document.querySelector(".app-setting ");
const btnSalahLearning = document.querySelector(".salah-learning-btn");
const salahLearningCell = document.querySelector(".salah-learning");
const closeSalahLearning = document.querySelector(".close-salah-learning");
/////////////////////////////////////////////////////
const completedWorkingWithClassesFuctionallity = () => {
  const sectionNames = document.querySelector(".setion-names");
  function workingWithClassesADD(addClass, removeClass) {
    addClass.classList.add("hidden");
    removeClass.classList.remove("hidden");
  }
  closeSalahLearning.addEventListener("click", function () {
    workingWithClassesADD(salahLearningCell, appBody);
  });
  btnSalahLearning.addEventListener("click", function () {
    workingWithClassesADD(appBody, salahLearningCell);
  });

  setUp.addEventListener("click", () => {
    workingWithClassesADD(appBody, appSetCell);
  });
  btnAllDhikarTogether.addEventListener("click", function () {
    workingWithClassesADD(tasmeeCounterHead, insideDhikar);
  });
  btnCloseSalah.addEventListener("click", function () {
    workingWithClassesADD(salahTimeAndTons, appBody);
  });
  btnCloseDhikarWindow.addEventListener("click", function () {
    workingWithClassesADD(tasmeeCounterBody, appBody);
  });
  btnCloseAllDhikar.addEventListener("click", function () {
    workingWithClassesADD(insideDhikar, tasmeeCounterHead);
  });
  btnLeaveSavedDhikar.addEventListener("click", function () {
    workingWithClassesADD(savedDhikarCell, tasmeeCounterHead);
  });

  btnDhikarSave.addEventListener("click", function () {
    workingWithClassesADD(tasmeeCounterHead, savedDhikarCell);
  });
  cancelDhikar.addEventListener("click", function () {
    workingWithClassesADD(savedDhikarCell, tasmeeCounterHead);
  });

  openSalahCell.addEventListener("click", () => {
    workingWithClassesADD(appBody, salahTimeAndTons);
  });
  //////
  btnOpenKalmaReadin.addEventListener("click", function () {
    workingWithClassesADD(appBody, allKalmaReadingCell);
  });
  btnCloseKalma.addEventListener("click", function () {
    workingWithClassesADD(allKalmaReadingCell, appBody);
  });
  btnAbaoutNames.addEventListener("click", () => {
    workingWithClassesADD(appBody, sectionNames);
  });
  btnCloseNames.addEventListener("click", function () {
    workingWithClassesADD(sectionNames, appBody);
  });
  ///////
  btnOpenTasmeeCounter.addEventListener("click", function () {
    workingWithClassesADD(appBody, tasmeeCounterBody);
  });
  btnOpenTime.addEventListener("click", function () {
    x.classList.remove("hidden");
  });
  TimeCell.addEventListener("click", function () {
    TimeCell.classList.add("hidden");
  });
  console.log("unfished", TimeCell.textContent);
  // closeTime.addEventListener("click", function () {
  //   x.classList.add("hidden");
  // });
};
completedWorkingWithClassesFuctionallity();
btnstartDhikar.addEventListener("click", () => {
  time++;
  inputDhikar.value = time;
});
btnRestartDhikar.addEventListener("click", () => {
  time = 0;
  inputDhikar.value = 0;
});

document
  .querySelector(".dhikar-list-both-cell")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("dhikar-list-both-saved")) {
      const btnSavedList = e.target;
      btnSavedList.addEventListener("click", function () {
        dhikarListUnsaved.classList.add("hidden");
        saveddhikarLISTCell.classList.remove("hidden");
        btnSavedList.style.color = "var(--primary-color)";
        unsaved.style.color = "var(--terciary-color)";
      });
    } else if (e.target.classList.contains("dhikar-list-both-list")) {
      const btnMainList = e.target;
      btnMainList.addEventListener("click", function () {
        saveddhikarLISTCell.classList.add("hidden");
        dhikarListUnsaved.classList.remove("hidden");
        btnMainList.style.color = "var(--primary-color)";
        saved.style.color = "var(--terciary-color)";
      });
    }
  });
document
  .querySelector(".Allah-prophet-names")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("prophet-names")) {
      const btnProphet = e.target;
      btnProphet.addEventListener("click", () => {
        allAboutAllahNames.classList.add("hidden");
        allAboutProphNames.classList.remove("hidden");
        btnProphet.style.color = "var(--primary-color)";
        btnAllah.style.color = "var(--terciary-color)";
      });
    } else if (e.target.classList.contains("Allah-names")) {
      const btnAllah = e.target;
      console.log(btnAllah);
      btnAllah.addEventListener("click", () => {
        allAboutAllahNames.classList.remove("hidden");
        allAboutProphNames.classList.add("hidden");
        btnAllah.style.color = "var(--primary-color)";
        btnProphet.style.color = "var(--terciary-color)";
      });
    }
  });
const timeLeft = document.querySelector(".remain");
const displayCurentTime = document.querySelector(".curent-time");
console.log(displayCurentTime.textContent);
function getCurrentTimeCompletedFuctionallity() {
  setInterval(function () {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, 0);
    const minutes = String(now.getMinutes()).padStart(2, 0);
    const seconds = String(now.getSeconds()).padStart(2, 0);
    displayCurentTime.textContent = `${hour}:${minutes}:${seconds}`;
  }, 1000);
}
getCurrentTimeCompletedFuctionallity();

const fullNoteMsg = document.querySelector(".full-note");
const NoteMsg = document.querySelector(".note-message");
const aboutRemonderCellMissingOneFunctionallity = function () {
  let FirstTime = 4;
  let secTime = 3;
  let thirdTime = 5;
  let fourthTime = 2;
  let fifthTime = 4;
  function tryKeepCodeDry(
    time,
    clearedFuction,
    calledFunction,
    message = [firstMessage, lastMessage]
  ) {
    let minutesCount = Math.trunc(time / 60);
    let secondsCount = Math.trunc(time % 60);
    timeLeft.textContent = `${minutesCount}:${secondsCount}`;
    if (time < 1) {
      clearInterval(clearedFuction);
      calledFunction();
      console.log(
        "unfished updates wainting the seniors to tell me how exactly to do it, i want to change the message if a user clicks on the full athan button he should recieve full message"
      );
      NoteMsg.textContent = message[0];
      NoteMsg.style.backgroundColor = "red";

      fullNoteMsg.addEventListener("click", (e) => {
        if (e.target.classList.contains("full-note")) {
          message.splice(0, 1);
          NoteMsg.textContent = message[0];
        }
      });
    }
  }
  function na(params) {}
  function fifthTimeIn() {
    const int5 = setInterval(function () {
      tryKeepCodeDry(fifthTime, int5, na, [
        "fith time over",
        "secondeeeeeeeeeeeeeeeeeeeeeeeeeee",
      ]);
      fifthTime--;
    }, 1000);
  }

  function forthTimeIn() {
    const int4 = setInterval(function () {
      tryKeepCodeDry(fourthTime, int4, fifthTimeIn, [
        "forth time over",
        "seconddddddddddddddddddddddddddddddddddd",
      ]);
      fourthTime--;
    }, 1000);
  }

  function thirdTimeIn() {
    const int3 = setInterval(function () {
      tryKeepCodeDry(thirdTime, int3, forthTimeIn, [
        "third time over",
        "secondccccccccccccccccccccccccccccccc",
      ]);
      thirdTime--;
    }, 1000);
  }
  function secTimeIn() {
    const int2 = setInterval(function () {
      tryKeepCodeDry(secTime, int2, thirdTimeIn, [
        "second time over",
        "secondbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      ]);
      secTime--;
    }, 1000);
  }

  function makeCounter() {
    const int = setInterval(function () {
      tryKeepCodeDry(FirstTime, int, secTimeIn, [
        "first time over",
        "secondaaaaaaaaaaaaaaaaaaaaa",
      ]);
      FirstTime--;
    }, 1000);
  }
  makeCounter();
};
aboutRemonderCellMissingOneFunctionallity();

function completeTheSliderCellFunctuion() {
  steps.forEach((step, i) => {
    step.style.transform = `translateX(${100 * i}%)`;
  });
  let curValue = 0;
  let maxLength = steps.length - 1;

  btnRight.addEventListener("click", function () {
    if (curValue === maxLength) {
      curValue = 0;
    }
    curValue++;
    steps.forEach((step, i) => {
      step.style.transform = `translateX(${100 * (i - curValue)}%)`;
    });
  });
  btnLeft.addEventListener("click", function () {
    if (curValue === 0) {
      curValue = maxLength;
    } else {
      curValue--;
    }
    steps.forEach((step, i) => {
      step.style.transform = `translateX(${100 * (i - curValue)}%)`;
    });
  });
}
completeTheSliderCellFunctuion();
