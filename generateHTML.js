const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black",
      backgroundImg: "Images/green_back.jpeg"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C",
      backgroundImg: "Images/blue_back.jpeg"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C",
      backgroundImg: "Images/pink_back.jpeg"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white",
      backgroundImg: "Images/red_back.jpeg"
    }
  };

function generateHTML(data, data1, color) {
  return (`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Node Profile</title>
      <style>
          @page {
              margin: 0;
          }
  
          *,
          *::after,
          *::before {
              box-sizing: border-box;
          }
  
          html,
          body {
              padding: 0;
              margin: 0;
          }
  
          html,
          body,
          .wrapper {
             height: 100%;
          }
  
          .wrapper {
              background-color: ${colors[color].wrapperBackground};
              padding-top: 100px;
          }
  
          body {
              background-image: url(${colors[color].backgroundImg});
              -webkit-print-color-adjust: exact !important;
              font-family: 'Cabin', sans-serif;
          }
  
          main {
              background-color: white;
              height: auto;
              padding-top: 30px;
          }
          .fab{
              margin: 0 20px;
          }
  
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
              font-family: 'BioRhyme', serif;
              margin: 0;
          }
  
          h1 {
              font-size: 3em;
              padding-top: 50px;
          }
  
          h2 {
              font-size: 2.5em;
  
          }
  
          h3 {
              font-size: 2em;
              text-align: center;
              padding-top: 100px;
          }
  
          h4 {
              font-size: 1.5em;
          }
  
          h5 {
              font-size: 1.3em;
              padding-top: 20px;
          }
  
          h6 {
              font-size: 1.2em;
          }
  
          .photo-header {
              position: relative;
              margin: 0 auto;
              margin-bottom: -50px;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              background-color: ${colors[color].headerBackground};
           color: ${colors[color].headerColor};
              padding: 10px;
              width: 95%;
              border-radius: 6px;
          }
  
          .photo-header img {
              width: 250px;
              height: 250px;
              border-radius: 50%;
              object-fit: cover;
              margin-top: -75px;
              border: 6px solid ${colors[color].photoBorderColor};
              box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
          }
          
  
          .photo-header h1,
          .photo-header h2 {
              width: 100%;
              text-align: center;
          }
  
          .photo-header h1 {
              margin-top: 10px;
          }
  
          .links-nav {
              width: 100%;
              text-align: center;
              padding: 20px 0;
              font-size: 1.1em;
          }
  
          .nav-link {
              display: inline-block;
              margin: 5px 10px;
          }
  
          .workExp-date {
              font-style: italic;
              font-size: .7em;
              text-align: right;
              margin-top: 10px;
          }
  
          .container {
              padding: 50px;
              padding-left: 100px;
              padding-right: 100px;
          }
  
          .row {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-top: 20px;
              margin-bottom: 20px;
          }
  
          .card {
              padding: 20px;
              border-radius: 6px;
              background-color: ${colors[color].headerBackground};
             color: ${colors[color].headerColor};
              margin: 20px;
          }
  
          .col {
              flex: 1;
              text-align: center;
          }
  
          a,
          a:hover {
              text-decoration: none;
              color: inherit;
              font-weight: bold;
          }
  
          @media print {
              body {
                  zoom: .75;
              }
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div class="wrapper">
              <div class="photo-header">
                  <img class="photo-header image"
                      src="${data.avatar_url}">
                  <br>
                  <h1>Hello!!!</h1>
                  <h2>My name is ${data.name}</h2>
                      <h5>
                          <i class="fas fa-location-arrow">
                              <a href="https://www.google.com/maps/place/${data.location}"><span>Location</span></i></a>
                          <i class="fab fa-github">
                              <a href="${data.html_url}"><span>GitHub</span></i></a>
                          <i class="fas fa-rss">
                              <a href="${data.blog || "dummyurl"}"><span>Blog</span></i></a>
                      </h5>
                  </div>
              </div>
          
  
          <main>
              <h3>Bio: ${data.bio}</h3>
  
              <div class="row">
                  <div class="col s12 m5">
                      <div class="card card-panel">
                          <h4>Public Repositories
                              <br>
                              ${data.public_repos}
                          </h4>
                      </div>
                  </div>
                  <div class="col s12 m5">
                      <div class="card card-panel">
                          <h4>Followers
                              <br>
                              ${data.followers}
                          </h4>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col s12 m5">
                      <div class="card card-panel">
                          <h4>GitHub Stars
                              <br>
                              ${data1.length}
                          </h4>
                      </div>
                  </div>
                  <div class="col s12 m5">
                      <div class="card card-panel">
                          <h4>Following
                              <br>
                              ${data.following}
                          </h4>
                      </div>
                  </div>
              </div>
  
          </main>
      </div>
      <script src="https://unpkg.com/github-api/dist/GitHub.bundle.min.js"></script>
      <script src="https://unpkg.com/github-api/dist/GitHub.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
  
  </html>`)
        }

        module.exports =  generateHTML ;