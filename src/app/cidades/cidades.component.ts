import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cidade } from '../Models/Cidade';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {
  ok = false;
  nao_encontrada = false;
  cidades: Cidade[] = [];
  data = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  city = new FormControl();

  cidades_busca = [
    'Curitiba',
    'Porto Alegre',
    'Florianópolis',
    'Todas'
  ]
  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {

  }

  Pesquisar() {
    this.ok = true;
    if (this.city.value == "Todas") this.city.setValue(null)

    if (this.city.value == null && this.data.value.end == null) return this.getTodasCidades()

    if (this.data.value.end == null) return this.getCidadeFromName(this.city.value)

    if (this.city.value == null) return this.getCidadesFromDate(this.data.value.start, this.data.value.end)

    return this.getCidadesFromDateAndName(this.city.value, this.data.value.start, this.data.value.end);
  }

  getCidadesFromDateAndName(cidade: string, dataInicio: Date, dataFim: Date) {
    const url = "cidades_periodo_name";
    this.httpService.getCidadesFromDate_Name(url, cidade, dataInicio, dataFim).subscribe(data => {
      this.ok = true;
      this.nao_encontrada = false;
      var cidades_periodo_name = data;
      this.cidades = [];
      this.cidades = cidades_periodo_name;
    },
      error => {
        console.log(error);
        this.nao_encontrada = true;
        this.ok = false;
      })
  }

  getCidadeFromName(cidade: string) {
    const url = "cidade";
    this.httpService.getCidadeFromName(url, cidade).subscribe(data => {
      var cidade = data;
      this.cidades = [];
      this.cidades.push(cidade);
    },
      error => {
        console.log(error);
      });
  }

  getCidadesFromDate(dataInicio: Date, dataFim: Date) {
    const url = "cidades_periodo";
    this.httpService.getCidadesFromDate(url, dataInicio, dataFim).subscribe(data => {
      this.ok = true;
      this.nao_encontrada = false;
      var cidades_periodo = data;
      this.cidades = [];
      this.cidades = cidades_periodo;
    },
      error => {
        console.log(error);
        this.nao_encontrada = true;
        this.ok = false;
      });
  }

  getTodasCidades() {
    const url = "cidades";
    this.httpService.getTodasCidades(url).subscribe(data => {
      var todasCidades = data;
      this.cidades = [];
      this.cidades = todasCidades;
    },
      error => {
        console.log(error);
      });
  }
}
