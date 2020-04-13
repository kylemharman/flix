export class Cinema {
  id: number;
  name: string;
  location: string;
  opens: string;
  closes: string;
  hours: string[];
  hasMovies: [{ id: number; showTimes: string[] }];
}
