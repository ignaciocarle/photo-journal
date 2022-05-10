import { Injectable } from '@angular/core';
import { AppDb } from '../interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  public testDB: AppDb = {
    user: { username: "tester" },
    films: [{
      iso: "200",
      shotsCap: 36,
      shotsFired: 3,
      reel: [
        {
          id: 0,
          mode: "M",
          aperture: "1.4",
          speed: "1/3200",
          exposure: "1.0",
          flash: "off",
          comments: "nublado",
          accessories: "filtro verde"
        }, {
          id: 1,
          mode: "S",
          aperture: "auto",
          speed: "1/16000",
          exposure: "auto",
          flash: "off",
          comments: "soleado",
          accessories: ""
        }, {
          id: 2,
          mode: "A",
          aperture: "2.2",
          speed: "auto",
          exposure: "-1.5",
          flash: "auto",
          comments: "",
          accessories: ""
        },
      ]
    },]
  }

  constructor() {

  }
}
