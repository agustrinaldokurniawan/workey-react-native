import {Stitch, AnonymousCredential} from 'mongodb-stitch-react-native-sdk';

const APP_ID = 'workey-tgxhu';

const app = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeDefaultAppClient(APP_ID);

// const app = Stitch.hasAppClient(APP_ID)
//   ? Stitch.getAppClient(APP_ID)
//   : Stitch.initializeAppClient(APP_ID);

export {app};
