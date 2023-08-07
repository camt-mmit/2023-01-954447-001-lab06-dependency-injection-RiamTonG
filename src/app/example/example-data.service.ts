import { Injectable } from '@angular/core';
import { SectionData } from './types';

const keyName = 'example-data';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService {
  async getData(): Promise<SectionData> {
    const result = (
      JSON.parse(localStorage.getItem(keyName) ?? '[[0]]') as number[][]
    ).map((ar) => ar.map((value) => ({ value })));
    return result;
  }

  async setData(data: SectionData): Promise<void> {
    const result = data.map((ar) => ar.map((item) => item.value));
    localStorage.setItem(keyName, JSON.stringify(result));
  }
}
