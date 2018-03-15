import {start as httpStart} from "./web-server/http-server";

/*
 *  This is the entry point for the application
 *    you should bootstrap all your code from here
 *    for convenience the HTTP Server has been started.
 */

httpStart().then((port) => {
  console.log(`HTTP SERVER LISTENING ON: ${port}`);
});