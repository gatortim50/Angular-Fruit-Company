//

exports.findProduct = function(req, res) {
  var rs = 1;
  res.send({product: rs});
};

exports.findById = function(req, res) {
  res.send({id:req.params.id, name: "The Test Name", description: "The Test Description"});
};

exports.findAll = function(req, res) {
  res.send([
    {
      "id": "5207A",
      "name": "Red Delicious Apple",
      "color": "Red",
      "location": "USA"
    },
    {
      "id": "5206A",
      "name": "Granny Apple",
      "color": "Green",
      "location": "Panama"
    },
    {
      "id": "5233O",
      "name": "Valencia",
      "color": "Orange",
      "location": "Spain"
    },
    {
      "id": "2233M",
      "name": "Mango",
      "color": "Red",
      "location": "Spain"
    },
    {
      "id": "3206G",
      "name": "Green Seedless Grapes",
      "color": "Green",
      "location": "Panama"
    },
    {
      "id": "1206S",
      "name": "Strawberries",
      "color": "Red",
      "location": "Spain"
    },
    {
      "id": "3216G",
      "name": "Red Seedless Grapes",
      "color": "Red",
      "location": "Jamaica"
    }
  ]);
};
