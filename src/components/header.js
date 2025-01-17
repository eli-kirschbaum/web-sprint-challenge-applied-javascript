const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  // variable declarations for elements
  const headerEl = document.createElement('div');
  const dateEl = document.createElement('span');
  const titleEl = document.createElement('h1');
  const tempEl = document.createElement('span');

  // hierarchy
  headerEl.appendChild(dateEl);
  headerEl.appendChild(titleEl);
  headerEl.appendChild(tempEl);

  // classes
  headerEl.classList.add('header');
  dateEl.classList.add('date');
  tempEl.classList.add('temp');

  //text and attributes
  dateEl.textContent = date;
  titleEl.textContent = title;
  tempEl.textContent = temp;

  return headerEl;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHeader = Header('STL Blues Win the Stanley Cup', 'Jun 12, 2019', '75 degrees F');
  document.querySelector(selector).appendChild(newHeader);
}

export { Header, headerAppender }
