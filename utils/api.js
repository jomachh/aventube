export const API = async (name, page) => {
  const query = await fetch(
    // `http://www.omdbapi.com/?apikey=2dff07bc&s=+${name}&page=${page}`,
    'http://www.omdbapi.com/?i=tt3896198&apikey=2dff07bc',
  );
  const data = await query.json();

  return data;
};
