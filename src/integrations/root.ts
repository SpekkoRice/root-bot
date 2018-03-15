import * as request from "request";
import {environment} from "../environment";

const URL = environment.ROOT_API_URL;
const UNAME = environment.ROOT_API_KEY;

let url = () => {
  return `${URL}?u=${UNAME}`;
};

export let rootGET = async (resource:string):Promise<boolean> => {
  return true;
};

export let rootPOST = async ():Promise<boolean> => {
  request.post(URL);
  return true;
};