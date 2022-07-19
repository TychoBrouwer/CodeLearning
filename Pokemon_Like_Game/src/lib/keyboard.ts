import { Keyboard } from './types';

export const keyboard: Keyboard = {
  LEFT: 'a',
  RIGHT: 'd',
  UP: 'w',
  DOWN: 's',
  _keys: {},

  listenForEvents: function(keys: Array<string>) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key: string) {
      this._keys[key] = false;
    }.bind(this));
  },

  _onKeyDown: function(event: KeyboardEvent) {
    const keyCode = event.key;

    if (keyCode in this._keys) {
      event.preventDefault();
      this._keys[keyCode] = true;
    }
  },

  _onKeyUp: function(event: KeyboardEvent) {
    const keyCode = event.key;

    if (keyCode in this._keys) {
      event.preventDefault();
      this._keys[keyCode] = false;
    }
  },

  isDown: function(keyCode: string):boolean {
    if (!(keyCode in this._keys)) {
      throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }

    return this._keys[keyCode];
  }
};
