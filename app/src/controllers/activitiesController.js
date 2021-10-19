const activitiesDataMapper = require('../dataMappers/activitiesDataMapper')

const activitiesControler = {

    async getAll (req, res){
        try {
            const activities = await activitiesDataMapper.allActivities();

            res.json({activities});
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async getOneById(req, res){

        try {
            const id = req.params.id;

            const activity = await activitiesDataMapper.OneActivity(id) 
            res.json({activity});

        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
        
    },

    async updateOne(req, res){
        try {
            const id = req.params.id;

            const activity = await activitiesDataMapper.OneActivity(id);
            console.log(activity)
            
            const newData = req.body;


            if(!activity){
                res.status(404).json('Cant find this coach with id : '+ coach)
            }

            if(newData.name){
                activity.name=newData.name
            };

            if(newData.type){
                activity.type=newData.type
            };

            const activityChange = await activitiesDataMapper.patchActivity(activity, id)
            

            res.json({activityChange})
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async deleteOne(req, res){
        try {
            const activityId = req.params.id
            await activitiesDataMapper.deleteActivity(activityId);

            console.log('deleted activity :' + activityId);

            res.json('Deleted activity ' + activityId);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async insert(req, res){
        try {

            const {name, type} = req.body

            const newActivity = await activitiesDataMapper.insertActivity({name, type});

            res.json({newActivity})
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = activitiesControler;