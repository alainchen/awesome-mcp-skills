export function duplicateNameErrors(file, entries) {
  const errors = [];
  const firstEntryByName = new Map();

  entries.forEach((entry, index) => {
    if (typeof entry.name !== "string") return;

    const normalizedName = entry.name.trim().toLowerCase();
    if (!normalizedName) return;

    const firstEntry = firstEntryByName.get(normalizedName);
    if (firstEntry === undefined) {
      firstEntryByName.set(normalizedName, index + 1);
      return;
    }

    errors.push(
      `${file} entry ${index + 1} (${entry.name}): duplicate name; first appears at entry ${firstEntry}`
    );
  });

  return errors;
}
