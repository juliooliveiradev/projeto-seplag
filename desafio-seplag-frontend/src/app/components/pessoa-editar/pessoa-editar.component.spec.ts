import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaEditarComponent } from './pessoa-editar.component';

describe('PessoaEditarComponent', () => {
  let component: PessoaEditarComponent;
  let fixture: ComponentFixture<PessoaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PessoaEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
