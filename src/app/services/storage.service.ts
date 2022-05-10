import { Injectable } from '@angular/core';
import { AppDb, Film, Shot } from '../interfaces/storage';
import { TestingService } from './testing.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _dbName: string = "appDb"
  private _appDb: AppDb = this.getDataFromLS(this._dbName)
  private _currentFilm: number = 0


  constructor(private test: TestingService) {
    this.readDB(this._dbName)
  }


  //LOCAL STORAGE HANDLING
  private setDataInLS(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error(e);
    }
  }

  private getDataFromLS(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) ?? "")
    } catch (e) {
      console.error(e);
    }
  }

  //DATABASE HANDLING
  private readDB(db: string): void {
    this._appDb = this.getDataFromLS(db)
  }

  private updateDB(): void {
    this.setDataInLS(this._dbName, this._appDb)
  }

  //GET AND SET
  public get appDb(): AppDb {
    return this._appDb
  }

  //DATA MANIPULATION
  private addShotToReel(shot: Shot, filmID = this._currentFilm): void {
    const film = this._appDb.films[filmID]
    const fullShot: Shot = {
      id: film.reel.length,
      ...shot
    }
    film.reel = [...film.reel, fullShot]
    film.shotsFired = film.reel.length
  }


  //USER ACTIONS
  public saveNewShot(shot: Shot, filmID = this._currentFilm): void {
    this.readDB(this._dbName)
    this.addShotToReel(shot, filmID)
    this.updateDB()
    console.log("New Reel Updated");
    console.log(this._appDb.films[filmID].reel);
  }

  public clearReel(filmID = this._currentFilm): void {
    const film = this._appDb.films[filmID]
    film.reel = []
    film.shotsFired = 0
    this.updateDB()
  }

  //TESTING

  public loadTestingData(): void {
    this.updateDB()
    this.setDataInLS(this._dbName, this.test.testDB)
    console.log("TESTING DATA LOADED");
    console.log(this._appDb);

  }
}
