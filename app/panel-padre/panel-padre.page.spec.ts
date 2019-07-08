import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPadrePage } from './panel-padre.page';

describe('PanelPadrePage', () => {
  let component: PanelPadrePage;
  let fixture: ComponentFixture<PanelPadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPadrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
