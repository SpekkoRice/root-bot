/**
 * IMPORTANT!
 *  If you want to integrate with the ROOT API you need to have gone through the prep work
 *    and setup your organisation and added your API Keys ect.
 */

import {environment} from "../environment";
import {Root} from "../integrations/root";

const url = environment.ROOT_API_URL;
const token = environment.ROOT_API_KEY;

/*
 * Basically all this Root Class actually does is
 *  - Handle the Basic HTTP Auth Header for you
 *  - Promisify all the HTTP Requests
 */
let root = new Root(url, token);

/*
 * This is a working URI on: 15-03-2018
 */
root.post("v1/insurance/quotes", {type: "root_gadgets", model_name: "iPhone 5"}).then((res) => {
  /*
   * The fulfilled promise variable: res will already be a JSON object, no deserialization required.
   */
});

/*
 * This is a working URI on: 15-03-2018
 */
root.get('v1/insurance/modules/root_gadgets/models').then((res) => {
  /*
   * The fulfilled promise variable: res will already be a JSON object, no deserialization required.
   */
});