import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/i-word";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dictionaryList: IWord[] = []
  dictionaryTemp: IWord;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dictionaryList = this.dictionaryService.dictionaryList;
  }

  detailDictionary(dictionary: IWord){
    this.dictionaryTemp  = dictionary;
  }
}
