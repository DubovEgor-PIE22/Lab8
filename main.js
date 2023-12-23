fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const jsonDataElement = document.getElementById('json-data');

    json.forEach((item) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      ['userId', 'id', 'title', 'body'].forEach((property) => {
        const propertyParagraph = document.createElement('p');
        propertyParagraph.textContent = `${property}: ${item[property]}`;
        postDiv.appendChild(propertyParagraph);
      });


      jsonDataElement.appendChild(postDiv);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });




