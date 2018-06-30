
const waiter = (time) => {
  return new Promise( (resolve, reject) => {

    setTimeout( () => {
      const dice = Math.random();
      if(dice > 0.5) {
        console.log('Resolving');
        resolve([dice, time]);
      } else {
        console.log('Reject');
        reject([dice, time]);
      }
    }, time);

  }); // Promise callback
};

waiter(1000)
.then( data => {
  console.log('resolve after 1 sec', data);
  return waiter(800);
})
.then( data => {
  console.log('Second resolved after another 1 second', data);
})
.catch( data => {
  console.warn('caught error', data);
});


const doWait = async() => {
  try {
    const first = await waiter(1000);
    console.log('first data', first);

    const second = await waiter(1000 * first[0]);
    console.log('second data', second);
  } catch(e) {
    console.warn('Got error', e);
  }
};

doWait();
