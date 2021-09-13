import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Saumya', age: 21, job: 'engineer' },
    { name: 'jim', age: 42, job: 'carpenter' },
    { name: 'Alia', age: 28, job: 'actor' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Occupation' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
