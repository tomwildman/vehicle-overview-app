import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MenubarModule
    ],
    declarations: [ Menubar ],
    schemas: [NO_ERRORS_SCHEMA]
  }).compileComponents());

  it('should have a title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')!.textContent).withContext('You should have an `h1` with the text Vehicle Overview App').toContain('Vehicle Overview App');
  });

  it('should use the menu component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('app-menu'))
    .withContext('You probably forgot to add MenuComponent to the AppComponent template')
    .not.toBeNull();
  });
});
