import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movieList : any;

  constructor() { }

  ngOnInit() {
  }

// Update Movie List with data received from TMDB api
  updateMovieList(event) {
  	this.movieList = event;
  }
}
