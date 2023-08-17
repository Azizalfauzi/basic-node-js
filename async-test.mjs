function samplePromise() {
  return Promise.resolve("Aziz");
}

const name = await samplePromise();
console.info(name);
