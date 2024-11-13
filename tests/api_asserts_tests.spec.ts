import { test, expect } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  console.log(
    "Response from Tredgate Train API: " + JSON.stringify(response, null, 2)
  );
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");
});

test("Booking Content-Type Header Check", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  const headers = response.headers();
  console.log(JSON.stringify(headers, null, 2));
  const contentTypeHeader = headers["content-type"];
  expect(contentTypeHeader).toBe("application/json; charset=utf-8");
  expect(contentTypeHeader).toContain("application/json");
});

test("Regres.in body.page tests", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users", {
    params: {
      page: 2,
    },
  });
  const responseBody = await response.json();
  // * Budeme testovat, že se nám vrátí: page (existuje v response), page je typ number, page = 2
  expect(responseBody.page).toBeDefined(); // * Kontrola toho, že page existuje v responseBody
  expect(typeof responseBody.page).toBe("number"); // * Kontrola typ page je číslo
  expect(responseBody.page).toBe(2); // * Kontrola page = 2
});

/*
Vytvořte nový test: exercise_api_asserts.spec.ts ve složce exercises
Vytvořte volání API v playwright na https://tegb-backend-877a0b063d29.herokuapp.com/train
Metoda: PATCH (request.patch())
Otestujte, že timestamp je text (string), id = 1

*/
