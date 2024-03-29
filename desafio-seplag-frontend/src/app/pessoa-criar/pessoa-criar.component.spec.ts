import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaCriarComponent } from './pessoa-criar.component';

describe('PessoaCriarComponent', () => {
  let component: PessoaCriarComponent;
  let fixture: ComponentFixture<PessoaCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PessoaCriarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
