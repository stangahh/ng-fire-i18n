import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestimonialsComponent } from './my-testimonials.component';

xdescribe('MyTestimonialsComponent', () => {
  let component: MyTestimonialsComponent;
  let fixture: ComponentFixture<MyTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTestimonialsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
