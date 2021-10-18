const memberDataMapper = require('../dataMappers/memberDataMapper')

const memberControler = {

    async getAll (req, res){
        try {
            const members = await memberDataMapper.allMembers();

            res.json({members});
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async getOneById(req, res){

        try {
            const id = req.params.id;
            const member = await memberDataMapper.OneMember(id) 
            res.json({member});
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
        
    },

    async updateOne(req, res){
        try {
            const id = req.params.id;
            const member = await memberDataMapper.OneMember(id);
            console.log(member)
            
            const newData = req.body;

            //console.log('Requete envoyé en PATCH : ' + newData.first_name);

            if(!member){
                res.status(404).json('Cant find this member with id : '+ member)
            }

            if(newData.first_name){
                member.first_name=newData.first_name
            };

            if(newData.last_name){
                member.last_name=newData.last_name
            };

            if(newData.date_of_birth){
                member.date_of_birth=newData.date_of_birth
            };

            const memberChange = await memberDataMapper.patchMember(member, id)
            
            // console.log('memberChange: ' + memberChange.last_name)

            res.json({memberChange})
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async deleteOne(req, res){
        try {
            const memberId = req.params.id
            await memberDataMapper.deleteMember(memberId);

            console.log('deleted member :' + memberId);

            res.json('Deleted member ' + memberId);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    async insert(req, res){
        try {

            const {first_name, last_name, date_of_birth, pseudo, email, password} = req.body

            
            const newMember = await memberDataMapper.insertMember({first_name, last_name, date_of_birth, pseudo, email, password})

            res.json({newMember})
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = memberControler;