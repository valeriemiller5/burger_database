const express = require('express');
const sequelize = require('./config/connection');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');
app.use(routes);

const PORT = process.env.PORT || 3001

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App started on port ${PORT}`);
    })
})