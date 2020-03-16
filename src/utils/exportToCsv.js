const exportToCsv = rows => {
  const downloadCSV = (csv, filename) => {
    if (
      window.Blob === undefined ||
      window.URL === undefined ||
      window.URL.createObjectURL === undefined
    ) {
      throw new Error("Your browser doesn't support Blobs");
    }

    const csvFile = new Blob([csv], { type: "text/csv" });
    const downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  };
  const exportTableToCSV = (html, filename) => {
    const csv = [];
    for (let i = 0; i < rows.length; i += 1) {
      const row = [];
      const cols = Object.values(rows[i]);
      const hours = new Date(cols[5] * 1000).getHours().toString();
      const hrs = hours.length === 1 ? `0${hours}:` : `${hours}:`;
      const minutes = new Date(cols[5] * 1000).getMinutes().toString();
      const mnts = minutes.length === 1 ? `0${minutes}` : minutes;
      row.push(cols[0]);
      row.push(cols[1]);
      row.push(cols[2]);
      row.push(cols[3]);
      row.push(cols[4].toLocaleDateString());
      row.push(`${hrs}${mnts}`);
      row.push(`${cols[6].money.currency} ${cols[6].money.amount}`);
      row.push(cols[7] ? "open" : "close");
      csv.push(row.join(","));
    }

    downloadCSV(csv.join("\n"), filename);
  };

  exportTableToCSV(null, "table.csv");
};

export default exportToCsv;
