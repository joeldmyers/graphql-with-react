# graphql-with-react

Following along with FEM client-side GraphQL with React. 

Idea is to have the data on the server modeled after props for front-end, have props and server data be the exact same shape. Eliminate need for transformations. This was where it started. 

It's evolved since then. It's its own language / process to build schema for anything. 

## GraphQL Definition
GraphQL is a spec that describes a declarative query language that your clients can use to ask an API for the exact data they want. This is achieved by creating a strongly typed Schema for your API, ultimate flexibility in how your API can resolve data, and client queries validated against your Schema.

## GraphQL playground

Example: https://rickandmortyapi.com/graphql

Example query: 

```
{
  characters {
    results {
      name
    }
  }
}
```

This is an implementation on top of GraphiQL.

With most servers, this should show up by default with a get request to the server. (No more Swagger :))

## Operation Names

You can name operations for your client-side Queries and Mutations, just like naming functions instead of keeping them anonymous. This helps with caching and indexing. 

Ex of operation name syntax: 

```
query AllCharacter {
  characters {
    results {
      name
      id
    }
  }
}

```

Usually PascalCase. Name must be unique, otherwise there will be conflicts.

### Arguments for Query Operations with Operation Names

```

query AllCharacter($page: Int) {
  characters(page: $page) {
    results {
      name
      id
    }
  }
}
```

Arguments must start with a dollar sign.

Then you can type query variables in GraphQL playground at the bottom:

```
{ "page": 1 }
```

## Aliasing

You can alias properties that you're getting back, to avoid naming collisions, for ex.

```

query AllCharacter($page: Int) {
  characters(page: $page) {
    results {
      fullName: name
      id
    }
  }
}
```

So put whatever you want it to be called to the left. It will return 

```
{
  "data": {
    "characters": {
      "results": [
        {
          "fullName": "Rick Sanchez",
          "id": "1"
        }, ... 
      ]
    }
  }
}
```

