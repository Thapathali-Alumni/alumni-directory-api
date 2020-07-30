const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require('express');
const httpStatus = require("http-status");
const router = express.Router()

// Swagger set up
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Thapathali Alumni API",
            version: "1.0.0",
            description: "An API project for Thapathali Alumni project",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            },
            contact: {
                name: "Thapathali Alumni Association",
                url: "https://github.com/thapathali-alumni",
                email: "bijaybzzay@gmail.com"
            }
        },
        servers: [{
            url: "http://localhost:3000/api/v1"
        }]
    },

    apis: ["./src/components.yaml",
        "./src/auto-sequelize-models.yaml",
        // "./src/models/user.model.js",
        "./routes/routes.index.js",
        "./src/routes/routes.unauth.js",
        "./src/routes/user.route.js",
    ]
};



const specs = swaggerJsdoc(options);

router.get("/api-docs.json", (req, res) => {
    res.send(specs);
});

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs, {
    explorer: true
}));


module.exports = router