var request = new XMLHttpRequest();
request.open('GET', 'https://level5.2021.labnet.nz/kenworth/kenworth.json', true);
request.onload = function () {
   
const rootDiv = document.getElementById('root');


  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
if (request.status >= 200 && request.status < 400) 
 {
    data.forEach(Kenworth => {

      
      const cardMainDiv = document.createElement('div');
      cardMainDiv.setAttribute('class', 'card mt-3');

      const h1 = document.createElement('h1');
      h1.setAttribute('class', 'card-header text-center');
      h1.textContent = Kenworth.Model;

      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      
      const h5 = document.createElement('h5');
      h5.setAttribute('class', 'card-title');
      h5.textContent = Kenworth.Heading;
      
      const p1 = document.createElement('p');
      p1.setAttribute('class', 'card-text');
      p1.textContent = Kenworth.Paragraph1;

      const p2 = document.createElement('p');
      p2.setAttribute('class', 'card-text');
      p2.textContent = Kenworth.Paragraph2;

      const p3 = document.createElement('p');
      p1.setAttribute('class', 'card-text');
      p1.textContent = Kenworth.Paragraph3;

      rootDiv.appendChild(cardMainDiv);
      cardMainDiv.appendChild(h1);
      cardMainDiv.appendChild(cardBody);
      cardBody.appendChild(h5);
      cardBody.appendChild(p1);
      cardBody.appendChild(p2);
      cardBody.appendChild(p3);

    });
  } else { 

    const errorMessage = document.createElement('div');
    errorMessage.setAttribute('class', 'alert alert-danger');
    errorMessage.textContent = 'Data not loading';
    rootDiv.appendChild(errorMessage);
  }
}

request.send();