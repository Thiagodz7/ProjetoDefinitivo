import { Injectable } from '@angular/core';
import { Log } from './log.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/Logs'
  formLog: Log = new Log();
  listLog: Log[] = [];
  public nome : string;

  postLog() {
    return this.http.post(this.baseURL, this.formLog);
  }

  putLog() {
    return this.http.put(`${this.baseURL}/${this.formLog.logId}`, this.formLog);
  }

  deleteLog(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.listLog = res as Log[]);
  }

}
