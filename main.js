import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/big-smile';

const generate = () => {
  let seedInput = document.querySelector('#seed').value
  let svg = createAvatar(style, {
    seed: seedInput,
  });
  document.querySelector('.dicebear').innerHTML=svg
}
document.querySelector('#generate-seed').addEventListener("click", generate)
document.querySelector('#seed').addEventListener("keypress", e => {(e.key === 'Enter') && generate()})
generate()
console.log('Demo by fiandinw')
console.log('Follow @mahasiswa.fullstack (instagram)')