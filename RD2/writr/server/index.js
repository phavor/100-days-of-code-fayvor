require('./src/config/config')
const { MONGODB_URI: URI, PORT } = process.env
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./src/types");
const resolvers = require("./src/resolvers");
const dataSources = require('./src/datasources')

const { getUser } = require('./src/utils/auth')

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("App connected to DB..."))
  .catch(err => {
    console.error(`Error: ${err}`)
    process.exit(1)
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || ''

    const AuthUser = await getUser(token)

    return { AuthUser }
  },
  dataSources: () => (
    dataSources
  )
});

server.listen(PORT).then(({ url }) => console.log(`Server is running at ${url}`));
