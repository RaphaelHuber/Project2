function loadSpecies() {
  const selected = document.getElementById('speciesSelect').value;
  axios.get(`http://localhost:3000/loadOneSpecies/${selected}`)
    .then((species) => {
      // console.log(species.data);
      loadSprite(species);
      loadAbilities(species);
      loadMoves(species);
      loadNatures();
      loadItems();
    });
}

function loadSprite(species) {
  document.getElementById('selectedSprite').src = (`${species.data[0].frontSprite}`);
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
