export const filterContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredName = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    const result = normalizedName.includes(normalizedFilter);
    return result;
  });
  return filteredName;
};
