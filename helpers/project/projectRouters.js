const express = require('express');
const Projects = require('./project_models.js');
const Tasks = require('./task_models.js');
const router = express.Router();
router.get('/', (req, res) => {
    Projects.find().then(projects => {
        res
            .status(200)
            .json(projects.map(Projects.changeCompletedProperty));
    })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Project server. Please try again.' });
    });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Projects.findById(id).then(project => {
        res
            .status(200
            ).json(Projects.changeCompletedProperty(project));
    })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Project server. Please try again.' });
    });
});
router.post('/', (req, res) => {
    const newProject = req.body;
    Projects.add(newProject)
        .then(project => {
            res
                .status(201)
                .json(Projects.changeCompletedProperty(project));
        })
        .catch (error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Project server. Please try again.' });
        });
});
// project tasks
router.get('/:project_id/tasks', (req, res) => {
    const project_id = req.params.project_id;
    Tasks.findAllByProjectId(project_id)
        .then(tasks => {
            res
                .status(200)
                .json(tasks.map(Projects.changeCompletedProperty));
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Project server. Please try again.' });
        });
});
router.get('/:project_id/tasks/:id', (req, res) => {
    const id = req.params.id;
    Tasks.findById(id)
        .then(task => {
            res
                .status(200)
                .json(Projects.changeCompletedProperty(task));
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Project server. Please try again.' });
        });
});
router.post('/:id/tasks', (req, res) => {
    const id = req.params.id;
    const task = req.body;
    Tasks.add(task, id)
        .then(task => {
            res
                .status(200)
                .json(Projects.changeCompletedProperty(task));
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Project server. Please try again.' });
        });
});
module.exports = router;