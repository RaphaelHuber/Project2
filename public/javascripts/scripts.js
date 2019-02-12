function loadSpecies() {
  const selected = document.getElementById('speciesSelect').value;
  axios.get(`http://localhost:3000/loadOneSpecies/${selected}`)
    .then((species) => {
      const createPanel = document.getElementById('createPanel');
      console.log(species.data);
      createPanel.innerHTML = (`<p>${species.data[0].name}</p><img src="${species.data[0].frontSprite}">`);
    });
}
