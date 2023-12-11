import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.courses = []
    // this.coursesService = new CoursesService();
    // this.coursesService.list().subscribe(courses => this.courses = courses);
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {}
}
