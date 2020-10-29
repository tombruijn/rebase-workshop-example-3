function assertEqual(left, right) {
  if (left === right) {
    return;
  }

  throw new Error(`Assertion failure.\n  Left:  ${left}\n  Right: ${right}`);
}

const tests = [];

function test(fn) {
  tests.push(fn);
};

function runTests() {
  const errors = [];
  for(const testFn of tests) {
    try {
      testFn();
      process.stdout.write(".");
    } catch (e) {
      errors.push(e)
      process.stdout.write("X");
    }
  }

  process.stdout.write("\n\n");
  if (errors.length > 0) {
    for (const error of errors) {
      process.stdout.write(`${error.message}\n\n`);
    }
    process.stdout.write("Tests failed!");
  } else {
    process.stdout.write("Tests success!");
  }
  process.stdout.write("\n");
}

test(function() {
  assertEqual(1, 2); // TODO: Fix me!
});

test(function() {
  assertEqual(1, 1);
});

test(function() {
  assertEqual(2, 2);
});

test(function() {
  assertEqual(3, 3);
});

test(function() {
  assertEqual(3, 3);
});

runTests();
