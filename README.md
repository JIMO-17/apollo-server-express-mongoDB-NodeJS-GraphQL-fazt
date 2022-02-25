# apollo-server-express-mongoDB-NodeJS-GraphQL-fazt

## Desploy: 

https://grapql-node-fazt-api-exercise.herokuapp.com

https://grapql-node-fazt-api-exercise.herokuapp.com/graphql

## Sample .env
```
PORT=3000
MONGODB_URI=URL connection MongoDB Atlas
```

## Sample Studio Apollo GrapQL

### Querys
```graphql
query {
  getAllTasks {
    id
    title
    description
  }
}

query{
  getTaskById(id: "6218fba5ba90060ae0725ca6") {
    title
    description
    id
  }
}
```

### Mutations
```graphql
mutation{
  createTask(
    task: {
      title: "my new task input"
      description: "my descirption"
    }
  ) {
    id
    title
    description
  }
}

mutation{
  deleteTask(id: "6218fbc2ba90060ae0725ca9")
}

mutation{
  updateTask(
    id: "6218fba5ba90060ae0725ca6"
    task: {
      title: "hello world update",
      description: "this is update"
    }
  ){
    id
    title
    description
  }
}
```

## Run In Local
```npm
npm run dev
```

```
localhost:3000
localhost:3000/graphql
```

## Request

```curl
curl --request POST \
  --header 'content-type: application/json' \
  --url 'https://grapql-node-fazt-api-exercise.herokuapp.com/graphql' \
  --data '{"query":"query { __typename }"}'
```
