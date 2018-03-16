import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellComponentComponent } from './sell-component.component';

describe('SellComponentComponent', () => {
  let component: SellComponentComponent;
  let fixture: ComponentFixture<SellComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
