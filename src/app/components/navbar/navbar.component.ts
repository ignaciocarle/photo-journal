import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _storage: StorageService) { }

  ngOnInit(): void {
  }

  public clearReel() {
    this._storage.clearReel()
  }

  public loadTestData() {
    this._storage.loadTestingData()
  }
}
