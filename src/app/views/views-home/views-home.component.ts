import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items = [
    {
      image: '/assets/couch.jpeg',
      name: 'Couch',
      description: 'This is an amazimg couch',
    },
    {
      image: '/assets/dresser.jpeg',
      name: 'Dresser',
      description: 'Amazing dresser with all my stuff',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
