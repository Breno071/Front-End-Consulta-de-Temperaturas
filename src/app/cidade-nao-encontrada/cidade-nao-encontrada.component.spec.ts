import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeNaoEncontradaComponent } from './cidade-nao-encontrada.component';

describe('CidadeNaoEncontradaComponent', () => {
  let component: CidadeNaoEncontradaComponent;
  let fixture: ComponentFixture<CidadeNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeNaoEncontradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
