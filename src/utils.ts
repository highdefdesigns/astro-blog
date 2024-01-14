// Format date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// Capatalize first letter
function capitalize(str: string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

export { formatDate, capitalize };
