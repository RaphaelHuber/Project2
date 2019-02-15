let creatorDex = 0;
let creatorName = '';
let creatorFrontSprite = '';
let creatorBackSprite = '';
let creatorType1 = '';
let creatorType2 = '';
let creatorBaseStats = {};

function loadSpecies() {
  console.log('LOAD SPECIES');
  const selected = document.getElementById('speciesSelect').value;
  axios.get(`${process.env.API}/loadOneSpecies/${selected}`)
    .then((species) => {
      feedSpecies(species);
      loadSprite(species);
      loadFunFacts(species);
      loadBaseStats(species);
      loadAbilities(species);
      loadMoves(species);
      loadNatures();
      loadItems();
      calculateStats();
      updateMoves();
    });
}

function loadEdit() {
  console.log('LOAD EDIT');
  const selected = document.getElementById('speciesSelect').value;
  axios.get(`${process.env.API}/loadOneSpecies/${selected}`)
    .then((species) => {
      feedSpecies(species);
      loadSprite(species);
      loadFunFacts(species);
      loadBaseStats(species);
      loadEditAbility(species);
      loadEditMoves(species);
      loadEditNature();
      loadEditItem();
      calculateStats();
      updateMoves();
    });
}

function calculateStats() {
  const baseHP = parseInt(document.getElementById('baseStatHP').innerText, 10);
  const baseAtk = parseInt(document.getElementById('baseStatAtk').innerText, 10);
  const baseDef = parseInt(document.getElementById('baseStatDef').innerText, 10);
  const baseSpAtk = parseInt(document.getElementById('baseStatSpAtk').innerText, 10);
  const baseSpDef = parseInt(document.getElementById('baseStatSpDef').innerText, 10);
  const baseSpe = parseInt(document.getElementById('baseStatSpe').innerText, 10);

  const HPIV = parseInt(document.getElementById('inputIV1').value, 10);
  const AtkIV = parseInt(document.getElementById('inputIV2').value, 10);
  const DefIV = parseInt(document.getElementById('inputIV3').value, 10);
  const SpAtkIV = parseInt(document.getElementById('inputIV4').value, 10);
  const SpDefIV = parseInt(document.getElementById('inputIV5').value, 10);
  const SpeIV = parseInt(document.getElementById('inputIV6').value, 10);

  const HPEV = parseInt(document.getElementById('inputEV1').value, 10);
  const AtkEV = parseInt(document.getElementById('inputEV2').value, 10);
  const DefEV = parseInt(document.getElementById('inputEV3').value, 10);
  const SpAtkEV = parseInt(document.getElementById('inputEV4').value, 10);
  const SpDefEV = parseInt(document.getElementById('inputEV5').value, 10);
  const SpeEV = parseInt(document.getElementById('inputEV6').value, 10);

  const selectedNature = document.getElementById('natureSelect').value;

  axios.get(`${process.env.API}/loadNature/${selectedNature}`)
    .then((nature) => {
      const natAtk = nature.data.stats.Atk;
      const natDef = nature.data.stats.Def;
      const natSpAtk = nature.data.stats.SpAtk;
      const natSpDef = nature.data.stats.SpDef;
      const natSpe = nature.data.stats.Spe;

      document.getElementById('totalHP').innerText = HPCalc(baseHP, HPIV, HPEV);
      document.getElementById('totalAtk').innerText = statCalc(baseAtk, AtkIV, AtkEV, natAtk);
      document.getElementById('totalDef').innerText = statCalc(baseDef, DefIV, DefEV, natDef);
      document.getElementById('totalSpAtk').innerText = statCalc(baseSpAtk, SpAtkIV, SpAtkEV, natSpAtk);
      document.getElementById('totalSpDef').innerText = statCalc(baseSpDef, SpDefIV, SpDefEV, natSpDef);
      document.getElementById('totalSpe').innerText = statCalc(baseSpe, SpeIV, SpeEV, natSpe);
    });
}

