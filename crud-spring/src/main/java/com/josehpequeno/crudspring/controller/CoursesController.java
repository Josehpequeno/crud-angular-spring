package com.josehpequeno.crudspring.controller;

import com.josehpequeno.crudspring.model.Course;
import com.josehpequeno.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {
  
  private final CourseRepository courseRepository;
  
  // mesma coisa @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<Course> list() {
    return courseRepository.findAll();
  }
}
