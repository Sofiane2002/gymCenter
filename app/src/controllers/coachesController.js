const coachDataMapper = require('../dataMappers/coachDataMapper')

const coachControler = {

    async getAll (req, res){
        try {
            const coaches = await coachDataMapper.allCoaches();

            res.json({coaches});
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async getOneById(req, res){

        try {
            const id = req.params.id;
            const coach = await coachDataMapper.OneCoach(id) 
            res.json({coach});
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
        
    },

    async updateOne(req, res){
        try {
            const id = req.params.id;
            const coach = await coachDataMapper.OneCoach(id);
            console.log(coach)
            
            const newData = req.body;


            if(!coach){
                res.status(404).json('Cant find this coach with id : '+ coach)
            }

            if(newData.name_coach){
                coach.name_coach=newData.name_coach
            };

            if(newData.speciality){
                coach.speciality=newData.speciality
            };

            if(newData.pseudo){
                coach.pseudo=newData.pseudo
            };

            if(newData.email){
                coach.email=newData.email
            };

            if(newData.password){
                coach.password=newData.password
            };
             

            const coachChange = await coachDataMapper.patchCoach(coach, id)
            

            res.json({coachChange})
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async deleteOne(req, res){
        try {
            const coachId = req.params.id
            await coachDataMapper.deleteCoach(coachId);

            console.log('deleted coach :' + coachId);

            res.json('Deleted coach ' + coachId);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async insert(req, res){
        try {

            const {name_coach, speciality, activities_id, pseudo, email, password} = req.body

            const newCoach = await coachDataMapper.insertCoach({name_coach, speciality, activities_id, pseudo, email, password});

            res.json({newCoach})
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = coachControler;