import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImportFichierComponent} from './import-fichier.component';

describe('ImportFichierComponent', () => {
  let component: ImportFichierComponent;
  let fixture: ComponentFixture<ImportFichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportFichierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
