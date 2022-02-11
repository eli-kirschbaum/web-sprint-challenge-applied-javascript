const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //const cardDiv = document.createElement('div');
  //cardDiv.classList.add('card');
  

  //const headlineDiv = document.createElement('div');
  //headlineDiv.classList.add('headline');
  //cardDiv.textContent = `${article.headline}`;

  //const authorDiv = document.createElement('div');
  //authorDiv.classList.add('author');

  //const imgDiv = document.createElement('div');
  //imgDiv.classList.add('img-container');

  //const image = document.createElement('img');
  //image.src = `${article.authorPhoto}`;
  
  // variable declarations for elements
  const cardEl = document.createElement('div');
  const headlineEl = document.createElement('div');
  const authorEl = document.createElement('div');
  const imageContainerEl = document.createElement('div');
  const imageEl = document.createElement('img');
  const nameEl = document.createElement('span');

  // hierarchy
  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imageContainerEl);
  imageContainerEl.appendChild(imageEl);
  authorEl.appendChild(nameEl);

  // classes
  cardEl.classList.add('card');
  headlineEl.classList.add('headline');
  authorEl.classList.add('author');
  imageContainerEl.classList.add('img-container');

  // Text and Attributes
  headlineEl.textContent = article.headline;
  imageEl.src = article.authorPhoto;
  nameEl.textContent = `By ${article.authorName}`;

  // Event Listener
  cardEl.addEventListener('click', () => {
    console.log(article.headline)
  })

  return cardEl;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
