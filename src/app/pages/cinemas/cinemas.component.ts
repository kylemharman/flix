import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css'],
})
export class CinemasComponent implements OnInit {
  cinemas = [
    {
      id: 1,
      name: 'ABC Cinema',
      location: 'Brisbane',
      hours: { open: '9am', closes: '11pm' },
    },
    {
      id: 2,
      name: '123 Cinema',
      location: 'Sydney',
      hours: { open: '9am', closes: '11pm' },
    },
    {
      id: 3,
      name: 'XYZ Cinema',
      location: 'Melbourne',
      hours: { open: '9am', closes: '11pm' },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
