import {Injectable} from '@angular/core';
import {IWord} from "../model/i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaryList: IWord [] = [
    {
      word: 'dog',
      mean: 'Con chó'
    },
    {
      word: 'cat',
      mean: 'Con mèo'
    },
    {
      word: 'main',
      mean: 'Chủ yếu'
    }
  ]

  constructor() {
  }

  translate(word: string) {
    return this.dictionaryList.find(item => item.word == word);
  }

  getAll() {
    return this.dictionaryList;
  }
}
