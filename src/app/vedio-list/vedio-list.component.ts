import { Component, OnInit, EventEmitter } from '@angular/core';
import { Vedio } from '../vedio'

@Component({
  selector: 'vedio-list',
  templateUrl: './vedio-list.component.html',
  styles: [],
  inputs: ['vedios'],
  outputs: ['SelectedVedio']
})
export class VedioListComponent implements OnInit {

  public SelectedVedio = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Vedio){
    this.SelectedVedio.emit(vid);
  }
}
