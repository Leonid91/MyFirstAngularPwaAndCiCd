import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBioComponent } from './author-bio.component';

describe('AuthorBioComponent', () => {
  let component: AuthorBioComponent;
  let fixture: ComponentFixture<AuthorBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
