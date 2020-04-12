import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from 'src/app/models/Cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css'],
})
export class CinemaListComponent implements OnInit {
  @Input() cinemas: Cinema;

  constructor() {}

  ngOnInit(): void {}
}
