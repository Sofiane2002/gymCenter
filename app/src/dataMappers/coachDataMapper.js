const client = require ('../database') 

module.exports = {

    async allCoaches(){
        const result = await client.query(`SELECT * FROM coaches`);
        return result.rows;

    },

    async OneCoach(id) {
        const result = await client.query(`SELECT * FROM coaches WHERE id=$1`, [id]);
        return result.rows[0]

    },

    async insertCoach(coaches){
        const result = await client.query(`INSERT INTO coaches (name_coach, speciality, activities_id, pseudo, email, password) VALUES ($1,$2,$3,$4,$5,$6)`,
        [coaches.name_coach, coaches.speciality, coaches.activities_id, coaches.pseudo, coaches.email, coaches.password]);
        return result.rows[0]

    },

    async patchCoach(coach, id) {
        const result = await client.query(`UPDATE "coaches" SET name_coach = $1, speciality=$2, pseudo=$3, email=$4, password=$5 updated_at=now() 
        WHERE id=$6 RETURNING* `,[coach.name_coach, coach.speciality, coach.pseudo, coach.email, coach.password, id]);
     
        return result.rows[0];
    },

    async deleteCoach(id){
        const result = await client.query(`DELETE FROM coaches WHERE id=$1`, [id]);

        return result;
    }
}
