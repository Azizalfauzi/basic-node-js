import https from "https";

const endpoint = "";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive Data : ${data}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Aziz",
  lastName: "Alfauzi",
});

request.write(body);
request.end();
