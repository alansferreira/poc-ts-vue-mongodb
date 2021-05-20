import * as express from "express";
import {Server, Path, GET, PathParam, ContextRequest, POST} from "typescript-rest";
import { Singleton } from "typescript-ioc"; 
import { TaskRoute } from "../routes/task-route";

@Singleton
export class HttpServer {

  setup(app: express.Application){
    Server.buildServices(app, TaskRoute);
  }

  start(port: number) {
    const app = express();
    this.setup(app);
    return [app, app.listen(port)];
  }
}