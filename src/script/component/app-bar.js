class AppBar extends HTMLElement {

    connectedCallback() {
      this.render();
    }
  
    render() {
        this.innerHTML = `
      <style>
      .navbar {
        height: 80px;
    }
    
    .nav-link:hover::after {
        content: '';
        display: block;
        border-bottom: 3px solid red;
        margin: auto;
        padding-bottom: 5px;
        margin-bottom: -7px;
        width: 70%;
    }
      </style>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
          <a class="navbar-brand" href="#">BreakMovie</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="navbar-nav m-md-auto">
                  <a class="nav-link active" aria-current="page" href="#"></a>
              </div>
             <search-bar></search-bar>
          </div>
      </div>
  </nav>
      `;
    }
  }
  
  customElements.define("app-bar", AppBar);