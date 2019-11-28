exports.createtask = function(req, res) {

    let query = "SELECT * FROM USER";

    db.query(query, (err, docs) => {
        if (err) {
            console.log(err);
        }
        console.log(docs);
        res.status(200).json({ message: 'Connected!' });
    });
};
