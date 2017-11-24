import test from "ava";
import mock from "./test.mock";

test("Tests ava", t => {
  t.deepEqual("test", "test");
});

test("Tests mock", t => {
  t.deepEqual(mock.age, 29);
});
