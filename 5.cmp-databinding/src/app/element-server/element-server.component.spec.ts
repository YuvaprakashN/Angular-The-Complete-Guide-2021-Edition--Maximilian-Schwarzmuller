import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementServerComponent } from './element-server.component';

describe('ElementServerComponent', () => {
  let component: ElementServerComponent;
  let fixture: ComponentFixture<ElementServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
