import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'what is the meaning of life?',
      content:
        'The meaning of life is that everyone is a legend, but you are a massive legend',
    },
    {
      title: 'Who let the dogs out',
      content: 'I dont know, the dog keeper or someone',
    },
    {
      title: 'Why are we existing',
      content:
        'We are nothing but a means to satisfy a much larger purpose, something we do not know of yet',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
