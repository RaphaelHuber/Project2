let creatorDex = 0;
let creatorName = '';
let creatorFrontSprite = '';
let creatorBackSprite = '';
let creatorType1 = '';
let creatorType2 = '';
let creatorBaseStats = {};

function loadSpecies() {
  const selected = document.getElementById('speciesSelect').value;
  axios.get(`http://localhost:3000/loadOneSpecies/${selected}`)
    .then((species) => {
      feedSpecies(species);
      loadSprite(species);
      loadBaseStats(species);
      loadAbilities(species);
      loadMoves(species);
      loadNatures();
      loadItems();
      calculateStats();
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

  axios.get(`http://localhost:3000/loadNature/${selectedNature}`)
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

function loadItems() {
  axios.get('http://localhost:3000/loadAllItems')
    .then((items) => {
      const itemPanel = document.getElementById('itemSelect');
      let itemHTML = '';
      items.data.forEach((item) => {
        itemHTML += `<option>${item.name}</option>`;
      });
      itemPanel.innerHTML = itemHTML;
    });
}

function loadNatures() {
  axios.get('http://localhost:3000/loadAllNatures')
    .then((natures) => {
      const naturesPanel = document.getElementById('natureSelect');
      let natureHTML = '';
      natures.data.forEach((nature) => {
        natureHTML += `<option>${nature.name}</option>`;
      });
      naturesPanel.innerHTML = natureHTML;
    });
}

function statCalc(base, IV, EV, nature) {
  return Math.floor(((((2 * base + IV + (EV / 4))) + 5) * nature));
}

function HPCalc(base, IV, EV) {
  return Math.floor((2 * base + IV + (EV / 4)) + 100 + 10);
}

function testFun() {
  console.log('AAAAHHHH');
}
