import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkillsComponent } from './profile-skills.component';

describe('ProfileSkillsComponent', () => {
  let component: ProfileSkillsComponent;
  let fixture: ComponentFixture<ProfileSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
