const db = require("../data/db");
module.exports = {
    find,
    findById,
    add,
    changeCompletedProperty
};
function changeCompletedProperty(task_or_project) {
    if (task_or_project.completed !== 1) {
        task_or_project.completed = false;
    } else {
        task_or_project.completed = true;
    }
    return task_or_project;
}
function find() {
    return db("projects");
}
function findById(id) {
    return db("projects")
        .where({ id })
        .first();
}
function add(project) {
    return db('projects', 'id')
        .insert(project)
        .then(id => findById(...id));
} 