import * as request from "request";

export let  get = async (route, options):Promise<any> => {
  return new Promise((resolve, reject) => {
    request.get(route, options, (error, res, body) => {
      if(error) reject(error);
      resolve(body);
    });
  });
};

export let post = async (route, options):Promise<any> => {
  return new Promise((resolve, reject) => {
    request.post(route, options, (error, res, body) => {
      if (error) reject(error);
      resolve(body);
    });
  });
};

export let put = async(route, options):Promise<any> => {
  return new Promise((resolve, reject) => {
    request.put(route, options, (error, res, body) => {
      if(error) reject(error);
      resolve(body);
    });
  });
};

export let remove = async (route, options):Promise<any> => {
  return new Promise((resolve, reject) => {
    request.delete(route, options, (error, res, body) => {
      if(error) reject(error);
      resolve(body);
    });
  });
};