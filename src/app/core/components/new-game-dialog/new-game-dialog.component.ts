import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Game } from '../../../core/models/Game.model';

export type GameForm = {
  image:string
  title:string
  description:string,
  positives:number |null,
  negatives: number | null
  themes:number|null
}

@Component({
  selector: 'app-new-game-dialog',
  templateUrl: './new-game-dialog.component.html',
  styleUrl: './new-game-dialog.component.less'
})
export class NewGameDialogComponent implements OnInit{


  @Input() editableGame!: Game

  @ViewChild("gameFormDialog") gameFormDialog!: ElementRef

  gameFormData:GameForm = {
    image: '',
    title: '',
    description: '',
    positives: null,
    negatives: null,
    themes: null,

  }

  ngOnInit(): void {
    if(this.editableGame){
      this.gameFormData.image = this.editableGame.image
      this.gameFormData.title = this.editableGame.title
      this.gameFormData.description = this.editableGame.description
      this.gameFormData.positives = this.editableGame.positives
      this.gameFormData.negatives = this.editableGame.negatives
      
      //this.gameFormData.themes = this.editableGame.themes
    }
  }

  showModal(){

    this.gameFormDialog.nativeElement.showModal()

  }
  closeModal(){
    this.gameFormDialog.nativeElement.close()
  }


}
