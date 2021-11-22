import 'module-alias/register';
import { App } from './App';

const app = new App();

app.listen().then(() => console.log('todo oc')).catch(err => console.error(err));
