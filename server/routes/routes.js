
 exports.findBySKU = function(req, res) {
    res.send({id:req.params.sku, name: "The Name", description: "description"});
};

exports.findAll = function(req, res) {
    res.send([  
    {
      "sku": "5207A",
      "name": "Red Delicious Apple",
      "color": "Red",
      "location": "USA"
    },
    {
      "sku": "5206A",
      "name": "Granny Apple",
      "color": "Green",
      "location": "Panama"
    },
    {
      "sku": "5233O",
      "name": "Valencia",
      "color": "Orange",
      "location": "Spain"
    },
    {
      "sku": "2233M",
      "name": "Mango",
      "color": "Red",
      "location": "Spain"
    },
    {
      "sku": "3206G",
      "name": "Green Seedless Grapes",
      "color": "Green",
      "location": "Panama"
    },
    {
      "sku": "1206S",
      "name": "Strawberries",
      "color": "Red",
      "location": "Spain"
    },
    {
      "sku": "3216G",
      "name": "Red Seedless Grapes",
      "color": "Red",
      "location": "Jamaica"
    }
    ]);
};

