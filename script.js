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
////////////////////////////////////////////////////////////////////////
const openWindowBtn = document.querySelector(".window-btn");
const btnAbaoutNames = document.querySelector(".about-names");
const btnCloseNames = document.querySelector(".close-btn");
const btnRestartDhikar = document.getElementById("restart-dhikar");
const btnAllDhikarTogether = document.querySelector(".dhikars-list-all");
const btnstartDhikar = document.querySelector(".start-dhikar");
const closeWindowBtn = document.querySelector(".close-window");
const btnOpenTasmeeCounter = document.querySelector(".tasmee-counter");
const btnCloseDhikarWindow = document.querySelector(".close-dhikar-windows");
const btnCloseAllDhikar = document.querySelector(".btn-close-all-dhikar");
const btnDhikarSave = document.querySelector(".btn-dhikar-save");
const btnLeaveSavedDhikar = document.querySelector(".btn-leave-saved-dhikar");

/////////////////////////////////////////////////////////////////////
const windowCard = document.querySelector(".pro-section");
const overlayCheck = document.querySelector(".overlay");
const internationalTime = document.querySelector(".about-monthEn");
const remainTime = document.querySelector(".remain");
const secAllahNames = document.querySelector(".about-Allah-names");
const secDhikar = document.querySelector(".about-dhikar");
const appBody = document.querySelector(".application-body");
const inputDhikar = document.getElementById("input-dhikar");
const inputDhikarSaved = document.getElementById("saved-dhikar-input");
const inputDhikarSavedIdUl = document.querySelector(".saved-dhikar-list-paper");
const tasmeeCounterHead = document.querySelector(".tasmee-counter-head");

//////////////////////////////////////////////////////////////////////////
let time = 0;
//////////////////////////////////////////////////////////////////////////
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
  const date = String(now.getDate()).padStart(2, 0);
  const month = String(now.getMonth() + 1).padStart(2, 0);
  const year = now.getFullYear();
  //   internationalTime.textContent = `${date}/${month}/${year}`;
  internationalTime.textContent = new Intl.DateTimeFormat().format(now);
}

const namesOfAllah = (obj) => {
  obj.names.forEach((el, i) => {
    const trans = obj.translation[i];
    const getHtmlStructure = `
    <div class="about-Allah-names">
      <div>
        <h1 class="name">${el}</h1>
        <p class="trans-arabic">in arabic</p>
      </div>
      <p class="trans-eng">${trans}</p>
    </div>
    `;
    secAllahNames.insertAdjacentHTML("beforebegin", getHtmlStructure);
  });
};
namesOfAllah(allAllahNames);
const allDhikar = (obj) => {
  obj.dhikarList.forEach((el, i) => {
    const times = obj.times[i];
    const getHtmlStructure = `
    <div class="about-dhikar">
      <div>
        <h1 class="name">${el}</h1>
        <p class="trans-arabic">${times}</p>
      </div>
    </div>
    `;
    secDhikar.insertAdjacentHTML("beforebegin", getHtmlStructure);
  });
};
allDhikar(typesOfDhikar);

const savedDhikarList = () => {
  let elementBody = inputDhikarSaved;
  const child = elementBody.value;
  typesOfDhikar.savedDhikar.saved.push(child);
  console.log(typesOfDhikar.savedDhikar.saved);
  inputDhikarSavedIdUl.innerHTML += `
              <li class="saved-dhikar-list-element">
                <p class="el-list-child">${child}</p>
                <p class="times-per-dhikar">3000</p>
                <button class="btn delete-list-el">del</button>
              </li>
  
  `;
  elementBody.value = "";
};
document
  .querySelector(".btn-add-dhikar-tolist")
  .addEventListener("click", savedDhikarList);
////////////////////////////////////////////////////////////////////////
function aboutWindows() {
  function closeNames() {
    document.querySelector(".setion-names").classList.add("hidden");
    appBody.classList.remove("invisible");
  }

  function openTasmeeCounter() {
    document.querySelector(".tasmee-counter-body").classList.remove("hidden");
    appBody.classList.add("invisible");
  }

  function closeTasmeeCounter() {
    document.querySelector(".tasmee-counter-body").classList.add("hidden");
    appBody.classList.remove("invisible");
  }
  btnAbaoutNames.addEventListener("click", () => {
    document.querySelector(".setion-names").classList.remove("hidden");
    appBody.classList.add("invisible");
  });

  function dhikarListAll() {
    document.querySelector(".inside-dhikar").classList.remove("hidden");
    tasmeeCounterHead.classList.add("invisible");
  }
  function closeDhikarListALL() {
    document.querySelector(".inside-dhikar").classList.add("hidden");
    tasmeeCounterHead.classList.remove("invisible");
  }
  function savedDhikarListAll() {
    document.querySelector(".saved-dhikar-cell").classList.remove("hidden");
    tasmeeCounterHead.classList.add("invisible");
  }
  function leaveSavedDhikar() {
    document.querySelector(".saved-dhikar-cell").classList.add("hidden");
    tasmeeCounterHead.classList.remove("invisible");
  }
  btnLeaveSavedDhikar.addEventListener("click", leaveSavedDhikar);
  btnDhikarSave.addEventListener("click", savedDhikarListAll);
  btnAllDhikarTogether.addEventListener("click", dhikarListAll);
  btnOpenTasmeeCounter.addEventListener("click", openTasmeeCounter);
  btnCloseNames.addEventListener("click", closeNames);
  btnCloseDhikarWindow.addEventListener("click", closeTasmeeCounter);
  btnCloseAllDhikar.addEventListener("click", closeDhikarListALL);
}
aboutWindows();
//////////////////////////////////////////////////////////////////
btnstartDhikar.addEventListener("click", () => {
  time++;
  inputDhikar.value = time;
});
btnRestartDhikar.addEventListener("click", () => {
  time = 0;
  inputDhikar.value = 0;
});
