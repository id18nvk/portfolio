import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPrevComponent } from './project-prev.component';

describe('ProjectPrevComponent', () => {
  let component: ProjectPrevComponent;
  let fixture: ComponentFixture<ProjectPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
