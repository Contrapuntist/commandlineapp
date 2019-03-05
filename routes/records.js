
function records(data) {
  return (req, res) => {
    data.push(req.body.data);
    res.send(data);
  }
}

module.exports = records;