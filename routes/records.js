
function records(data) {
  return (req, res) => {
    if (Array.isArray(req.body.data)) {
      req.body.data.forEach(obj => {
        data.push(obj);
      });
    } else {
      data.push(req.body.data);
    }
    res.send(data);
  }
}

module.exports = records;