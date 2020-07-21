const AppDAO = require('./src/database/dao')
const MemberRepository = require('./src/database/member.repository')
const config = require('./src/config/config');

function main() {
    const dao = new AppDAO(config.DB_FILE)
    const memberRepo = new MemberRepository(dao)

    memberRepo.createTable()
    .then(()=> memberRepo.create("Kshitij Poudel"))
    .then(()=> memberRepo.getAll())
    .then((data)=> console.log(JSON.stringify(data)))
}
main();