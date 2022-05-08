import { Injectable } from '@angular/core';
import { Film, Shot } from '../interfaces/storage';
import { TestingService } from './testing.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private dbName: string = "filmsDB"
  private filmsDB: Film[] = []
  private currentFilm: number = 0


  constructor(private test: TestingService) {
    this.getFilmsDB()
  }


  //LOCAL STORAGE HANDLING
  private setDataInLS(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error(e);
    }
  }

  public getDataFromLS(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) ?? "")
    } catch (e) {
      console.error(e);
    }
  }

  private getFilmsDB(): void {
    this.filmsDB = this.getDataFromLS(this.dbName)
  }

  private updateFilmsDB(): void {
    this.setDataInLS(this.dbName, this.filmsDB)
  }

  //SERVICE DATA MANIPULATION  
  private addShotToReel(shot: Shot, filmID: number): Film[] {
    const db = this.filmsDB
    const fullShot: Shot = {
      id: db[filmID].reel.length,
      ...shot
    }
    db[filmID].reel = [...db[filmID].reel, fullShot]
    db[filmID].shotsFired = db[filmID].reel.length
    return db
  }


  //USER ACTIONS
  public saveNewShot(shot: Shot, filmID = this.currentFilm): void {
    this.filmsDB = this.getDataFromLS(this.dbName)
    this.filmsDB = this.addShotToReel(shot, filmID)
    this.updateFilmsDB()
    console.log("New Reel Updated");
    console.log(this.filmsDB[filmID].reel);
  }

  public clearCurrentReel() {
    this.filmsDB[this.currentFilm].reel = []
    this.filmsDB[this.currentFilm].shotsFired = 0
    this.updateFilmsDB()
  }

  //TESTING

  public loadTestingData() {
    this.setDataInLS(this.dbName, this.test.testDB)
    this.getFilmsDB()
    console.log("TESTING DATA LOADED");
    console.log(this.filmsDB);

  }
}
