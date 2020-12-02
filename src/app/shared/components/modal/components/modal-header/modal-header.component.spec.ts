import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeaderComponent } from './modal-header.component';

describe('HeaderComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    component.modalTitle = 'Modal Title here';
    fixture.detectChanges();
  });

  it('should have modal title', () => {
    const modalTitle = fixture.nativeElement.querySelector('.modal-title');

    expect(modalTitle.textContent.trim()).toContain(component.modalTitle);
  });

  it('should close modal', () => {
    spyOn(component.modalClose, 'emit');
    const button = fixture.nativeElement.querySelector('.modal-btn');

    button.click();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(component.modalClose.emit).toHaveBeenCalled();
  });
});
