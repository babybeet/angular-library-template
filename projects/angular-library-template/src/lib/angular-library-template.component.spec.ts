import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularLibraryTemplateComponent } from './angular-library-template.component';

describe('AngularLibraryTemplateComponent', () => {
  let fixture: ComponentFixture<AngularLibraryTemplateComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AngularLibraryTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLibraryTemplateComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should have "<p>Hello World</p>" as the body', () => {
    expect(debugElement.nativeElement.textContent).toBe('<p>Hello World</p>');
  });
});
