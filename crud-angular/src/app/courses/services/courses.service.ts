import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      // take(1),// após receber a resposta finaliza
      first(), // somente a primeira resposta
      // delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
