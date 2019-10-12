const express = require('express');

// tasks all belong to
const Projects = require('../projects/projectsModel');
const Resources = require('../helpers/actionModel')

const router = express.Router();

// Check github for requirements on all these.
// Build your model
//

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(project => {
            if (!req.body.title || !req.body.description) {
                res.status(400).json({ errorMessage: "Please provide title and description for the project." })
            } else {
            res.status(201).json(project)
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "There was an error while saving the project to the database"
            })
        })
})

// router.post('/:id', (req, res) => {
//     const id = req.params.id
//     Projects.insert(req.body)
//         .then(project => {
//             if (!id) {
//                 res.status(404).json({ message: "The project with the specified ID does not exist." })
//             } else if (!req.body.text) {
//                 res.status(400).json({ errorMessage: "Please provide text for the comment." })
//             } else {
//             res.status(201).json(project)
//         }})
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({
//                 error: "There was an error while saving the comment to the database"
//             })
//         })
// })
// VERIFY THIS, is 3 post requests repetitive?
router.post('/:id/actions', (req, res) => {
    const id = req.params.id
    Actions.insert(req.body)
        .then(action => {
            if (!id) {
                res.status(404).json({ message: "The action with the specified ID does not exist." })
            } else if (!req.body.text) {
                res.status(400).json({ errorMessage: "Please provide text for the comment." })
            } else {
            res.status(201).json(action)
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "There was an error while saving the comment to the database"
            })
        })  
})

router.get('/', (req, res) => {
    Projects.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "The action information could not be retrieved"
            })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id; 
        Projects.get(id)
            .then(project => {
                if (!id) {
                    res.status(404).json({ message: "The project with the specified ID does not exist." })
                } else {    
                res.status(200).json(project)
            }})
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: "The project information could not be retrieved"
                })
            })
})

router.get('/:id/actions', (req, res) => {
    const id = req.params.id;  
    Actions.get(id)
        .then(action => {
            if (!id) {
                res.status(404).json({ message: "The action with the specified ID does not exist." })
            } else {  
            res.status(200).json(action)
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "The action information could not be retrieved"
            })
        })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id; 
        Projects.remove(id)
        .then(project => {
            if (!req.params.id) {
                res.status(404).json({ message: 'The project with the specified ID does not exist' });
              } else {
            res.status(200).json({ message: 'The project has been destroyed' })
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The project could not be removed" });
      });
    }
);

router.delete('/:id/tasks', (req, res) => {
    const id = req.params.id; 
        Actions.remove(id)
        .then(action => {
            if (!req.params.id) {
                res.status(404).json({ message: 'The action with the specified ID does not exist' });
              } else {
            res.status(200).json({ message: 'The action has been destroyed' })
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The action could not be removed" });
      });
    }
);

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Projects.update(id, changes)
        .then(project => {
            if (!id) {
                res.status(404).json({ message: "The project with the specified ID does not exist." })
            } else if (!req.body.title || !req.body.description) {
                res.status(400).json({ errorMessage: "Please provide title and description for the project." })
            } else {    
            res.status(200).json(project)
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "The project information could not be modified."
            })
        })
});

router.put('/:id/tasks', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Actions.update(id, changes)
        .then(action => {
            if (!id) {
                res.status(404).json({ message: "The action with the specified ID does not exist." })
            } else if (!req.body.project_id || !req.body.description) {
                res.status(400).json({ errorMessage: "Please provide project_id and description for the action." })
            } else {    
            res.status(200).json(action)
        }})
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "The action information could not be modified."
            })
        })
})

module.exports = router;