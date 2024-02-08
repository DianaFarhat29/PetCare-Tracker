import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAnimauxComponent } from './mes-animaux.component';

describe('MesAnimauxComponent', () => {
  let component: MesAnimauxComponent;
  let fixture: ComponentFixture<MesAnimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesAnimauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
