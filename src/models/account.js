class Account {
    constructor(name, email, role, photoUrl) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.photo = photoUrl
    }
}

module.exports = Account


/**
 * @swagger
 *  components:
 *    schemas:
 *      Account:
 *        type: object
 *        required:
 *          - name
 *          - role
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          role:
 *            type: string
 *            description: Role of the user - admin, member, external
 *        example:
 *           name: Bijay 
 *           email: fake@email.com
 *           role: 'admin'
 */