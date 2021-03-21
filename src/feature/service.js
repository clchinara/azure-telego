const { Service } = require('./../map');
const query = `
  SELECT s.service_id, s.name, s.logo from service s 
  JOIN category c ON c.category_id = s.category_id
  WHERE c.category_id = $1
  ORDER BY s.service_id
`;

const service = (req, res, client) => {
  client.query(query, [Service[req.params.service]], (err, result) => {
    if (err && !result) {
      res.status(res.statusCode).send({
        status: res.statusCode,
        success: false,
        error: err,
      });
      return
    }

    const response = { service: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = service;
