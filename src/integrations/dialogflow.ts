import {ApiAiClient} from "api-ai-javascript";
import { environment } from '../environment';

const client = new ApiAiClient({accessToken: environment.DIALOGFLOW_ACCESS_TOKEN})

    .textRequest('Hello!')
    .then((response) => {/* do something */})
    .catch((error) => {/* do something here too */})