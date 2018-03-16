import {start as httpStart} from "./web-server/http-server";

/*
 *  This is the entry point for the application
 *    you can add all your application logic here
 *    or reference from here.. but this is the entry point.
 */

httpStart().then((port) => {
  console.log(`HTTP SERVER LISTENING ON: ${port}`);
});