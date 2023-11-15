import { DebugElement, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryTemplateComponent } from './angular-library-template.component';

describe('AngularLibraryTemplateComponent', () => {
  let fixture: ComponentFixture<AngularLibraryTemplateComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AngularLibraryTemplateComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLibraryTemplateComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should have "<p>Hello World</p>" as the body', () => {
    expect(debugElement.nativeElement.textContent).toBe('<p>Hello World</p>');
  });
});
