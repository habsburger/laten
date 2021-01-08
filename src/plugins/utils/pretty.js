export const pretty = date =>
  new Date(date)
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ")
    .replace(/( \d+)$/, ",$1");
