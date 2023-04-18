import ToDoListModel from '../../models/ToDoListModel/index.js';

export const getAll = async (req, res) => {
  try {
    const todo = await ToDoListModel.find({});
    res.json(todo);
    console.log(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить все задачи',
    });
  }
};

export const getToDo = async (req, res) => {
  try {
    const todo = await ToDoListModel.find({ status: 0 });
    res.json(todo);
    console.log(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить текущие задачи',
    });
  }
};

export const getDone = async (req, res) => {
  try {
    const todo = await ToDoListModel.find({ status: 1 });
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить исполненные задачи',
    });
  }
};

export const getTrash = async (req, res) => {
  try {
    const todo = await ToDoListModel.find({ status: 2 });
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить удаленные задачи',
    });
  }
};

export const update = async (req, res) => {
  try {
    const todoId = req.params.id;
    console.log(req.body);

    const todo = await ToDoListModel.findOneAndUpdate(
      {
        _id: todoId,
      },

      {
        $set: { isChecked: req.body.isChecked, status: req.body.status },
      },
    );
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить задачу',
    });
  }
};

export const create = async (req, res) => {
  console.log(req.body);
  try {
    const newtodo = new ToDoListModel({
      description: req.body.description,
      status: 0,
      isChecked: false,
    });
    const todo = await newtodo.save();
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать задачу',
    });
  }
};
