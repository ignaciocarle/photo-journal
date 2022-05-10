import { Component, OnInit } from '@angular/core';
import { Shot } from 'src/app/interfaces/storage';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-reel-view',
  templateUrl: './reel-view.component.html',
  styleUrls: ['./reel-view.component.scss']
})
export class ReelViewComponent implements OnInit {

  private _currentFilm: number = this.storage.currentFilm
  private _film = this.storage.appDb.films[this._currentFilm]

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  public testbutton() {
    console.log("log desde variable _film");
    console.log(this._film.reel);
    console.log("log desde variable en servicio");
    console.log(this.storage.appDb.films[this._currentFilm].reel);
  }

}
