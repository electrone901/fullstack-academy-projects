turbo console: `ctrl alt l`
CommentOut `shift alt c`
unComment `shift alt u`
delete `shift alt d`
displays very fast logs
for debbugin is really good


Omega the best
case, Big O the worst
case and Theta the average
case

// try and catch use it more


//  Editor Associations
{
    "files.autoSave": "onFocusChange",
    "files.autoSaveDelay": 100,
    "emmet.extensionsPath": "",
    "files.associations": {
        "*.js": "javascriptreact"
    }
}



// ACTION TYPES
const GET_CANDIES = 'GET_CANDIES';
const GET_CANDY = 'GET_CANDY';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// ACTION CREATOR
const getCandies = (candies) => ({
    type: GET_CANDIES,
    candies,
});

const getSingleCandy = (candy) => ({
    type: GET_CANDY,
    candy,
});

const candyQuantity = (candy) => ({
    type: UPDATE_QUANTITY,
    candy,
});

// THUNK CREATOR
export const fetchCandiesFromServer = () => {
    return async(dispatch, getState, { axios }) => {
        const { data } = await axios.get('/api/candies');
        // sending an obj that reducer needs
        dispatch(getCandies(data));
    };
};

export const fetchCandy = (id) => {
    return async(dispatch, getState, { axios }) => {
        const { data } = await axios.get(` / api / candies / $ { id }
`);
        dispatch(getSingleCandy(data));
    };
};

export const updateCandyQuantity = (id, candy) => {
    return async(dispatch, getState, { axios }) => {
        const { data } = await axios.put(` / api / candies / $ { id }
`, candy);
        dispatch(candyQuantity(data));
    };
};

// INITIAL STATE
const initialState = {
    candies: [],
    candy: {},
};

// REDUCER
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CANDIES:
            return {...state, candies: action.candies };
        case GET_CANDY:
            return {...state, candy: action.candy };
        case UPDATE_QUANTITY:
            console.log('reducer');
            return {...state, candy: action.candy };
        default:
            return state;
    }
};


