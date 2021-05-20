import { ObjectId } from "mongodb";
import { Inject } from "typescript-ioc";
import { Path, POST } from "typescript-rest";
import { ITaskModel } from "../models/task-model";
import { StoreService } from "../services/store-service";

@Path("/task")
export class TaskRoute {
  @Inject storeService: StoreService;

  @POST
  async insertTask( task: ITaskModel ) {
    const taskStore = this.storeService.coll<ITaskModel>("tasks");
    
    const r = await taskStore.insertOne({... task, _id: new ObjectId()});
    
    return r.insertedId.toString()
  }
}