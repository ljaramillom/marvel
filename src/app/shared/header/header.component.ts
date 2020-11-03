import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  queryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public characterService: CharacterService) { }

  ngOnInit() {
    this.createForm();
  }

  get query() {
    return this.queryForm.get('query');
  }

  createForm() {
    this.queryForm = this.formBuilder.group({
      query: ['', [Validators.minLength(3)]],
    });
  }

  submit() {
    console.log('value', this.queryForm.get('query').value);
    if (this.queryForm.valid) {
      this.characterService.getCharacter(this.queryForm.get('query').value).subscribe(
      );
    }
  }

}
