function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
   while (true) {
      console.log('Microservices rock!');
      console.log(`My favorite color is ${process.env.COLOR}`);
      await sleep(5000);
   }
}

main();
