import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/i-word";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionaryList: IWord[] = []

  dictionary: IWord;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');

      if(word != null){
        const temp = this.dictionaryService.translate(word);
        if (temp != null){
          this.dictionary = temp;
        }
      }
    })
  }

  ngOnInit(): void {

  }


}
