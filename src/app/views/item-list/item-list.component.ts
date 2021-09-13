import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() data: { image: string; name: string; description: string }[] = [];
  constructor() {}

  ngOnInit(): void {}
}
