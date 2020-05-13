const db = require("../../data/db");
module.exports = {
    find,
    findById,
    add,
    findAllByProjectId
};
function find() {
    return db("tasks");
}

function findAllByProjectId(id) {
    return db("tasks")
        .where({ project_id: id });
}
function add(task, project_id) {
    task.project_id = project_id;
    return db('tasks', 'id')
        .insert(task)
        .then(id => findById(...id));
}
function findById(id){
    return db
        .select('project_name', 'project_description', 'task_description', 'task_note')
        .from('projects')
        .join('tasks', 'tasks.project_id', '=', 'project_id')
        .where('project_id', '=', id)
}