function feedSpecies(species) {
  creatorDex = species.data[0].dex;
  creatorName = species.data[0].name;
  creatorFrontSprite = species.data[0].frontSprite;
  creatorBackSprite = species.data[0].backSprite;
  creatorType1 = species.data[0].type1;
  creatorType2 = species.data[0].type2;
  creatorBaseStats = species.data[0].baseStats;
}

function loadSprite(species) {
  document.getElementById('selectedSprite').src = (`${species.data[0].frontSprite}`);
}

function loadBaseStats(species) {
  document.getElementById('baseStatHP').innerText = species.data[0].baseStats.HP;
  document.getElementById('baseStatAtk').innerText = species.data[0].baseStats.Atk;
  document.getElementById('baseStatDef').innerText = species.data[0].baseStats.Def;
  document.getElementById('baseStatSpAtk').innerText = species.data[0].baseStats.SpAtk;
  document.getElementById('baseStatSpDef').innerText = species.data[0].baseStats.SpDef;
  document.getElementById('baseStatSpe').innerText = species.data[0].baseStats.Spe;
}

function loadAbilities(species) {
  const abilityPanel = document.getElementById('abilitySelect');
  let abilityHTML = '';
  species.data[0].abilities.forEach((ability) => {
    abilityHTML += `<option>${ability}</option>`;
  });
  abilityPanel.innerHTML = abilityHTML;
}

function loadEditAbility(species) {
  const abilityPanel = document.getElementById('abilitySelect');
  let abilityHTML = '';
  const previousAbility = document.getElementById('editedSpanAbility').innerText;
  abilityHTML += `<option>${previousAbility}</option>`;
  species.data[0].abilities.forEach((ability) => {
    if (ability !== previousAbility) {
      abilityHTML += `<option>${ability}</option>`;
    }
  });
  abilityPanel.innerHTML = abilityHTML;
}

function loadMoves(species) {
  let movesHTML = '';
  species.data[0].moves.forEach((move) => {
    movesHTML += `<option>${move}</option>`;
  });

  const movesSelect1 = document.getElementById('movesSelect1');
  const movesSelect2 = document.getElementById('movesSelect2');
  const movesSelect3 = document.getElementById('movesSelect3');
  const movesSelect4 = document.getElementById('movesSelect4');

  movesSelect1.innerHTML = movesHTML;
  movesSelect2.innerHTML = movesHTML;
  movesSelect3.innerHTML = movesHTML;
  movesSelect4.innerHTML = movesHTML;
}

function loadEditMoves(species) {
  let move1HTML = '';
  const previousMove1 = document.getElementById('editedSpanMove1').innerText;
  move1HTML += `<option>${previousMove1}</option>`;
  species.data[0].moves.forEach((move) => {
    if (move !== previousMove1) {
      move1HTML += `<option>${move}</option>`;
    }
  });

  let move2HTML = '';
  const previousMove2 = document.getElementById('editedSpanMove2').innerText;
  move2HTML += `<option>${previousMove2}</option>`;
  species.data[0].moves.forEach((move) => {
    if (move !== previousMove2) {
      move2HTML += `<option>${move}</option>`;
    }
  });

  let move3HTML = '';
  const previousMove3 = document.getElementById('editedSpanMove3').innerText;
  move3HTML += `<option>${previousMove3}</option>`;
  species.data[0].moves.forEach((move) => {
    if (move !== previousMove3) {
      move3HTML += `<option>${move}</option>`;
    }
  });

  let move4HTML = '';
  const previousMove4 = document.getElementById('editedSpanMove4').innerText;
  move4HTML += `<option>${previousMove4}</option>`;
  species.data[0].moves.forEach((move) => {
    if (move !== previousMove4) {
      move4HTML += `<option>${move}</option>`;
    }
  });

  const movesSelect1 = document.getElementById('movesSelect1');
  const movesSelect2 = document.getElementById('movesSelect2');
  const movesSelect3 = document.getElementById('movesSelect3');
  const movesSelect4 = document.getElementById('movesSelect4');

  movesSelect1.innerHTML = move1HTML;
  movesSelect2.innerHTML = move2HTML;
  movesSelect3.innerHTML = move3HTML;
  movesSelect4.innerHTML = move4HTML;
}

