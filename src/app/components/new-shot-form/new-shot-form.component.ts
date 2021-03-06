import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Shot } from 'src/app/interfaces/storage';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-shot-form',
  templateUrl: './new-shot-form.component.html',
  styleUrls: ['./new-shot-form.component.scss']
})
export class NewShotFormComponent implements OnInit {

  private _blankShotForm = {
    mode: "",
    aperture: "",
    speed: "",
    exposure: "",
    flash: "",
    comments: "",
    accessories: ""
  }

  public newShotForm = this._fb.group(this._blankShotForm)

  constructor(
    private _fb: FormBuilder,
    private _storage: StorageService) { }

  ngOnInit(): void {
  }

  public submitForm() {
    const form: Shot = this.newShotForm.value
    //console.log(form);
    this._storage.saveNewShot(form)
    this.clearForm()
  }

  public clearForm() {
    this.newShotForm.setValue(this._blankShotForm)
  }
}
