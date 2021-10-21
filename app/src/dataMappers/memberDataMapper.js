const client = require ('../database') 

module.exports = {

    async allMembers(){
        const result = await client.query(`SELECT * FROM member`);
        return result.rows;

    },

    async OneMember(id) {
        const result = await client.query(`SELECT * FROM member WHERE id=$1`, [id]);
        return result.rows[0]

    },

    async insertMember(member){
        const result = await client.query(`INSERT INTO member (first_name, last_name, date_of_birth, pseudo, email, password) VALUES ($1,$2,$3,$4,$5,$6)`,
        [member.first_name, member.last_name, member.date_of_birth, member.pseudo, member.email, member.password])

        return result.rows[0]

    },

    async patchMember(member, id) {
        const result = await client.query(`UPDATE "member" SET first_name = $1, last_name=$2, date_of_birth=$3, updated_at=now() 
        WHERE id=$4 RETURNING* `,[member.first_name, member.last_name, member.date_of_birth, id]);
     
        return result.rows[0];
    },

    async deleteMember(id){
        const result = await client.query(`DELETE FROM member WHERE id=$1`, [id]);

        return result;
    }
}
