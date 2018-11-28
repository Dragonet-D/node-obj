async function f() {
  return "aaa"
}

async function f1() {
  const data = await f();
  console.log(data);
}
f1();