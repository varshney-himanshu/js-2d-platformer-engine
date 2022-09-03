// const Engine = require("../scripts/engine");
import Engine from "../scripts/engine";

jest.useFakeTimers();

test("should throw an error if non-number frameRate is passed in the constructor", () => {
  const t = () => {
    new Engine(
      null,
      () => {},
      () => {}
    );
  };

  expect(t).toThrow("frameRate must be a number!");
});

test("should throw an error if non-function update parameter is passed in the constructor", () => {
  const t = () => {
    new Engine(30, null, () => {});
  };

  expect(t).toThrow("Update is not a function!");
});

test("should throw an error if non-function render parameter is passed in the constructor", () => {
  const t = () => {
    new Engine(30, () => {}, null);
  };

  expect(t).toThrow("Render is not a function!");
});

test("engine's update method should be called around 30 times when frameRate is 30FPS ", async () => {
  expect.assertions(1);

  let frameRates = 30;
  let callCount = 0;

  async function getCallCountsPerSecond() {
    function render() {}
    function update() {
      callCount++;
    }

    const engine = new Engine(frameRates, update, render);
    engine.start();
    await setTimeout(() => {
      engine.stop();
    }, 1000);
  }

  await getCallCountsPerSecond();

  jest.advanceTimersByTime(1000);

  const isUpdateCallsMatchingFPS =
    callCount === frameRates || callCount === frameRates - 1;
  expect(isUpdateCallsMatchingFPS).toBe(true);
});
test("engine's update method should be called around 60 times when frameRate is 60FPS ", async () => {
  expect.assertions(1);

  let frameRates = 60;
  let callCount = 0;

  async function getCallCountsPerSecond() {
    function render() {}
    function update() {
      callCount++;
    }

    const engine = new Engine(frameRates, update, render);
    engine.start();
    await setTimeout(() => {
      engine.stop();
    }, 1000);
  }

  await getCallCountsPerSecond();

  jest.advanceTimersByTime(1000);

  const isUpdateCallsMatchingFPS =
    callCount === frameRates || callCount === frameRates - 1;
  expect(isUpdateCallsMatchingFPS).toBe(true);
});

test("engine's render method is running just after the update method", async () => {
  expect.assertions(1);

  let frameRates = 10;
  let lastCallFunctionIdentifier = null;
  let updateCalled = false;
  let renderCalled = false;

  async function getCallCountsPerSecond() {
    async function update() {
      if (!updateCalled) {
        updateCalled = true;
        lastCallFunctionIdentifier = "UPDATE";
      }
    }
    function render() {
      if (!renderCalled) {
        renderCalled = true;
        lastCallFunctionIdentifier = "RENDER";
      }
    }

    const engine = new Engine(frameRates, update, render);
    engine.start();
    await setTimeout(() => {
      engine.stop();
    }, 100);
  }

  await getCallCountsPerSecond();

  jest.advanceTimersByTime(100);

  expect(lastCallFunctionIdentifier).toBe("RENDER");
});

test("engine's render method should be called around 30 times when frameRate is 30FPS ", async () => {
  expect.assertions(1);

  let frameRates = 30;
  let callCount = 0;

  async function getCallCountsPerSecond() {
    function update() {}
    function render() {
      callCount++;
    }

    const engine = new Engine(frameRates, update, render);
    engine.start();
    await setTimeout(() => {
      engine.stop();
    }, 1000);
  }

  await getCallCountsPerSecond();

  jest.advanceTimersByTime(1000);

  const isRenderCallsMatchingFPS =
    callCount === frameRates || callCount === frameRates - 1;
  expect(isRenderCallsMatchingFPS).toBe(true);
});

test("engine's update method should be called around 60 times when frameRate is 60FPS ", async () => {
  expect.assertions(1);

  let frameRates = 60;
  let callCount = 0;

  async function getCallCountsPerSecond() {
    function render() {}
    function update() {
      callCount++;
    }

    const engine = new Engine(frameRates, update, render);
    engine.start();
    await setTimeout(() => {
      engine.stop();
    }, 1000);
  }

  await getCallCountsPerSecond();

  jest.advanceTimersByTime(1000);

  const isUpdateCallsMatchingFPS =
    callCount === frameRates || callCount === frameRates - 1;
  expect(isUpdateCallsMatchingFPS).toBe(true);
});
