class MovieItem extends HTMLElement {



    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
        this.innerHTML = `
      <style>
      .card-container {
        margin-right: 10px;
    }

    .movie {
        position: relative;
        overflow: hidden;
        max-width : 13rem;
        margin : 10px;
    }
    
    .overview{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        color: white;
        padding: 1rem;
        max-height:100% ;
        transform: translateY(101%);
        transition: transform 0.3s ease-out;
        font-size : 15px;
    }
    
    .movie:hover .overview {
        transform: translateY(0);
    }
    
      </style>

        <div id="${this._movie.id}" >
            <div class="col-movie">
                <div class="movie">
                    <img src="${"https://image.tmdb.org/t/p/w500"+this._movie.poster_path}" alt="Poster Movie">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.original_title}</h5>
                        <p class="card-text">${this._movie.release_date}</p>
                    </div>
                    <div class="overview">
                        <h3>${this._movie.overview}</h3>
                    </div>
                </div>
            </div>
        </div>
       
      `;
    }
  }
  
  customElements.define("movie-item", MovieItem);
