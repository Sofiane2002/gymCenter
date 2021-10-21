const client = require ('../database') 

module.exports = {

    async allActivities(){
        const result = await client.query(`SELECT * FROM activities`);
        return result.rows;

    },

    async OneActivity(id) {
        const result = await client.query(`SELECT * FROM activities WHERE id=$1`, [id]);
        return result.rows[0]

    },

    async insertActivity(activities){
        const result = await client.query(`INSERT INTO activities (name, type) VALUES ($1,$2)`,
        [activities.name, activities.type]);
        return result.rows[0]

    },

    async patchActivity(activities, id) {
        const result = await client.query(`UPDATE "activities" SET name = $1, type=$2, updated_at=now() 
        WHERE id=$3 RETURNING* `,[activities.name, activities.type, id]);
     
        return result.rows[0];
    },

    async deleteActivity(id){
        const result = await client.query(`DELETE FROM activities WHERE id=$1`, [id]);

        return result;
    }
}
