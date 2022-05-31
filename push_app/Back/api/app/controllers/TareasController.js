const Tarea = require('../models/Tareas');

const messaging = require('../firebaseinit');


function index(req, res) {
    Tarea.find({})
        .then(tareas => {
            if (tareas.length) return res.status(200).send({ tareas });
            return res.status(204).send({ message: 'NO CONTENT' });
        }).catch(error => res.status(500).send({ error }));
}

function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.tareas) return res.status(404).send({ message: 'NOT FOUND' });
    let tareas = req.body.tareas;
    return res.status(200).send({ tareas });
}

function create(req, res) {
    console.log(req.body.data, "DATA ----- ");
    console.log(req.body.data.title, "TITLE ----- ");
    console.log(req.body.to, "req.body ----- ");

    let tokens = []
    tokens.push(req.body.to)
    console.log(tokens, "TOKENSISA");
    const message = {
        data: { title: req.body.data.title, body: req.body.data.body },
        notification:
            { title: req.body.data.title, body: req.body.data.body },

        tokens: ['cH3zvyRG2HcKoAgm2DF5OW:APA91bH3IsFrzIvCYG2bZBR6LSsY55OX3h2M79bWWh-6acm9PS1OB5ltiFXASJEFUcajiD3TGFWxkgem3XVSXAkaapulOmPG3B2Y_ZjnC1NhLYQsDpwdUMoI3YDsovBuK1RMPmhwSHiT'],
    };

    console.log(message,"message -------")

    messaging.sendMulticast(message).then(response => {
        // Response is an object of the form { responses: [] }
        console.log('Successfully sent message:', response);

    })
        .catch(error => {
            console.log('Error sending message:', error);
        });


    // new Tarea(req.body).save().then(tarea => res.status(201).send({ tarea })).catch(error => res.status(500).send({ error }));
}

function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.tareas) return res.status(404).send({ message: 'NOT FOUND' });
    let tarea = req.body.tareas.filter(x => x.id === req.params.key);
    let obj = tarea[0]
    if (req.body.estatus != undefined) {
        obj.estatus = req.body.estatus
    } else {
        obj.nombre = req.body.nombre
    }

    console.log(req.body.estatus, "req.body");
    console.log(obj, "Ojeto");

    obj.save().then(tarea => res.status(200).send({ message: "UPDATED", tarea })).catch(error => res.status(500).send({ error }));
}

function remove(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.tareas) return res.status(404).send({ message: 'NOT FOUND' });
    let objeto = req.body.tareas.filter(x => x.id === req.params.key);
    objeto[0].remove().then(tarea => res.status(200).send({ message: 'REMOVED', tarea })).catch(error => res.status(500).send({ error }));
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Tarea.find(query).then(tareas => {
        if (!tareas.length) return next();
        req.body.tareas = tareas;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}
module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}


