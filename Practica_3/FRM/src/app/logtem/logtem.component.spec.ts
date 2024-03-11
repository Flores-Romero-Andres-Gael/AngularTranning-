import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtemComponent } from './logtem.component';

describe('LogtemComponent', () => {
  let component: LogtemComponent;
  let fixture: ComponentFixture<LogtemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogtemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogtemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
