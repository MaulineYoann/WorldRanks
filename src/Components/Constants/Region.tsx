export const regions = [
  "Americas",
  "Antarctic",
  "Africa",
  "Europe",
  "Asia",
  "Oceania",
];
const regionLabel = {
  AMERICA: "america",
  ANTARTICAS: "antarticas",
  EUROPE: "europe",
  ASIA: "asia",
  OCEANIA: "oceania",
  AFRICA: "africa"
}

export const transformedRegion = {
  [regionLabel.AMERICA]: "Americas",
  [regionLabel.ANTARTICAS]: "Antarctic",
  [regionLabel.EUROPE]: "Europe",
  [regionLabel.ASIA]: "Asia",
  [regionLabel.OCEANIA]: "Oceania",
  [regionLabel.OCEANIA]: "Africa"
}

export const sortOption = {
  population: "population",
  area: "area",
  alphabetical: "alphabetical"
}
