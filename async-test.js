function samplePromise() {
  return Promise.resolve("Aziz");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
