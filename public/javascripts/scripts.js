function loadSpecies() {
  const selected = document.getElementById('speciesSelect').value;
  axios.get(`http://localhost:3000/loadOneSpecies/${selected}`)
    .then((species) => {
      console.log('AAAAAA);
      // Aqui vem a manipulação de DOM
    });
}
