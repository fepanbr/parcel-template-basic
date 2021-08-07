console.log('Hello Parcel!');

const test = async function() {
  const promise = Promise.resolve(123);
  console.log(await promise);
}

test();

