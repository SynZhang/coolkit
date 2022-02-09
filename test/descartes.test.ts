import descartes from "../src/descartes"

test("descartes", () => {
  const result = descartes([
    [1, 2, 3],
    [4, 5, 6]
  ])

  expect(result).toEqual([
    [1, 4],
    [1, 5],
    [1, 6],
    [2, 4],
    [2, 5],
    [2, 6],
    [3, 4],
    [3, 5],
    [3, 6]
  ])
})
