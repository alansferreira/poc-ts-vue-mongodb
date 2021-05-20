import { ObjectId } from "mongodb";

export interface ITaskModel {
  _id?: ObjectId | string;
  name: string;
  priority?: number;
  createdAt?: Date;
  finishedAt?: Date;
}