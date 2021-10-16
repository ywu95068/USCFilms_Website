import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarouelComponent } from './movie-carouel.component';

describe('MovieCarouelComponent', () => {
  let component: MovieCarouelComponent;
  let fixture: ComponentFixture<MovieCarouelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCarouelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCarouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
