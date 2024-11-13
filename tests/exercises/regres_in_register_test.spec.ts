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
import { test } from "@playwright/test";

test("Regres.in Register", async ({ request }) => {
  await request.post("https://reqres.in/api/register", {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
    },
  });
});
