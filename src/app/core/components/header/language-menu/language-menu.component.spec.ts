import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LanguageMenuComponent } from './language-menu.component';

describe('LanguageMenuComponent', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  describe('When language menu is opened', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [LanguageMenuComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LanguageMenuComponent);
      component = fixture.componentInstance;
      component.showLanguageMenu = true;
      fixture.detectChanges();
    });

    afterEach(() => {
      component.showLanguageMenu = false;
    });

    it('should contain (English) link', () => {
      const a = fixture.nativeElement.querySelector('.lang_en');

      expect(a.textContent).toEqual('English');
    });
    it('should contain (العربية) link', () => {
      const a = fixture.nativeElement.querySelector('.lang_ar');

      expect(a.textContent).toEqual('العربية');
    });
    it('should contain (USD) link', () => {
      const a = fixture.nativeElement.querySelector('.currency_usd');

      expect(a.textContent).toEqual('USD');
    });
    it('should contain (EGP) link', () => {
      const a = fixture.nativeElement.querySelector('.currency_egp');

      expect(a.textContent).toEqual('EGP');
    });
    it('should contain (Language) title', () => {
      const title = fixture.nativeElement.querySelector('.lang_title');

      expect(title.textContent).toEqual('Language');
    });
    it('should contain (Currency) title', () => {
      const title = fixture.nativeElement.querySelector('.currency_title');

      expect(title.textContent).toEqual('Currency');
    });
  });

  describe('When language menu is not opened', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule],
        declarations: [LanguageMenuComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LanguageMenuComponent);
      component = fixture.componentInstance;
      component.showLanguageMenu = false;
      fixture.detectChanges();
    });

    it('should not contain (English) link', () => {
      const a = fixture.nativeElement.querySelector('.lang_en');

      expect(a).toBeNull();
    });
    it('should not contain (العربية) link', () => {
      const a = fixture.nativeElement.querySelector('.lang_ar');

      expect(a).toBeNull();
    });
    it('should not contain (USD) link', () => {
      const a = fixture.nativeElement.querySelector('.currency_usd');

      expect(a).toBeNull();
    });
    it('should not contain (EGP) link', () => {
      const a = fixture.nativeElement.querySelector('.currency_egp');

      expect(a).toBeNull();
    });
    it('should not contain (Language) title', () => {
      const title = fixture.nativeElement.querySelector('.lang_title');

      expect(title).toBeNull();
    });
    it('should not contain (Currency) title', () => {
      const title = fixture.nativeElement.querySelector('.currency_title');

      expect(title).toBeNull();
    });
  });
});
