import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-shot-form',
  templateUrl: './new-shot-form.component.html',
  styleUrls: ['./new-shot-form.component.scss']
})
export class NewShotFormComponent implements OnInit {

  public newShotForm = this.fb.group({
    mode: "",
    aperture: "",
    speed: "",
    exposure: "",
    flash: "",
    comments: "",
    accessories: ""
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
