export const formatDate = (postDate: string) => {
  const date = new Date(postDate);

  const nameOfMonth = date.toLocaleString('default', { month: 'short' });

  const numberOfDay = date.toLocaleString('default', { day: 'numeric' });

  const numberOfYear = date.toLocaleString('default', { year: 'numeric' });

  return `${nameOfMonth} ${numberOfDay}, ${numberOfYear}`;
};
