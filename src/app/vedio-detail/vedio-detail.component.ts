import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'vedio-detail',
  templateUrl: './vedio-detail.component.html',
  styles: [],
  inputs: ['vedio'],
  outputs:['updateVedioEvent', 'deleteVedioEvent']
})
export class VedioDetailComponent implements OnInit {
  vedio: any;

  private editTitle: boolean = false;
  private updateVedioEvent = new EventEmitter();
  private deleteVedioEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log('back to edit title = false')
    this.editTitle = false;
  }

  onTitleClick(){
    console.log('clicked')
    this.editTitle = true;
  }
  updateVedio(){
    this.updateVedioEvent.emit(this.vedio);
  }

  deleteVedio(){
    this.deleteVedioEvent.emit(this.vedio);    
  }
}
