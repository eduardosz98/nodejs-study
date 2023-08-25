// JavaScript code​​​​​​‌​‌​​​​​‌‌​‌‌​​‌‌‌​​​‌​​​ below
var EventEmitter = require("events");

/**
 *
 * @param {object} opts
 * @param {any} opts.fn
 * @param {number} opts.interval
 * @param {AbortSignal} opts.signal
 * @returns {EventEmitter}
 */
const createEE = ({ fn, interval, signal }) => {
  const e = new EventEmitter();
  e.emit("data", "Creating");

  signal.addEventListener(
    "abort",
    () => {
      e.emit("close");
    },
    { once: true }
  );
  const emit = () => {
    try {
      e.emit("data", fn());
    } catch (error) {
      e.emit("error", error);
    }
  };

  setTimeout(() => {
    
  }, timeout);
  setTimeout(emit, interval);
  setTimeout(emit, interval);
  setTimeout(emit, interval);
  setTimeout(emit, interval);

  return e;
};

let counter = 0;
const ac = new AbortController();

// emitter should emit
// in `data` events: 1, 2, 3, 4
// then emit `close` event
const e = createEE({
  fn: () => {
    return ++counter;
  },
  interval: 300,
  signal: ac.signal,
});

e.on("data", console.log);
e.on("close", () => console.log("closed"));

setTimeout(() => {
  console.log("stopping after 1 second");
  ac.abort();
}, 1000);
