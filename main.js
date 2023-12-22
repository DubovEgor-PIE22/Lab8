fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => {
    const jsonDataElement = document.getElementById('json-data');
    const jsonParagraph = document.createElement('p');
    jsonParagraph.textContent = JSON.stringify(json, null, 2);
    jsonDataElement.appendChild(jsonParagraph);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

