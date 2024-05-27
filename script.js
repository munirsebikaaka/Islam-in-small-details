"use strict";

const allAllahNames = {
  names: [
    "ALLAH",
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
    "He is Allah besides him no god",
    "The most gracious",
    "the most mercefull",
    "the king",
    "the pure one",
    "the altmate provider of peace",
    "the gudian of faith",
    "the preserver",
    "the almighty",
    "the compeller",
    "the greatest",
    "the creator",
    "the maker of order",
    "the shaper of beauty",
    "the forgiving",
    "the subduer",
    "the giver of all",
    "the sustainer",
    "the opener",
    "the knower of all",
    "the constrictor",
    "the reliever",
    "the abaser",
    "the exalter",
    "the bestower of honor",
    "the humiliator",
    "the hearer of all",
    "the seer of all",
    "the judge",
    "the just",
    "the subtle one",
    "the all-aware",
    "the forebearing",
    "the magnifient",
    "The forgiver",
    "The higest",
    "the greatest",
    "the preserver",
    "the nourisher",
    "the acounter",
    "The mighty",
    "the generous",
    "the watchful one",
    "the responder of prayers",
    "the all-Comprehending",
  ],
};
const prophetName = {
  names: [
    "Muhammad",
    "Ahmad",
    "Hammid",
    "Mahmud",
    "qasim",
    "faateh",
    "agib",
    "shahid",
    "hashid",
    "rashid",
  ],
  translation: [
    "Highly praised",
    "the most commendable",
    "praising",
    "praised",
    "a distributor",
    "the victor",
    "the latest",
    "the witness",
    "the gatherer",
    "the guide",
  ],
};
const typesOfDhikar = {
  dhikarList: [
    "Subuhaana-Allah",
    "Walhamudu-Lillah",
    "Walaa-Illaha-Illa-llah",
    "Allahu Akbar",
    "Alhamudulillah",
  ],
  times: [30, 35, 36, 100, 150],
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
    "al-Asar",
    "sunset",
    "al-Maghrid",
    "al-Isha",
  ],
  timesPerSalah: [
    "04:40am",
    "06:01am",
    "12:36pm",
    "03:53pm",
    "04:10pm",
    "07:10pm",
    "07:10pm",
    "08:31pm",
  ],
  minutes: ["mints", "mints", "mints", "mints"],
};

const cotrolButtons = {
  closeSalahBtn: ".btn-close-salah",
  openWindowCell: ".window-btn-open",
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
  abountMonth: ".about-monthEn",
  remain: "remain",
  aboutAllahNames: ".about-Allah-names",
};
const inputDhikarSavedIdUl = document.querySelector(
  controlBodyApp.inputDhikarUl
);
const windowCard = document.querySelector(controlBodyApp.windowCardCell);
const overlayCheck = document.querySelector(controlBodyApp.overlayCheckCell);
const internationalTime = document.querySelector(controlBodyApp.abountMonth);
const remainTime = document.querySelector(controlBodyApp.remain);
const secAllahNames = document.querySelector(controlBodyApp.aboutAllahNames);
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
const displayCurentTime = document.querySelector(".curent-time");
const x = document.querySelector(".times-cell");
const appSetCell = document.querySelector(".app-setting ");
const btnSalahLearning = document.querySelector(".salah-learning-btn");
const salahLearningCell = document.querySelector(".salah-learning");
const closeSalahLearning = document.querySelector(".close-salah-learning");
const btnCloseSettings = document.querySelector(".close-settings");
const fullNoteMsg = document.querySelectorAll(".full-note");
const NoteMsg = document.querySelector(".note-message");
const NoteMsg2 = document.querySelector(".note-message2");
const btnCancel = document.querySelectorAll(".btn-cancel");
const timeLeft = document.querySelector(".remain");

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
    <p class="icon"><ion-icon name="sunny"></ion-icon>
    </p>
    <div class="salah-cells">
      <button class="btn salah-name">${el}</button>
      <p class=" salah-name timepersalah">${times}</p>
    </div>
    <button class="btn icon btn-cancel">Cancel</button>
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
    minutes.insertAdjacentHTML(
      "beforebegin",
      `
    <div class="times2">
     <p class="mint">${i + 1} ${el}</p>
    </div>
    `
    );
  });
}
chooseTime(salahObj.minutes);
/////////////////////////////////////////////////

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
  btnCloseSettings.addEventListener("click", function () {
    workingWithClassesADD(appSetCell, appBody);
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

function countDhikar() {
  btnstartDhikar.addEventListener("click", () => {
    time++;
    inputDhikar.value = time;
  });
  btnRestartDhikar.addEventListener("click", () => {
    time = 0;
    inputDhikar.value = 0;
  });
}
countDhikar();

function allAboutNamesAndListsCellFunction() {
  function allAboutNamesAndLists(
    btnClicked,
    addClass,
    removeClass,
    btnPrimary,
    btnTatiary
  ) {
    btnClicked.addEventListener("click", () => {
      addClass.classList.add("hidden");
      removeClass.classList.remove("hidden");
      btnPrimary.style.color = "var(--primary-color)";
      btnTatiary.style.color = "var(--terciary-color)";
    });
  }
  document
    .querySelector(".dhikar-list-both-cell")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("dhikar-list-both-saved")) {
        const btnSavedList = e.target;
        allAboutNamesAndLists(
          btnSavedList,
          dhikarListUnsaved,
          saveddhikarLISTCell,
          btnSavedList,
          unsaved
        );
      } else if (e.target.classList.contains("dhikar-list-both-list")) {
        const btnMainList = e.target;
        allAboutNamesAndLists(
          btnMainList,
          saveddhikarLISTCell,
          dhikarListUnsaved,
          btnMainList,
          saved
        );
      }
    });

  document
    .querySelector(".Allah-prophet-names")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("prophet-names")) {
        const btnProphet = e.target;
        allAboutNamesAndLists(
          btnProphet,
          allAboutAllahNames,
          allAboutProphNames,
          btnProphet,
          btnAllah
        );
      } else if (e.target.classList.contains("Allah-names")) {
        const btnAllah = e.target;
        allAboutNamesAndLists(
          btnAllah,
          allAboutProphNames,
          allAboutAllahNames,
          btnAllah,
          btnProphet
        );
      }
    });
}
allAboutNamesAndListsCellFunction();

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