function loadItems() {
  axios.get(`${process.env.API}/loadAllItems`)
    .then((items) => {
      const itemPanel = document.getElementById('itemSelect');
      let itemHTML = '';
      items.data.forEach((item) => {
        itemHTML += `<option>${item.name}</option>`;
      });
      itemPanel.innerHTML = itemHTML;
    });
}

function loadEditItem() {
  axios.get(`${process.env.API}/loadAllItems`)
    .then((items) => {
      const itemPanel = document.getElementById('itemSelect');
      let itemHTML = '';
      const previousItem = document.getElementById('editedSpanItem').innerText;
      itemHTML += `<option>${previousItem}</option>`;
      items.data.forEach((item) => {
        if (item.name !== previousItem) {
          itemHTML += `<option>${item.name}</option>`;
        }
      });
      itemPanel.innerHTML = itemHTML;
    });
}

function loadNatures() {
  axios.get(`${process.env.API}/loadAllNatures`)
    .then((natures) => {
      const naturesPanel = document.getElementById('natureSelect');
      let natureHTML = '';
      natures.data.forEach((nature) => {
        natureHTML += `<option>${nature.name}</option>`;
      });
      naturesPanel.innerHTML = natureHTML;
    });
}

function loadEditNature() {
  axios.get(`${process.env.API}/loadAllNatures`)
    .then((natures) => {
      const naturesPanel = document.getElementById('natureSelect');
      let natureHTML = '';
      const previousNature = document.getElementById('editedSpanNature').innerText;
      natureHTML += `<option>${previousNature}</option>`;
      natures.data.forEach((nature) => {
        if (nature.name !== previousNature) {
          natureHTML += `<option>${nature.name}</option>`;
        }
      });
      naturesPanel.innerHTML = natureHTML;
    });
}

function statCalc(base, IV, EV, nature) {
  return Math.floor(((((2 * base + IV + (EV / 4))) + 5) * nature));
}

function updateMoves() {
  const move1 = document.getElementById('movesSelect1').value;
  const move2 = document.getElementById('movesSelect2').value;
  const move3 = document.getElementById('movesSelect3').value;
  const move4 = document.getElementById('movesSelect4').value;

  document.getElementById('type1Img').src=`/images/types/${moves[move1].type}.png`;
  document.getElementById('powerMove1').innerText = moves[move1].power;
  document.getElementById('category1Img').src=`/images/categories/${moves[move1].category}.png`;

  document.getElementById('type2Img').src=`/images/types/${moves[move2].type}.png`;
  document.getElementById('powerMove2').innerText = moves[move2].power;
  document.getElementById('category2Img').src=`/images/categories/${moves[move2].category}.png`;

  document.getElementById('type3Img').src=`/images/types/${moves[move3].type}.png`;
  document.getElementById('powerMove3').innerText = moves[move3].power;
  document.getElementById('category3Img').src=`/images/categories/${moves[move3].category}.png`;

  document.getElementById('type4Img').src=`/images/types/${moves[move4].type}.png`;
  document.getElementById('powerMove4').innerText = moves[move4].power;
  document.getElementById('category4Img').src=`/images/categories/${moves[move4].category}.png`;
}

function HPCalc(base, IV, EV) {
  return Math.floor((2 * base + IV + (EV / 4)) + 100 + 10);
}

function addToTeam(pokeID) {
  const teamID = document.getElementById('teamEditID').innerText;
  axios.patch(`${process.env.API}/addPoke/${teamID}/${pokeID}`);
}

function loadFunFacts(species) {
  console.log(species.funFacts);
  document.getElementById('funFactsPanel').innerHTML = `<li>${species.data[0].funFacts[0]}</li><li>${species.data[0].funFacts[1]}</li>`;
}

function testFunction() {
  console.log('SIGNAL');
}
