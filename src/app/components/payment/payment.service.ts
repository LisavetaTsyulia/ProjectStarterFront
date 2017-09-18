import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class PaymentService {

  constructor(private http: Http) {
  }


  pay(userId: number, projectId: number, amount: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem('token'));

    return this.http
      .post(
        `${environment.serverUrl}project/payment`,
        JSON.stringify({ userId, projectId, amount}),
        {headers}
      )
      .map(res => {
        return res.json();
      });
  }
}
