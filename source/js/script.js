fetch('./data/sersData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
  .then(jsonData => console.log(jsonData))
  .catch(error => console.error('Ошибка при исполнении запроса: ', error));