`
SEQUELIZE `
Defining models:

    const Article = db.define('article', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        }

    });
    const Cat = db.define('cats', {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER
    })

    const Owner = db.define('owners', {
        name: Sequelize.STRING
    })

    //1 to many relationship between cats and owners
    /*Cat.belongsTo(Owner); //set that Foreign Key on the cats table
    Owner.hasMany(Cat)*/

    //Many to Many
    Cat.belongsToMany(Owner, { through: 'cats_owners' });
    Owner.belongsToMany(Cat, { through: 'cats_owners' });

    //instance methods && class methods

    Cat.prototype.sayHello = function() { //instance method
        console.log(`
$ { this.name }
says meow `);
    }

    //class method
    Cat.getKittens = async function() {
        const kittens = await Cat.findAll({
            where: {
                age: {
                    [Op.lte]: 3
                }
            }
        })
        return kittens;
    }

    module.exports = {
        db,
        Cat,
        Owner
    }

    // defining instances
    Article.prototype.truncate = function(length) {
        this.content = this.content.slice(0, length)
    }

    // Sequelize hooks All hooks are defined using a function that takes two arguments.The first argument is the instance passing through the lifecycle hook.The second argument is an options object(rarely used - you can often ignore it or exclude it).
    // given the following User model:
    const User = db.define('users', {
            name: Sequelize.STRING,
            password: Sequelize.STRING
        })
        // we want to hook into the "beforeCreate" lifecycle event
        // this lifecycle event happens before an instance is created and saved to the database,
        // so we can use this to change something about the instance before it gets saved.

    User.beforeCreate((userInstance, optionsObject) => {
        userInstance.password = hash(userInstance.password)
    })

    // Instance Methods The code example below demonstrates an instance method.Instance methods are methods that are available on instances of the model.We often write these to get information or do something related to that instance.

    Definition:
        const Pug = db.define('pugs', { /* etc*/ })

    // instance methods are defined on the model's .prototype
    Pug.prototype.celebrateBirthday = function() {
        // 'this' in an instance method refers to the instance itself
        const birthday = new Date(this.birthday)
        const today = new Date()
        if (birthday.getMonth() === today.getMonth() && today.getDate() === birthday.getDate()) {
            console.log('Happy birthday!')
        }
    }
    Usage:
        const createdPug = await Pug.create({ name: 'Cody' }) // let's say `
    birthday ` defaults to today
        // the instance method is invoked *on the instance*
createdPug.celebrateBirthday() // Happy birthday!


// Class Methods
// The code example below demonstrates a class method.Class methods are methods that are available on the model itself(aka the class).We often write these to get instances, or do something to more than one instance

Definition
const Pug = db.define('pugs', { /* etc*/ })

// class methods are defined right on the model
Pug.findPuppies = function() {
    // 'this' refers directly back to the model (the capital "P" Pug)
    return this.findAll({ // could also be Pug.findAll
        where: {
            age: { $lte: 1 } // find all pugs where age is less than or equal to 1
        }
    })
}
"Select"
Clauses("attributes")
const allPugs = await Pug.findAll({
    attributes: ['id', 'name', 'age'] // like saying: SELECT id, name, age from pugs;
})
console.log(allPugs) // [{id: 1, name: 'Cody', age: 7}, {id: 2, name: "Murphy", age: 4}]
    // note that all the pugs only have key-value pairs for id, name and age included

WHERE CLAUSE
const sevenYearOldPugs = await Pug.findAll({
    where: { // like saying: SELECT * from pugs WHERE age = 7;
        age: 7,
    }
})
AND
const sevenYearOldBlackPugs = await Pug.findAll({
    where: { // like saying: SELECT * from pugs WHERE age = 7 AND color = 'black';
        age: 7,
        color: 'black'
    }
})

OPERATOR LESS THAN
// Sequelize stores these operators on the `
    Sequelize.Op ` module:
const Op = Sequelize.Op

Pug.findAll({
        where: {
            age: {
                [Op.lte]: 7 // square brackets are needed for property names that aren't plain strings
            }
        }
    })
    // SELECT * FROM pugs WHERE age <= 7
Pug.findAll({
        where: {
            age: {
                $lte: 7 // soon to be replaced by [Op.lte]
            }
        }
    })
    // SELECT * FROM pugs WHERE age = 7 OR age = 6
Pug.findAll({
    where: {
        age: {
            $or: [ // soon to be replaced by [Op.or]
                { $eq: 7 }, // soon to be replaced by [Op.eq]
                { $eq: 6 } // soon to be replaced by [Op.eq]
            ]
        }
    }
})

// ASOCIATIONS
ONE - ONE: https: //sequelizedocs.fullstackacademy.com/one-one-relations/
    // A one - one association is established by pairing a belongsTo and a hasOne association(though the hasOne is often omitted). Say we have two model tables, Pug and an Owner.We might associate them like so:
    Pug.belongsTo(Owner)
Owner.hasOne(Pug)

ONE - MANY: https: //sequelizedocs.fullstackacademy.com/one-many-associations/
    // A one - many association is established by pairing a belongsTo and a hasMany relation(though like hasOne, the belongsTo is sometimes omitted).Given our Pug and Owner, we might allow an owner to have multiple pugs like so:
    Pug.belongsTo(Owner)
Owner.hasMany(Pug)
    // WE CAN DO THIS INSIDE THE INSTANCE
pug.getOwner() // returns a promise for the pug's owner
pug.setOwner(owner) // updates the pug's ownerId to be the id of the passed-in owner, and returns a promise for the updated pug
owner.getPugs() // returns a promise for an array of all of the owner's pugs (that is, all pugs with ownerId equal to the owner's id)
owner.setPugs(arrayOfPugs)

MANY - MANY: CREATE A TABLE => 'friendship'
Friend.belongsToMany(Pug, { through: 'friendship' })
Pug.belongsToMany(Friend, { through: 'friendship' })
pug.getFriends() // returns a promise for the array of friends for that pug
pug.addFriend(friendI or instanceFriend) // creates a new row in the friendship table for the pug and the friend, returns a promise for the friendship (NOT the pug OR the friend - the "friendship")
pug.addFriends(friendsArray) // creates a new row in the friendship table for each friend, returns a promise for the friendship
pug.removeFriend(friend) // removes the row from the friendship table for that pug-friend, returns a promise for the number of affected rows (as if you'd want to destroy any friendships...right?)
pug.removeFriends(friendsArray) // removes the rows from the friendship table for those pug-friend pairs, returns a promise for the number affected rows

// analogous to above ^
friend.getPugs()
friend.addPug(pug)
friend.addPugs(pugsArray)
friend.setPugs(pugsArray)
friend.removePug(pug)
friend.removePugs(pugsArray)

"Eager Loading" = join two tables
// If two tables have an association, we can "include"information from the associated table like so:
const Pug = db.define('pugs', { name: Sequelize.STRING })
const Owner = db.define('owners', { name: Sequelize.STRING })
Pug.belongsTo(Owner)
const getPugs = async() => {
    const pugs = await Pug.findAll({ // we want to find all the pugs, and include their owners
        include: [{ model: Owner }]
    })
}

// if we try the other way: it will error becausethe association is not in Owner
Owner.findAll({ include: [{ model: Pug }] }) // this will error!
FORIT TO WORK WE MUST DO: Owner.hasOne(Pug)

Example with hasMany:

    const Pug = db.define('pugs', { name: Sequelize.STRING })
const Owner = db.define('owners', { name: Sequelize.STRING })

Pug.belongsTo(Owner)
Owner.hasMany(Pug) // 1-Many Relationship

const getPugs = async() => {
    const owners = await Owner.findAll({ include: [{ model: Pug }] })
    console.log(owners) // [{name: 'Tom', pugs: [{name: 'Cody', ownerId: 1}]}]
}

ASSOCIATION AS
Article.belongsTo(User, { as: 'author' })

CUSTOM GETTERS & SETTERS
MODEL_ARTICLE {
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        get() {
            const rawValue = this.getDataValue("tags");
            console.log("******", rawValue)
            return rawValue.join(", ")
        },
    }
}
// A setter is a set() function definedfor one column in the model definition.It receives the value being set:
const User = sequelize.define('user', {
    username: DataTypes.STRING,
    password: {
        type: DataTypes.STRING,
        set(value) {
            // Storing passwords in plaintext in the database is terrible.
            // Hashing the value with an appropriate cryptographic hash function is better.
            this.setDataValue('password', hash(value));
        }
    }
});
const user = User.build({ username: 'someone', password: 'NotSo§tr0ngP4$SW0RD!' });
console.log(user.password); // '7cfc84b8ea898bb72462e78b4643cfccd77e9f05678ec2ce78754147ba947acc'
console.log(user.getDataValue(password)); // '7cfc84b8ea898bb72462e78b4643cfccd77e9f05678ec2ce78754147ba947acc'




// EXPRESS ROUTES
// /wiki
router.get("/", async(req, res, next) => {
    try {
        const pages = await Page.findAll();
        res.send(main(pages));
    } catch (error) { next(error) }
});

// /wiki
router.post("/", async(req, res, next) => {
    try {
        const [user, wasCreated] = await User.findOrCreate({
            where: {
                name: req.body.name,
                email: req.body.email
            }
        });

        const page = await Page.create(req.body);

        page.setAuthor(user);

        res.redirect("/wiki/" + page.slug);
    } catch (error) { next(error) }
});

router.get("/search", async(req, res, next) => {
    try {
        const pages = await Page.findByTag(req.query.search);
        res.send(main(pages));
    } catch (error) { next(error) }
});

router.post("/:slug", async(req, res, next) => {
    try {
        const [updatedRowCount, updatedPages] = await Page.update(req.body, {
            where: {
                slug: req.params.slug
            },
            returning: true
        });

        res.redirect("/wiki/" + updatedPages[0].slug);
    } catch (error) { next(error) }
});

router.get("/:slug/delete", async(req, res, next) => {
    try {
        await Page.destroy({
            where: {
                slug: req.params.slug
            }
        });

        res.redirect("/wiki");
    } catch (error) { next(error) }
});

// /wiki/add
router.get("/add", (req, res) => {
    res.send(addPage());
});

// /wiki/(dynamic value)
router.get("/:slug", async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            },
            include: [
                { model: User, as: 'author' }
            ]
        })
        if (page === null) {
            res.sendStatus(404);
        } else {
            res.send(wikiPage(page));
        }
    } catch (error) { next(error) }
});

router.get("/:slug/edit", async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });

        if (page === null) {
            res.sendStatus(404);
        } else {
            const author = await page.getAuthor();
            res.send(editPage(page, author));
        }
    } catch (error) { next(error) }
});

// /wiki/(dynamic value)
router.get("/:slug/similar", async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });

        if (page === null) {
            res.sendStatus(404);
        } else {
            const similar = await page.findSimilar();
            res.send(main(similar));
        }
    } catch (error) { next(error) }
});
router.get("/articles", async(req, res, next) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (error) { next(error) }
});

router.get("/articles/:id", async(req, res, next) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article !== null) {
            res.json(article);
        } else {
            res.sendStatus(404);
        }

    } catch (error) { next(error) }
});

router.post("/articles", async(req, res, next) => {
    try {
        const article = await Article.create(req.body);

        if (req.body.content) {
            const obj = {
                message: 'Created successfully',
                article: article
            }
            res.json(obj)
        } else {
            res.sendStatus(500);
        }

    } catch (error) {
        next(error)
    }

});

router.put("/articles/:id", async(req, res, next) => {

    try {
        const article = await Article.findById(req.params.id);

        if (article !== null) {
            await article.update(req.body);
            const obj = {
                message: 'Updated successfully',
                article: article
            }
            res.json(obj);
        } else {
            res.sendStatus(404);
        }

    } catch (error) { next(error) }

});

router.get("/", async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(userList(users));
    } catch (error) { next(error) }
});

// /users/(dynamicvalue)

router.get("/:userId", async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId);
        const pages = await Page.findAll({
            where: {
                authorId: req.params.userId
            }
        });

        res.send(userPages(user, pages));
    } catch (error) { next(error) }
});

module.exports = router;

router.get("/", async(req, res, next) => {
    try {
        const pages = await Page.findAll();
        res.send(main(pages));
    } catch (error) { next(error) }
});

// /wiki
router.post("/", async(req, res, next) => {
    try {
        const [user, wasCreated] = await User.findOrCreate({
            where: {
                name: req.body.name,
                email: req.body.email
            }
        });

        const page = await Page.create(req.body);

        page.setAuthor(user);

        res.redirect("/wiki/" + page.slug);
    } catch (error) { next(error) }
});

router.get("/search", async(req, res, next) => {
    try {
        const pages = await Page.findByTag(req.query.search);
        res.send(main(pages));
    } catch (error) { next(error) }
});

router.post("/:slug", async(req, res, next) => {
    try {
        const [updatedRowCount, updatedPages] = await Page.update(req.body, {
            where: {
                slug: req.params.slug
            },
            returning: true
        });

        res.redirect("/wiki/" + updatedPages[0].slug);
    } catch (error) { next(error) }
});

router.get("/:slug/delete", async(req, res, next) => {
    try {
        await Page.destroy({
            where: {
                slug: req.params.slug
            }
        });

        res.redirect("/wiki");
    } catch (error) { next(error) }
});

// /wiki/add
router.get("/add", (req, res) => {
    res.send(addPage());
});

// /wiki/(dynamic value)
router.get("/:slug", async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            },
            include: [
                { model: User, as: 'author' }
            ]
        })
        if (page === null) {
            res.sendStatus(404);
        } else {
            res.send(wikiPage(page));
        }
    } catch (error) { next(error) }
});

router.get("/:slug/edit", async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });

        if (page === null) {
            res.sendStatus(404);
        } else {
            const author = await page.getAuthor();
            res.send(editPage(page, author));
        }
    } catch (error) { next(error) }
});

// /wiki/(dynamic value)
router.get("/:slug/similar", async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        if (page === null) {

            res.sendStatus(404);
        } else {
            const similar = await page.findSimilar();
            res.send(main(similar));
        }
    } catch (error) { next(error) }
});

// this will be send as the error page:https://expressjs.com/en/guide/error-handling.html
module.exports = () => layout(html ` <
        h1 > Looks like this page doesn 't exist</h1> <
    a href = "/wiki" > Back to Homepage < /a>
    `)

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    // res.status(500)
    // res.render('error', { error: err })
    res.status(500).send('500 error sad :( ')
}