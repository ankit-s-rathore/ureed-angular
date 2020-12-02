import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileMenuComponent } from './profile-menu.component';

describe('ProfileMenuComponent', () => {
  let component: ProfileMenuComponent;
  let fixture: ComponentFixture<ProfileMenuComponent>;

  describe('When profile menu is opened', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [ProfileMenuComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ProfileMenuComponent);
      component = fixture.componentInstance;
      component.showProfileMenu = true;
      fixture.detectChanges();
    });

    afterEach(() => {
      component.showProfileMenu = false;
    });

    it('should have a Switch to company account link', () => {
      const a = fixture.nativeElement.querySelector('.link-1');

      expect(a.textContent).toEqual('Switch to company account');
    });
    it('should have complete my profile link', () => {
      const a = fixture.nativeElement.querySelector('.link-2');

      expect(a.textContent).toEqual('Complete my profile');
    });
    it('should have setting & privacy link', () => {
      const a = fixture.nativeElement.querySelector('.link-3');

      expect(a.textContent).toEqual('Setting & privacy');
    });
    it('should have help link', () => {
      const a = fixture.nativeElement.querySelector('.link-4');

      expect(a.textContent).toEqual('Help');
    });
    it('should have post a new project link', () => {
      const a = fixture.nativeElement.querySelector('.link-5');

      expect(a.textContent).toEqual('Post a new project');
    });
    it('should have my projects link', () => {
      const a = fixture.nativeElement.querySelector('.link-6');

      expect(a.textContent).toEqual('My projects');
    });
    it('should have contracts link', () => {
      const a = fixture.nativeElement.querySelector('.link-7');

      expect(a.textContent).toEqual('Contracts');
    });
    it('should have pitches link', () => {
      const a = fixture.nativeElement.querySelector('.link-8');

      expect(a.textContent).toEqual('Pitches');
    });
  });

  describe('When profile menu is closed', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [ProfileMenuComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ProfileMenuComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should not have a Switch to company account link', () => {
      const a = fixture.nativeElement.querySelector('.link-1');

      expect(a).toBeNull();
    });
    it('should not have complete my profile link', () => {
      const a = fixture.nativeElement.querySelector('.link-2');

      expect(a).toBeNull();
    });
    it('should not have setting & privacy link', () => {
      const a = fixture.nativeElement.querySelector('.link-3');

      expect(a).toBeNull();
    });
    it('should not have help link', () => {
      const a = fixture.nativeElement.querySelector('.link-4');

      expect(a).toBeNull();
    });
    it('should not have post a new project link', () => {
      const a = fixture.nativeElement.querySelector('.link-5');

      expect(a).toBeNull();
    });
    it('should not have my projects link', () => {
      const a = fixture.nativeElement.querySelector('.link-6');

      expect(a).toBeNull();
    });
    it('should not have contracts link', () => {
      const a = fixture.nativeElement.querySelector('.link-7');

      expect(a).toBeNull();
    });
    it('should not have pitches link', () => {
      const a = fixture.nativeElement.querySelector('.link-8');

      expect(a).toBeNull();
    });
  });
});
