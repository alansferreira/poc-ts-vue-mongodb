import { Container } from "typescript-ioc";
import { HttpServer } from "./services/http-service";
import { StoreService } from "./services/store-service";
 
 
const httpService = Container.get<HttpServer>(HttpServer);
const storeService = Container.get<StoreService>(StoreService);


storeService.connect().then(() => {
  
  const [app, server] = httpService.start(3000);
  server.on('listening', () => {
    console.log('Rest Server listening on port 3000!');
  });

})
