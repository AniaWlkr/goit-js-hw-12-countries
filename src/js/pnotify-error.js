import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core/dist/PNotify.js';
import getRefs from './get-refs';

const ref = getRefs();

export default function onFetchError(err) {
  ref.replyBlockRef.innerHTML = '';
  error({
    text: `${err}`,
    sticker: false,
    closer: false,
    delay: 2500
  });
}