import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslationProvider} from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userInput:string;
  private result:string;

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider
  ) {

  }
//click event handler
  public btnTranslateClicked(userInput:string):void{
    console.log(userInput);

    this.userInput = userInput
    this.translationProvider.getTranslationResult(userInput).subscribe(
      (response) => {
        // display translated text on UI
        console.log(response);
        this.result = '';
            }
    );
  }

}
