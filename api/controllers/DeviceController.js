/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'add': function(req,res) {
		
		var id = req.param('id');
		
		Device.create({id: id, state: 0}, function(err,done){
			if (err) {
				return res.json({"ERROR" : "CODE 400"});
			}
			else
			{
				return res.json({"SUCCESS" : "200"});
			}
		});
		
	}
	
};

