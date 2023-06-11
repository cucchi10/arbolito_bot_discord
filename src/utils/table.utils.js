const Table = require("cli-table3");

function buildTable(data) {
  try {
    const table = new Table({
      chars: {
        top: "═",
        "top-mid": "╤",
        "top-left": "╔",
        "top-right": "╗",
        bottom: "═",
        "bottom-mid": "╧",
        "bottom-left": "╚",
        "bottom-right": "╝",
        left: "║",
        "left-mid": "╟",
        mid: "─",
        "mid-mid": "┼",
        right: "║",
        "right-mid": "╢",
        middle: "│",
      },
    });

    table.push(Object.keys(data[0]));
    data.forEach((item) => {
      table.push(
        Object.values(item).map((x) =>
          x ? String(x).replace(/\b\w{35,}\b/g, (word) => word + "\n") : ""
        )
      );
    });

    return table.toString();
  } catch (error) {
    return "";
  }
}

module.exports = {
  buildTable,
};
