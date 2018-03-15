import * as request from "request";

export class Root {

  private url:string;
  private token:string;

  constructor(url, token) {
    this.url = url;
    this.token = token;
  }

  private auth ():{"Authorization":string} {
    return {
      Authorization: "Basic " + new Buffer(`${this.token}:`).toString("base64")
    };
  }

  public async get(route:string) {
    return new Promise((resolve, reject) => {
      request.get(`${this.url}/${route}`, {headers: this.auth()}, (error, res, body) => {
        resolve(body);
      });
    });
  }

  public async post(route:string, payload) {
    return new Promise((resolve, reject) => {
      request.post(`${this.url}/${route}`, {form: payload, headers: this.auth()}, (error, res, body) => {
        resolve(body);
      });

    });
  }

}