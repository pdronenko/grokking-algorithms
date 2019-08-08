const personIsSeller = name => name[name.length - 1] === 'm';

export default (name, graph) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  const searched = [];
  while (searchQueue.length) {
    const person = searchQueue.shift();
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        return person;
      }
      searchQueue = searchQueue.concat(graph[person]);
      searched.push(person);
    }
  }
  return false;
};
