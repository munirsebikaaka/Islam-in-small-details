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
const cotrolButtons = {
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
  },
};
const controlBodyApp = {
  inputDhikarUl: ".saved-dhikar-list-paper",
};
////////////////////////////////////////////////////////////////////////
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
const saved = document.querySelector(".save");
const unsaved = document.querySelector(".unsaved");
const btnDeleteSavedDhikar = document.querySelector(".delete-list-el");
const cancelDhikar = document.querySelector(".cancel-dhikar");

/////////////////////////////////////////////////////////////////////
const windowCard = document.querySelector(".pro-section");
const overlayCheck = document.querySelector(".overlay");
const internationalTime = document.querySelector(".about-monthEn");
const remainTime = document.querySelector(".remain");
const secAllahNames = document.querySelector(".about-Allah-names");
const secDhikar = document.querySelector(".about-dhikar");
const appBody = document.querySelector(".application-body");
const inputDhikar = document.getElementById("counter-dhikar");
const inputDhikarSaved = document.getElementById("saved-dhikar-input");
const inputDhikarSavedIdUl = document.querySelector(
  controlBodyApp.inputDhikarUl
);
const tasmeeCounterHead = document.querySelector(".tasmee-counter-head");
const kalmaBody = document.querySelector(".all-kalma-readings");
const saveddhikarLISTCell = document.querySelector(".saved-dhikar-list-paper");
const dhikarListUnsaved = document.querySelector(".about-dhikar-body");
const allAboutAllahNames = document.querySelector(".about-Allah-names-cell");
const allAboutProphNames = document.querySelector(".about-prophet-names-cell");
const btnAllah = document.querySelector(".Allah-names");
const btnProphet = document.querySelector(".prophet-names");

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
//////////////////////////////////////////////////////////
const namesOfAllah = (obj) => {
  obj.names.forEach((el, i) => {
    const trans = obj.translation[i];
    const getHtmlStructure = `
    <div class="about-Allah-names">
      <div>
        <h1 class="name">${el}</h1>
        <p class="trans-eng">${trans}</p>
    </div>
    <p class="trans-arabic">in arabic</p>

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
      <div class="dhikar-list-element">
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
  const dhikar = elementBody.value;
  typesOfDhikar.savedDhikar.saved.push(dhikar);
  inputDhikarSavedIdUl.innerHTML += `
              <li class="saved-dhikar-list-element">
                <p class="el-list-dhikar">${dhikar}</p>
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
  console.log(typesOfDhikar.savedDhikar.saved);
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
    const prophetNamesHTMLStructure = `
    <div class="about-prophet-names">
      <h1 class="name pro">${el}</h1>
      <p class="trans-eng pro">${namesTranslation}</p>
    </div>
  
  
  `;
    document
      .querySelector(".about-prophet-names")
      .insertAdjacentHTML("beforebegin", prophetNamesHTMLStructure);
  });
};
allAboutProphetNames(prophetName);
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
    unsaved.style.color = "var(--primary-color)";
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
  function cancelSavedDhikar() {
    document.querySelector(".saved-dhikar-cell").classList.add("hidden");
    tasmeeCounterHead.classList.remove("invisible");
  }
  function openKalmasPage() {
    document
      .querySelector(".all-kalma-readings-cell")
      .classList.remove("hidden");
    appBody.classList.add("invisible");
  }
  function closeKalmasPage() {
    document.querySelector(".all-kalma-readings-cell").classList.add("hidden");
    appBody.classList.remove("invisible");
  }
  btnCloseKalma.addEventListener("click", closeKalmasPage);
  btnOpenKalmaReadin.addEventListener("click", openKalmasPage);
  btnLeaveSavedDhikar.addEventListener("click", leaveSavedDhikar);
  cancelDhikar.addEventListener("click", cancelSavedDhikar);
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
