/// <reference path="./script.d.ts" />
import "cheetah-grid";

const records = Array.from({ length: 32 }, (_, i) => ({
  v1: i + 1,
  v2: i + 2,
  v3: i + 3,
  v4: i + 4,
  v5: i + 5,
  v6: i + 6,
  v7: i + 7,
  v8: i + 8,
  v9: i + 9,
  v10: i + 10,
  v11: i + 11,
  v12: i + 12,
  v13: i + 13,
}));

document.querySelector("#record").textContent = JSON.stringify(records, null, 2);

new cheetahGrid.ListGrid({
  parentElement: document.querySelector(".sample-layout"),
  layout: {
    header: [
      [
        { colSpan: 2, rowSpan: 2 },
        { colSpan: 2 },
        { colSpan: 5, caption: "見本" },
      ],
      [
        { colSpan: 2, caption: "ヘッダ列群" },
        { colSpan: 3, caption: "例" },
        { colSpan: 2, caption: "色変更" },
      ],
      [
        { rowSpan: 3 },
        { rowSpan: 3, caption: "v1" },
        { caption: "v2", sort: true },
        { caption: "v3", sort: true },
        { caption: "v4", sort: true },
        { caption: "v5", sort: true },
        { caption: "v6", sort: true },
        { caption: "v7", sort: true },
        { caption: "v8", sort: true },
      ],
      [
        { caption: "v9", sort: true },
        { caption: "v10", sort: true },
        { caption: "v11", sort: true },
      ],
      [
        { caption: "v12", sort: true },
        { caption: "v13", sort: true },
      ],
    ],
    body: [
      [
        { rowSpan: 3 },
        { field: "v1", rowSpan: 3 },
        { field: "v2" },
        { field: "v3" },
        { field: "v4" },
        { field: "v5" },
        { field: "v6" },
        { field: "v7" },
        { field: "v8" },
      ],
      [
        { field: "v9" },
        { field: "v10" },
        { field: "v11" },
      ],
      [
        { field: "v12" },
        { field: "v13" },
      ],
    ],
  },
  frozenColCount: 0,
  dataSource: new class extends cheetahGrid.data.DataSource {
    constructor() {
      super({
        length: records.length,
        source: records,
        get: (index) => records[index],
      });
    }

    sort(field, dir) {
      document.querySelector("#sorted").textContent = `${field} ${dir} @ ${new Date().toISOString()}`;
      return super.sort(field, dir);
    }
  }
});