NoteMsg2.classList.add("hidden");
let timeFuctionallity = true;
btnCancel.forEach((el) => {
  el.addEventListener("click", () => {
    timeFuctionallity = false;
  });
});
const aboutReminderCellAllFunctionallityFinished = function () {
  let FirstTime = 60;
  let secTime = 30;
  let thirdTime = 6;
  let fourthTime = 2;
  let fifthTime = 4;

  function tryKeepCodeDry(
    time,
    clearedFuction,
    calledFunction,
    message = [firstMessage, lastMessage]
  ) {
    let minutesCount = String(Math.trunc(time / 60)).padStart(2, 0);
    // console.log("unfishedd");
    // let hour = String(Math.trunc(minutesCount / 60)).padStart(2,0);
    let secondsCount = String(Math.trunc(time % 60)).padStart(2, 0);
    timeLeft.textContent = `${minutesCount}:${secondsCount}`;
    fullNoteMsg.forEach((el) =>
      el.addEventListener("click", () => {
        NoteMsg.classList.add("hidden");
        // NoteMsg2.classList.remove("hidden");
      })
    );
    if (time < 1) {
      clearInterval(clearedFuction);
      calledFunction();
      NoteMsg.textContent = message[0];
      NoteMsg2.textContent = message[1];

      NoteMsg.style.backgroundColor = "red";
    }
  }

  function na() {}
  function fifthTimeIn() {
    if (timeFuctionallity) {
      const int5 = setInterval(function () {
        tryKeepCodeDry(fifthTime, int5, na, [
          `Time for salat ${salahObj.salah[6]}`,
          `Its ${displayCurentTime.textContent} and its Time for salat ${salahObj.salah[6]} `,
        ]);
        fifthTime--;
      }, 1000);
    } else {
      na();
    }
  }

  function forthTimeIn() {
    if (timeFuctionallity) {
      const int4 = setInterval(function () {
        tryKeepCodeDry(fourthTime, int4, fifthTimeIn, [
          `Time for salat ${salahObj.salah[5]}`,
          `Its ${displayCurentTime.textContent} and its Time for salat ${salahObj.salah[5]} `,
        ]);
        fourthTime--;
      }, 1000);
    } else {
      fifthTimeIn();
    }
  }

  function thirdTimeIn() {
    if (timeFuctionallity) {
      const int3 = setInterval(function () {
        tryKeepCodeDry(thirdTime, int3, forthTimeIn, [
          `Time for salat ${salahObj.salah[3]}`,
          `Its ${displayCurentTime.textContent} and its Time for salat ${salahObj.salah[3]} `,
        ]);
        thirdTime--;
      }, 1000);
    } else {
      forthTimeIn();
    }
  }

  function secTimeIn() {
    if (timeFuctionallity) {
      const int2 = setInterval(function () {
        tryKeepCodeDry(secTime, int2, thirdTimeIn, [
          `Time for salat ${salahObj.salah[2]}`,
          `Its ${displayCurentTime.textContent} and its Time for salat ${salahObj.salah[2]} `,
        ]);
        secTime--;
      }, 1000);
    } else {
      thirdTimeIn();
    }
  }

  function makeCounter() {
    if (timeFuctionallity) {
      const int = setInterval(function () {
        tryKeepCodeDry(FirstTime, int, secTimeIn, [
          `Time for salat ${salahObj.salah[0]}`,
          `Its ${displayCurentTime.textContent} and its Time for salat ${salahObj.salah[0]} `,
        ]);
        FirstTime--;
      }, 1000);
    } else {
      secTimeIn();
    }
  }
  makeCounter();
};
aboutReminderCellAllFunctionallityFinished();

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
