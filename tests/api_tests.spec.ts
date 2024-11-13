//api_tests.spec.ts
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET request with parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 53,
    },
  });
});

test("GET Booking with Header", async ({ request }) => {
  await request.get("https://restful-booker.herokuapp.com/booking", {
    headers: {
      "Accept-Language": "en-US,en;q=0.9,cs-CZ;q=0.8,cs;q=0.7,it;q=0.6",
    },
  });
});

test("POST Request with body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: faker.internet.username(),
        password: "123456",
        email: faker.internet.exampleEmail(),
      },
    }
  );
});

test("Update Booking with authorized request - transfer data", async ({
  request,
}) => {
  const authResponse = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
      },
    }
  );
  const responseBody = await authResponse.json();
  const token = responseBody.token;
  // ? Následující console.log slouží pouze k vypsání proměnných do konzole, není zde žádná jiný smysl proč toto používáme
  console.log("authResponse: " + JSON.stringify(authResponse, null, 2));
  console.log("responseBody: " + JSON.stringify(responseBody, null, 2));
  console.log("token: " + token);

  const putRequestHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Cookie: "token=" + token,
  };

  const putRequestData = {
    firstname: "James",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  await request.put("https://restful-booker.herokuapp.com/booking/1182", {
    headers: putRequestHeaders,
    data: putRequestData,
  });
});

/*
Vytvořte volání API v playwright:
Složka: projekt/tests/exercises
Test: regres_in_register_test.spec.ts
Request:
Metoda: POST
URL: https://reqres.in/api/register
Body:
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
Header:
Accept-Encoding: gzip, deflate, br
*/
