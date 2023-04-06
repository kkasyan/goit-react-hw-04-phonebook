export const fields = {
  name: {
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
  },
  number: {
    title:
      // prettier-ignore
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
    required: true,
  },
};
