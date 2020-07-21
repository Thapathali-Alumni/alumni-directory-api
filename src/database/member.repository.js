class MemberRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS member (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT)`;
    return this.dao.run(sql);
  }

  getById(id) {
    return this.dao.get(
      `SELECT * FROM member WHERE id = ?`,
      [id])
  }

  getAll() {
    return this.dao.all(`SELECT * FROM member`)
  }

  create(name) {
    return this.dao.run(`INSERT INTO member (name) VALUES (?)`, [name]);
  }

  update(project) {
    const { id, name } = project;
    return this.dao.run(`UPDATE member SET name = ? WHERE id = ?`, [name, id]);
  }

  delete(id) {
    return this.dao.run(`DELETE FROM member WHERE id = ?`, [id]);
  }
}

module.exports = ProjectRepository;
