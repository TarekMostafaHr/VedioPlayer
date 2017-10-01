import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Vedio } from "./vedio";


@Injectable()
export class VedioService {

  private _getUrl = '/api/vedios';
  private _postUrl = '/api/vedio';
  private _puttUrl = '/api/vedio/';
  private _deletetUrl = '/api/vedio/';
   
  constructor(private _http: Http ) { }

  getVedios(){
    return this._http.get(this._getUrl)
    .map((response: Response)=> response.json());
  }
  
  addVedio(vedio: Vedio){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(vedio), options)
    .map((response: Response)=>response.json());
  }
  updateVedio(vedio: Vedio){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._puttUrl + vedio._id, JSON.stringify(vedio), options)
    .map((response: Response)=>response.json());
  }

  deletedVedio(vedio: Vedio){
    return this._http.delete(this._deletetUrl + vedio._id)
    .map((response: Response)=> response.json());
  }
}
