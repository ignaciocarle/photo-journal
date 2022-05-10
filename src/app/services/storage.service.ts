import { Injectable } from '@angular/core';
import { AppDb, Shot } from '../interfaces/storage';
import { TestingService } from './testing.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _dbName: string = "appDb"
  private _appDb: AppDb = this.getDataFromLS(this._dbName)
  private _currentFilm: number = 0


  constructor(private _test: TestingService) {
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
  private readDB(db: string): void {// database >>  local DB variable
    this.appDb = this.getDataFromLS(db)
  }

  private updateDB(): void {//local DB variable >> database
    this.setDataInLS(this._dbName, this.appDb)
  }

  //GET AND SET
  public get appDb(): AppDb {
    return this._appDb
  }

  public set appDb(db: AppDb) {
    this._appDb = db
  }

  public get currentFilm(): number {
    return this._currentFilm
  }

  public set currentFilm(val: number) {
    this._currentFilm = val
  }

  //DATA MANIPULATION
  private addShotToReel(shot: Shot, filmID = this._currentFilm): void {
    const film = this.appDb.films[filmID]
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
    console.log("NEW SHOT ADDED");
    console.log(this.appDb.films[filmID].reel);
  }

  public clearReel(filmID = this._currentFilm): void {
    const film = this.appDb.films[filmID] //esto me esta borrando la data de testDB
    film.reel = []
    film.shotsFired = 0
    console.log("REEL DATA CLEARED");
    this.updateDB()
  }

  //TESTING

  public loadTestingData(): void {
    this.appDb.films[0] = this._test.testDB.films[0]//buscar otra forma de traer la info
    console.log(this._test.testDB.films[0]);
    console.log("TESTING DATA LOADED");
    this.updateDB()
  }
}
