import {RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import {app} from './app';

const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  'mongodb-atlas',
);

const accounts = mongoClient.db('account').collection('accounts');

export {accounts};
