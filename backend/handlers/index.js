const Todos = {};
module.exports = Todos;

let todos = [{
  id: 0,
  text: 'initial'
}];
let id = 1;

const getNewId = () => id++;

Todos.get = (req, res) => res.json(todos);

Todos.add = (req, res) => {
  todos.push({
    id: getNewId(),
    text: req.body.newToDo,
  });
  res.end();
}

Todos.update = (req, res) => {
  todos = todos.map((item) => {
    if(item.id == req.params.ID) {
      item.text = req.body.newToDo;
    }
    return item;
  })
  res.end();
}

Todos.delete = (req, res) => {
  todos = todos.filter((item) => {
    return item.id != req.params.ID;
  })
  res.end();
}
