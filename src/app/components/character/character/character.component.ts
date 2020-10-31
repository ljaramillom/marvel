import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  lorem: string;

  constructor() { }

  ngOnInit() {
    this.lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore mollitia dolorum optio dolore doloribus consequuntur corporis! Tempora, voluptatem ad. Animi illum et rem explicabo officiis temporibus sit aliquid cupiditate hic.';
  }

}
