describe("dom manipulations", () => {
  let addCounter;
  beforeEach(() => {
    document.body.innerHTML = `
    <main class="main-content">
      <section class="counter-content">
        Counter:
        <div class="counter" id="counter">0</div>
        <button id="incBtn">Click Me</button>
      </section>
    </main>
  `;
    addCounter = require("./functional");
    document
      .getElementById("incBtn")
      .addEventListener("click", addCounter.addCounter);
  });

  test("the click event for html", () => {
    const oldValue = +document.getElementById("counter").textContent;
    document.getElementById("incBtn").click();
    expect(document.getElementById("counter").textContent).toBe(
      oldValue + 1 + ""
    );
  });

  describe("function mocks", () => {
    test("creating muck functions", () => {
      document.getElementById("incBtn").removeEventListener("click", {});

      const mockClick = jest.fn();
      document.getElementById("incBtn").addEventListener("click", mockClick);
      document.getElementById("incBtn").click();
      expect(mockClick).toBeCalled();
      expect(mockClick).toBeCalledTimes(1);

      document.getElementById("incBtn").click();
      document.getElementById("incBtn").click();
      expect(mockClick).toBeCalledTimes(3);
    });

    test("function mock Return value", () => {
      const myMock = jest.fn();
      myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce("x")
        .mockReturnValue(true);
      expect(myMock()).toEqual(10);
      expect(myMock()).toEqual("x");
      expect(myMock()).toEqual(true);

      expect(myMock.mock.results[1].value).toBe("x");
    });

    test("function mockImplementations", () => {
      const newFn = jest.fn();
      newFn.mockImplementation(() => "DEMO");
      const test = newFn();
      expect(test).toBe("DEMO");
    });

    test("Mocking Modules", () => {
      jest.mock("./behavioral", () => ({
        add: (a, b) => a * b,
        newAdd: jest.fn(),
      }));

      const newRequired = require("./behavioral");
      newRequired.newAdd.mockImplementation(() => "Iammocked");
      expect(newRequired.add(2, 2)).toBe(4);
      expect(newRequired.newAdd()).toBe("Iammocked");
    });
  });

  test("snapshot test", () => {
    const oldValue = +document.getElementById("counter").textContent;
    document.getElementById("incBtn").click();
    expect(document.getElementById("counter").textContent).toBe(
      oldValue + 1 + ""
    );
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
