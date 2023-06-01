export const formatDate = (date: Date, locale: string) => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  const formattedDate = date.toLocaleString(locale, formatOptions);

  return formattedDate.split(" ").join("/");
};
