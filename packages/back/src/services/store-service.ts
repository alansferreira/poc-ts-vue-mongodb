import { Singleton } from "typescript-ioc";
import { MongoClient } from "mongodb";

@Singleton
export class StoreService {
  uri = "mongodb+srv://alell-auth-admin:123Mudar123@dev-aws-us-east-1.3rzoa.mongodb.net/poc-tasks?retryWrites=true&w=majority";
  client: MongoClient;

  connect() {
    this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return this.client.connect();
  }
  
  coll<T>(collectionnName: string) {
    return this.client.db('poc-tasks').collection<T>(collectionnName);
  }
}