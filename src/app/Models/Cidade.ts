export interface Cidade {
  id: number;
  name: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  date: Date;
  hour: string;
}