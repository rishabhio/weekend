/**
 * SwitchController
 *
 * @description :: Server-side logic for managing switches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'push' : function(req,res){
	
		var id = req.param('id');
		var state = req.param('state');
		
		Device.find({id: id}, function(err,device){
		
			if (err)
			{
				return res.json({"STATUS" : "ERROR 400.1"});
			}
			else
			{
			
				Device.update({id:id}, {state:state},function(err,done){
					
					if (err)
					{
						return res.json({"STATUS" : "ERROR 400.2"});
					}
					else
					{
						return res.json({"STATUS" : "200"});
					}
				
				});
			
			}
		
		});
	
	},
	
	'pull' : function(req,res){
	
		var id = req.param('id');
		
		Device.find({id:id},function(err,device){
			
			if (err)
					{
						return res.json({"STATUS" : "ERROR 400.2"});
					}
					else
					{
						return res.json({"STATE" : device[0].state });
					}
		
		});
	
	}
	
};

