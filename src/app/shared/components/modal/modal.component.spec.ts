import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeaderComponent } from './components';
import { ModalComponent, modalSize } from './modal.component';

describe('ModalComponent', () => {
  let modalClass: string;
  let component: ModalComponent;
  let headerComp: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent, ModalHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    headerComp = fixture.debugElement.query(By.directive(ModalHeaderComponent))
      .componentInstance;
  });

  it('should have small size modal', () => {
    component.size = 'small';
    modalClass = modalSize[component.size];
    fixture.detectChanges();

    const size = fixture.nativeElement.querySelector(`.${modalClass}`);

    expect(size).not.toBeNull();
  });
  it('should have medium size modal', () => {
    component.size = 'medium';
    modalClass = modalSize[component.size];
    fixture.detectChanges();

    const size = fixture.nativeElement.querySelector(`.${modalClass}`);

    expect(size).not.toBeNull();
  });
  it('should have large size modal', () => {
    component.size = 'large';
    modalClass = modalSize[component.size];
    fixture.detectChanges();

    const size = fixture.nativeElement.querySelector(`.${modalClass}`);

    expect(size).not.toBeNull();
  });
  it('should have modal title', () => {
    component.modalTitle = 'Modal Title here';

    fixture.detectChanges();

    expect(headerComp.modalTitle).toContain(component.modalTitle);
  });
  it('should close modal', () => {
    spyOn(component.modalClose, 'emit');

    fixture.detectChanges();
    headerComp.modalClose.emit();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(component.modalClose.emit).toHaveBeenCalled();
  });
});
