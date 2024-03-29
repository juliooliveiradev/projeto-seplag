import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaListaComponent } from './pessoa-lista.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PessoaService } from '../pessoa.service';
import { of } from 'rxjs';

describe('PessoaListaComponent', () => {
  let component: PessoaListaComponent;
  let fixture: ComponentFixture<PessoaListaComponent>;
  let pessoaService: jasmine.SpyObj<PessoaService>;

  beforeEach(async () => {
    pessoaService = jasmine.createSpyObj('PessoaService', ['getAll']);

    await TestBed.configureTestingModule({
      declarations: [ PessoaListaComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: PessoaService, useValue: pessoaService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaListaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  // Adicione mais testes conforme necessário
});
