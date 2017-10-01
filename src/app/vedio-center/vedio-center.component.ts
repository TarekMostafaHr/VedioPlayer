import { Component, OnInit } from '@angular/core';
import { Vedio } from '../vedio';
import { VedioService} from '../vedio.service';

@Component({
  selector: 'app-vedio-center',
  templateUrl: './vedio-center.component.html',
  styles: [],
  providers: [VedioService]
})
export class VedioCenterComponent implements OnInit {
  
  selectedVedio: Vedio; 
  vedios: Array<Vedio>;
  private hideNewVedio: boolean = true;

  constructor(private _vedioService: VedioService) { }

  ngOnInit() {
    this._vedioService.getVedios()
    .subscribe(resVedioData => this.vedios = resVedioData);
    console.log(this.hideNewVedio)
  }
  onSelectVedio(vedio: any){
    this.hideNewVedio = true;
    console.log(this.hideNewVedio)
    this.selectedVedio = vedio;
    console.log(this.selectedVedio);
  }

  onSubmitAddVedio(vedio: Vedio){
    this._vedioService.addVedio(vedio)
      .subscribe(resNewVedio =>{
        this.vedios.push(resNewVedio);
        this.selectedVedio = resNewVedio;
        this.hideNewVedio = true;
      })
  }
  newVedio(){
    this.hideNewVedio = false;
  }

  onUpdateVedioEvent(vedio: any){
    this._vedioService.updateVedio(vedio)
    .subscribe(resUpdatedVedio => vedio = resUpdatedVedio);
    this.selectedVedio = null;
  }
  onDeleteVedioEvent(vedio: any){
    let vedioArray = this.vedios;
    this._vedioService.deletedVedio(vedio)
    .subscribe(resDeletedVedio =>{
      for(let i = 0; i < vedioArray.length; i++ )
      {
        if(vedioArray[i]._id === vedio._id)
          {
            vedioArray.splice(i,1)
          }
      }
    });
    this.selectedVedio = null;
  }
}
