import { Component, OnInit } from '@angular/core';
import { AppDb, Shot } from 'src/app/interfaces/storage';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-reel-view',
  templateUrl: './reel-view.component.html',
  styleUrls: ['./reel-view.component.scss']
})
export class ReelViewComponent implements OnInit {

  private _currentFilm: number = this._storage.currentFilm

  constructor(private _storage: StorageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  public get reel(): Shot[] {
    return this._storage.appDb.films[this._currentFilm].reel
  }

  public testbutton() {

  }

}
