import App from "./App.svelte";
import Scrollbar from 'smooth-scrollbar';


Scrollbar.init(document.querySelector('body'), {});

let app = new App({
  target: document.querySelector('#main'),
});

export default app;