import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(newValue) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
