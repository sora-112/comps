import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  modalOpen = false;
  constructor(private elementref: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.elementref.nativeElement);
  }

  ngOnDestroy(): void {
    this.elementref.nativeElement.remove();
  }

  onModalClose(): void {
    this.close.emit();
  }

  stopProp(event: any) {
    event.stopPropagation();
  }
}
