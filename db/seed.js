import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate(),
      salary: faker.number.int({ max: 10000 }),
    };
    await createEmployee(employee);
  }
}
