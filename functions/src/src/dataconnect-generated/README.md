# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProducts*](#listproducts)
  - [*GetProductByName*](#getproductbyname)
  - [*GetAvailableProducts*](#getavailableproducts)
  - [*GetAllUsers*](#getallusers)
  - [*GetAllProducts*](#getallproducts)
  - [*GetAllVideos*](#getallvideos)
  - [*GetAllReviews*](#getallreviews)
  - [*GetUserSubscriptions*](#getusersubscriptions)
  - [*ListAvailableProducts*](#listavailableproducts)
  - [*GetMySubscription*](#getmysubscription)
  - [*GetUsers*](#getusers)
  - [*GetUserByEmail*](#getuserbyemail)
- [**Mutations**](#mutations)
  - [*CreateProduct*](#createproduct)
  - [*UpdateProduct*](#updateproduct)
  - [*DeleteProduct*](#deleteproduct)
  - [*CreateReview*](#createreview)
  - [*UpdateReview*](#updatereview)
  - [*CreateVideo*](#createvideo)
  - [*UpdateVideo*](#updatevideo)
  - [*CreateNewUser*](#createnewuser)
  - [*AddNewReview*](#addnewreview)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProducts
You can execute the `ListProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProducts(vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;

interface ListProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
}
export const listProductsRef: ListProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProducts(dc: DataConnect, vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;

interface ListProductsRef {
  ...
  (dc: DataConnect, vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
}
export const listProductsRef: ListProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsRef:
```typescript
const name = listProductsRef.operationName;
console.log(name);
```

### Variables
The `ListProducts` query has an optional argument of type `ListProductsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListProductsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductsData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}
```
### Using `ListProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProducts, ListProductsVariables } from '@dataconnect/generated';

// The `ListProducts` query has an optional argument of type `ListProductsVariables`:
const listProductsVars: ListProductsVariables = {
  limit: ..., // optional
};

// Call the `listProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProducts(listProductsVars);
// Variables can be defined inline as well.
const { data } = await listProducts({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListProductsVariables` argument.
const { data } = await listProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProducts(dataConnect, listProductsVars);

console.log(data.products);

// Or, you can use the `Promise` API.
listProducts(listProductsVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsRef, ListProductsVariables } from '@dataconnect/generated';

// The `ListProducts` query has an optional argument of type `ListProductsVariables`:
const listProductsVars: ListProductsVariables = {
  limit: ..., // optional
};

// Call the `listProductsRef()` function to get a reference to the query.
const ref = listProductsRef(listProductsVars);
// Variables can be defined inline as well.
const ref = listProductsRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListProductsVariables` argument.
const ref = listProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsRef(dataConnect, listProductsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetProductByName
You can execute the `GetProductByName` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProductByName(vars: GetProductByNameVariables): QueryPromise<GetProductByNameData, GetProductByNameVariables>;

interface GetProductByNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductByNameVariables): QueryRef<GetProductByNameData, GetProductByNameVariables>;
}
export const getProductByNameRef: GetProductByNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProductByName(dc: DataConnect, vars: GetProductByNameVariables): QueryPromise<GetProductByNameData, GetProductByNameVariables>;

interface GetProductByNameRef {
  ...
  (dc: DataConnect, vars: GetProductByNameVariables): QueryRef<GetProductByNameData, GetProductByNameVariables>;
}
export const getProductByNameRef: GetProductByNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProductByNameRef:
```typescript
const name = getProductByNameRef.operationName;
console.log(name);
```

### Variables
The `GetProductByName` query requires an argument of type `GetProductByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProductByNameVariables {
  name: string;
}
```
### Return Type
Recall that executing the `GetProductByName` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProductByNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProductByNameData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    storagePath?: string | null;
    isAvailable?: boolean | null;
  })[];
}
```
### Using `GetProductByName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProductByName, GetProductByNameVariables } from '@dataconnect/generated';

// The `GetProductByName` query requires an argument of type `GetProductByNameVariables`:
const getProductByNameVars: GetProductByNameVariables = {
  name: ..., 
};

// Call the `getProductByName()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProductByName(getProductByNameVars);
// Variables can be defined inline as well.
const { data } = await getProductByName({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProductByName(dataConnect, getProductByNameVars);

console.log(data.products);

// Or, you can use the `Promise` API.
getProductByName(getProductByNameVars).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetProductByName`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProductByNameRef, GetProductByNameVariables } from '@dataconnect/generated';

// The `GetProductByName` query requires an argument of type `GetProductByNameVariables`:
const getProductByNameVars: GetProductByNameVariables = {
  name: ..., 
};

// Call the `getProductByNameRef()` function to get a reference to the query.
const ref = getProductByNameRef(getProductByNameVars);
// Variables can be defined inline as well.
const ref = getProductByNameRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProductByNameRef(dataConnect, getProductByNameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetAvailableProducts
You can execute the `GetAvailableProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAvailableProducts(): QueryPromise<GetAvailableProductsData, undefined>;

interface GetAvailableProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAvailableProductsData, undefined>;
}
export const getAvailableProductsRef: GetAvailableProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAvailableProducts(dc: DataConnect): QueryPromise<GetAvailableProductsData, undefined>;

interface GetAvailableProductsRef {
  ...
  (dc: DataConnect): QueryRef<GetAvailableProductsData, undefined>;
}
export const getAvailableProductsRef: GetAvailableProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAvailableProductsRef:
```typescript
const name = getAvailableProductsRef.operationName;
console.log(name);
```

### Variables
The `GetAvailableProducts` query has no variables.
### Return Type
Recall that executing the `GetAvailableProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAvailableProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAvailableProductsData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}
```
### Using `GetAvailableProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAvailableProducts } from '@dataconnect/generated';


// Call the `getAvailableProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAvailableProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAvailableProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
getAvailableProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetAvailableProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAvailableProductsRef } from '@dataconnect/generated';


// Call the `getAvailableProductsRef()` function to get a reference to the query.
const ref = getAvailableProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAvailableProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetAllUsers
You can execute the `GetAllUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllUsers(): QueryPromise<GetAllUsersData, undefined>;

interface GetAllUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllUsersData, undefined>;
}
export const getAllUsersRef: GetAllUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllUsers(dc: DataConnect): QueryPromise<GetAllUsersData, undefined>;

interface GetAllUsersRef {
  ...
  (dc: DataConnect): QueryRef<GetAllUsersData, undefined>;
}
export const getAllUsersRef: GetAllUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllUsersRef:
```typescript
const name = getAllUsersRef.operationName;
console.log(name);
```

### Variables
The `GetAllUsers` query has no variables.
### Return Type
Recall that executing the `GetAllUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllUsersData {
  users: ({
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    imageUrl?: string | null;
    createdAt: TimestampString;
  })[];
}
```
### Using `GetAllUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllUsers } from '@dataconnect/generated';


// Call the `getAllUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
getAllUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetAllUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllUsersRef } from '@dataconnect/generated';


// Call the `getAllUsersRef()` function to get a reference to the query.
const ref = getAllUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetAllProducts
You can execute the `GetAllProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllProducts(): QueryPromise<GetAllProductsData, undefined>;

interface GetAllProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllProductsData, undefined>;
}
export const getAllProductsRef: GetAllProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllProducts(dc: DataConnect): QueryPromise<GetAllProductsData, undefined>;

interface GetAllProductsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllProductsData, undefined>;
}
export const getAllProductsRef: GetAllProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllProductsRef:
```typescript
const name = getAllProductsRef.operationName;
console.log(name);
```

### Variables
The `GetAllProducts` query has no variables.
### Return Type
Recall that executing the `GetAllProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllProductsData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}
```
### Using `GetAllProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllProducts } from '@dataconnect/generated';


// Call the `getAllProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
getAllProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetAllProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllProductsRef } from '@dataconnect/generated';


// Call the `getAllProductsRef()` function to get a reference to the query.
const ref = getAllProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetAllVideos
You can execute the `GetAllVideos` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllVideos(): QueryPromise<GetAllVideosData, undefined>;

interface GetAllVideosRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllVideosData, undefined>;
}
export const getAllVideosRef: GetAllVideosRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllVideos(dc: DataConnect): QueryPromise<GetAllVideosData, undefined>;

interface GetAllVideosRef {
  ...
  (dc: DataConnect): QueryRef<GetAllVideosData, undefined>;
}
export const getAllVideosRef: GetAllVideosRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllVideosRef:
```typescript
const name = getAllVideosRef.operationName;
console.log(name);
```

### Variables
The `GetAllVideos` query has no variables.
### Return Type
Recall that executing the `GetAllVideos` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllVideosData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllVideosData {
  videos: ({
    name: string;
    price: number;
    videoUrl: string;
    description?: string | null;
    thumbnailUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}
```
### Using `GetAllVideos`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllVideos } from '@dataconnect/generated';


// Call the `getAllVideos()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllVideos();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllVideos(dataConnect);

console.log(data.videos);

// Or, you can use the `Promise` API.
getAllVideos().then((response) => {
  const data = response.data;
  console.log(data.videos);
});
```

### Using `GetAllVideos`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllVideosRef } from '@dataconnect/generated';


// Call the `getAllVideosRef()` function to get a reference to the query.
const ref = getAllVideosRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllVideosRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.videos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.videos);
});
```

## GetAllReviews
You can execute the `GetAllReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllReviews(): QueryPromise<GetAllReviewsData, undefined>;

interface GetAllReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllReviewsData, undefined>;
}
export const getAllReviewsRef: GetAllReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllReviews(dc: DataConnect): QueryPromise<GetAllReviewsData, undefined>;

interface GetAllReviewsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllReviewsData, undefined>;
}
export const getAllReviewsRef: GetAllReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllReviewsRef:
```typescript
const name = getAllReviewsRef.operationName;
console.log(name);
```

### Variables
The `GetAllReviews` query has no variables.
### Return Type
Recall that executing the `GetAllReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllReviewsData {
  reviews: ({
    user: {
      name?: string | null;
      email?: string | null;
    };
      content: string;
      status: string;
      rating?: number | null;
      createdAt: TimestampString;
  })[];
}
```
### Using `GetAllReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllReviews } from '@dataconnect/generated';


// Call the `getAllReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllReviews();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllReviews(dataConnect);

console.log(data.reviews);

// Or, you can use the `Promise` API.
getAllReviews().then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `GetAllReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllReviewsRef } from '@dataconnect/generated';


// Call the `getAllReviewsRef()` function to get a reference to the query.
const ref = getAllReviewsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllReviewsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

## GetUserSubscriptions
You can execute the `GetUserSubscriptions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserSubscriptions(): QueryPromise<GetUserSubscriptionsData, undefined>;

interface GetUserSubscriptionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserSubscriptionsData, undefined>;
}
export const getUserSubscriptionsRef: GetUserSubscriptionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserSubscriptions(dc: DataConnect): QueryPromise<GetUserSubscriptionsData, undefined>;

interface GetUserSubscriptionsRef {
  ...
  (dc: DataConnect): QueryRef<GetUserSubscriptionsData, undefined>;
}
export const getUserSubscriptionsRef: GetUserSubscriptionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserSubscriptionsRef:
```typescript
const name = getUserSubscriptionsRef.operationName;
console.log(name);
```

### Variables
The `GetUserSubscriptions` query has no variables.
### Return Type
Recall that executing the `GetUserSubscriptions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserSubscriptionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserSubscriptionsData {
  subscriptionTypes: ({
    user: {
      name?: string | null;
      email?: string | null;
    };
      status: string;
      plan?: string | null;
      startDate?: TimestampString | null;
      endDate?: TimestampString | null;
      paymentMethod?: string | null;
  })[];
}
```
### Using `GetUserSubscriptions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserSubscriptions } from '@dataconnect/generated';


// Call the `getUserSubscriptions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserSubscriptions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserSubscriptions(dataConnect);

console.log(data.subscriptionTypes);

// Or, you can use the `Promise` API.
getUserSubscriptions().then((response) => {
  const data = response.data;
  console.log(data.subscriptionTypes);
});
```

### Using `GetUserSubscriptions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserSubscriptionsRef } from '@dataconnect/generated';


// Call the `getUserSubscriptionsRef()` function to get a reference to the query.
const ref = getUserSubscriptionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserSubscriptionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.subscriptionTypes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.subscriptionTypes);
});
```

## ListAvailableProducts
You can execute the `ListAvailableProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAvailableProducts(): QueryPromise<ListAvailableProductsData, undefined>;

interface ListAvailableProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAvailableProductsData, undefined>;
}
export const listAvailableProductsRef: ListAvailableProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAvailableProducts(dc: DataConnect): QueryPromise<ListAvailableProductsData, undefined>;

interface ListAvailableProductsRef {
  ...
  (dc: DataConnect): QueryRef<ListAvailableProductsData, undefined>;
}
export const listAvailableProductsRef: ListAvailableProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAvailableProductsRef:
```typescript
const name = listAvailableProductsRef.operationName;
console.log(name);
```

### Variables
The `ListAvailableProducts` query has no variables.
### Return Type
Recall that executing the `ListAvailableProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAvailableProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAvailableProductsData {
  products: ({
    id: UUIDString;
    name: string;
    price: number;
    imageUrl?: string | null;
  } & Product_Key)[];
}
```
### Using `ListAvailableProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAvailableProducts } from '@dataconnect/generated';


// Call the `listAvailableProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAvailableProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAvailableProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
listAvailableProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListAvailableProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAvailableProductsRef } from '@dataconnect/generated';


// Call the `listAvailableProductsRef()` function to get a reference to the query.
const ref = listAvailableProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAvailableProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetMySubscription
You can execute the `GetMySubscription` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMySubscription(): QueryPromise<GetMySubscriptionData, undefined>;

interface GetMySubscriptionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySubscriptionData, undefined>;
}
export const getMySubscriptionRef: GetMySubscriptionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMySubscription(dc: DataConnect): QueryPromise<GetMySubscriptionData, undefined>;

interface GetMySubscriptionRef {
  ...
  (dc: DataConnect): QueryRef<GetMySubscriptionData, undefined>;
}
export const getMySubscriptionRef: GetMySubscriptionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMySubscriptionRef:
```typescript
const name = getMySubscriptionRef.operationName;
console.log(name);
```

### Variables
The `GetMySubscription` query has no variables.
### Return Type
Recall that executing the `GetMySubscription` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMySubscriptionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMySubscriptionData {
  subscriptionTypes: ({
    id: UUIDString;
    plan?: string | null;
    startDate?: TimestampString | null;
    endDate?: TimestampString | null;
    status: string;
  } & SubscriptionType_Key)[];
}
```
### Using `GetMySubscription`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMySubscription } from '@dataconnect/generated';


// Call the `getMySubscription()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMySubscription();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMySubscription(dataConnect);

console.log(data.subscriptionTypes);

// Or, you can use the `Promise` API.
getMySubscription().then((response) => {
  const data = response.data;
  console.log(data.subscriptionTypes);
});
```

### Using `GetMySubscription`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMySubscriptionRef } from '@dataconnect/generated';


// Call the `getMySubscriptionRef()` function to get a reference to the query.
const ref = getMySubscriptionRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMySubscriptionRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.subscriptionTypes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.subscriptionTypes);
});
```

## GetUsers
You can execute the `GetUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUsers(vars?: GetUsersVariables): QueryPromise<GetUsersData, GetUsersVariables>;

interface GetUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetUsersVariables): QueryRef<GetUsersData, GetUsersVariables>;
}
export const getUsersRef: GetUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUsers(dc: DataConnect, vars?: GetUsersVariables): QueryPromise<GetUsersData, GetUsersVariables>;

interface GetUsersRef {
  ...
  (dc: DataConnect, vars?: GetUsersVariables): QueryRef<GetUsersData, GetUsersVariables>;
}
export const getUsersRef: GetUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUsersRef:
```typescript
const name = getUsersRef.operationName;
console.log(name);
```

### Variables
The `GetUsers` query has an optional argument of type `GetUsersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUsersVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `GetUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUsersData {
  users: ({
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    imageUrl?: string | null;
    createdAt: TimestampString;
  })[];
}
```
### Using `GetUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUsers, GetUsersVariables } from '@dataconnect/generated';

// The `GetUsers` query has an optional argument of type `GetUsersVariables`:
const getUsersVars: GetUsersVariables = {
  limit: ..., // optional
};

// Call the `getUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUsers(getUsersVars);
// Variables can be defined inline as well.
const { data } = await getUsers({ limit: ..., });
// Since all variables are optional for this query, you can omit the `GetUsersVariables` argument.
const { data } = await getUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUsers(dataConnect, getUsersVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getUsers(getUsersVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUsersRef, GetUsersVariables } from '@dataconnect/generated';

// The `GetUsers` query has an optional argument of type `GetUsersVariables`:
const getUsersVars: GetUsersVariables = {
  limit: ..., // optional
};

// Call the `getUsersRef()` function to get a reference to the query.
const ref = getUsersRef(getUsersVars);
// Variables can be defined inline as well.
const ref = getUsersRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `GetUsersVariables` argument.
const ref = getUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUsersRef(dataConnect, getUsersVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetUserByEmail
You can execute the `GetUserByEmail` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface GetUserByEmailRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
}
export const getUserByEmailRef: GetUserByEmailRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface GetUserByEmailRef {
  ...
  (dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
}
export const getUserByEmailRef: GetUserByEmailRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserByEmailRef:
```typescript
const name = getUserByEmailRef.operationName;
console.log(name);
```

### Variables
The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserByEmailVariables {
  email: string;
}
```
### Return Type
Recall that executing the `GetUserByEmail` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserByEmailData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserByEmailData {
  users: ({
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    imageUrl?: string | null;
    storagePath?: string | null;
    createdAt: TimestampString;
  })[];
}
```
### Using `GetUserByEmail`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserByEmail, GetUserByEmailVariables } from '@dataconnect/generated';

// The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`:
const getUserByEmailVars: GetUserByEmailVariables = {
  email: ..., 
};

// Call the `getUserByEmail()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserByEmail(getUserByEmailVars);
// Variables can be defined inline as well.
const { data } = await getUserByEmail({ email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserByEmail(dataConnect, getUserByEmailVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getUserByEmail(getUserByEmailVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUserByEmail`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByEmailRef, GetUserByEmailVariables } from '@dataconnect/generated';

// The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`:
const getUserByEmailVars: GetUserByEmailVariables = {
  email: ..., 
};

// Call the `getUserByEmailRef()` function to get a reference to the query.
const ref = getUserByEmailRef(getUserByEmailVars);
// Variables can be defined inline as well.
const ref = getUserByEmailRef({ email: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserByEmailRef(dataConnect, getUserByEmailVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateProduct
You can execute the `CreateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProductRef:
```typescript
const name = createProductRef.operationName;
console.log(name);
```

### Variables
The `CreateProduct` mutation requires an argument of type `CreateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProductVariables {
  name: string;
  price: number;
  description?: string | null;
  imageUrl?: string | null;
  storagePath?: string | null;
  isAvailable?: boolean | null;
}
```
### Return Type
Recall that executing the `CreateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProductData {
  product_insert: Product_Key;
}
```
### Using `CreateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProduct, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  price: ..., 
  description: ..., // optional
  imageUrl: ..., // optional
  storagePath: ..., // optional
  isAvailable: ..., // optional
};

// Call the `createProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProduct(createProductVars);
// Variables can be defined inline as well.
const { data } = await createProduct({ name: ..., price: ..., description: ..., imageUrl: ..., storagePath: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProduct(dataConnect, createProductVars);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
createProduct(createProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

### Using `CreateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProductRef, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  price: ..., 
  description: ..., // optional
  imageUrl: ..., // optional
  storagePath: ..., // optional
  isAvailable: ..., // optional
};

// Call the `createProductRef()` function to get a reference to the mutation.
const ref = createProductRef(createProductVars);
// Variables can be defined inline as well.
const ref = createProductRef({ name: ..., price: ..., description: ..., imageUrl: ..., storagePath: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProductRef(dataConnect, createProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

## UpdateProduct
You can execute the `UpdateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProduct(vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface UpdateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
}
export const updateProductRef: UpdateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProduct(dc: DataConnect, vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface UpdateProductRef {
  ...
  (dc: DataConnect, vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
}
export const updateProductRef: UpdateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProductRef:
```typescript
const name = updateProductRef.operationName;
console.log(name);
```

### Variables
The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProductVariables {
  key: Product_Key;
  name?: string | null;
  price?: number | null;
  description?: string | null;
  imageUrl?: string | null;
  isAvailable?: boolean | null;
}
```
### Return Type
Recall that executing the `UpdateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProductData {
  product_update?: Product_Key | null;
}
```
### Using `UpdateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProduct, UpdateProductVariables } from '@dataconnect/generated';

// The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`:
const updateProductVars: UpdateProductVariables = {
  key: ..., 
  name: ..., // optional
  price: ..., // optional
  description: ..., // optional
  imageUrl: ..., // optional
  isAvailable: ..., // optional
};

// Call the `updateProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProduct(updateProductVars);
// Variables can be defined inline as well.
const { data } = await updateProduct({ key: ..., name: ..., price: ..., description: ..., imageUrl: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProduct(dataConnect, updateProductVars);

console.log(data.product_update);

// Or, you can use the `Promise` API.
updateProduct(updateProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

### Using `UpdateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProductRef, UpdateProductVariables } from '@dataconnect/generated';

// The `UpdateProduct` mutation requires an argument of type `UpdateProductVariables`:
const updateProductVars: UpdateProductVariables = {
  key: ..., 
  name: ..., // optional
  price: ..., // optional
  description: ..., // optional
  imageUrl: ..., // optional
  isAvailable: ..., // optional
};

// Call the `updateProductRef()` function to get a reference to the mutation.
const ref = updateProductRef(updateProductVars);
// Variables can be defined inline as well.
const ref = updateProductRef({ key: ..., name: ..., price: ..., description: ..., imageUrl: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProductRef(dataConnect, updateProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

## DeleteProduct
You can execute the `DeleteProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteProduct(vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface DeleteProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
}
export const deleteProductRef: DeleteProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteProduct(dc: DataConnect, vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface DeleteProductRef {
  ...
  (dc: DataConnect, vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
}
export const deleteProductRef: DeleteProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteProductRef:
```typescript
const name = deleteProductRef.operationName;
console.log(name);
```

### Variables
The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteProductVariables {
  key: Product_Key;
}
```
### Return Type
Recall that executing the `DeleteProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteProductData {
  product_delete?: Product_Key | null;
}
```
### Using `DeleteProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteProduct, DeleteProductVariables } from '@dataconnect/generated';

// The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`:
const deleteProductVars: DeleteProductVariables = {
  key: ..., 
};

// Call the `deleteProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteProduct(deleteProductVars);
// Variables can be defined inline as well.
const { data } = await deleteProduct({ key: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteProduct(dataConnect, deleteProductVars);

console.log(data.product_delete);

// Or, you can use the `Promise` API.
deleteProduct(deleteProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_delete);
});
```

### Using `DeleteProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteProductRef, DeleteProductVariables } from '@dataconnect/generated';

// The `DeleteProduct` mutation requires an argument of type `DeleteProductVariables`:
const deleteProductVars: DeleteProductVariables = {
  key: ..., 
};

// Call the `deleteProductRef()` function to get a reference to the mutation.
const ref = deleteProductRef(deleteProductVars);
// Variables can be defined inline as well.
const ref = deleteProductRef({ key: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteProductRef(dataConnect, deleteProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_delete);
});
```

## CreateReview
You can execute the `CreateReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createReviewRef:
```typescript
const name = createReviewRef.operationName;
console.log(name);
```

### Variables
The `CreateReview` mutation requires an argument of type `CreateReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateReviewVariables {
  user: User_Key;
  content: string;
  status: string;
  rating?: number | null;
}
```
### Return Type
Recall that executing the `CreateReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateReviewData {
  review_insert: Review_Key;
}
```
### Using `CreateReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createReview, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  user: ..., 
  content: ..., 
  status: ..., 
  rating: ..., // optional
};

// Call the `createReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createReview(createReviewVars);
// Variables can be defined inline as well.
const { data } = await createReview({ user: ..., content: ..., status: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createReview(dataConnect, createReviewVars);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
createReview(createReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `CreateReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createReviewRef, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  user: ..., 
  content: ..., 
  status: ..., 
  rating: ..., // optional
};

// Call the `createReviewRef()` function to get a reference to the mutation.
const ref = createReviewRef(createReviewVars);
// Variables can be defined inline as well.
const ref = createReviewRef({ user: ..., content: ..., status: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createReviewRef(dataConnect, createReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

## UpdateReview
You can execute the `UpdateReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateReview(vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface UpdateReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
}
export const updateReviewRef: UpdateReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateReview(dc: DataConnect, vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface UpdateReviewRef {
  ...
  (dc: DataConnect, vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
}
export const updateReviewRef: UpdateReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateReviewRef:
```typescript
const name = updateReviewRef.operationName;
console.log(name);
```

### Variables
The `UpdateReview` mutation requires an argument of type `UpdateReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateReviewVariables {
  key: Review_Key;
  content?: string | null;
  status?: string | null;
  rating?: number | null;
}
```
### Return Type
Recall that executing the `UpdateReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateReviewData {
  review_update?: Review_Key | null;
}
```
### Using `UpdateReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateReview, UpdateReviewVariables } from '@dataconnect/generated';

// The `UpdateReview` mutation requires an argument of type `UpdateReviewVariables`:
const updateReviewVars: UpdateReviewVariables = {
  key: ..., 
  content: ..., // optional
  status: ..., // optional
  rating: ..., // optional
};

// Call the `updateReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateReview(updateReviewVars);
// Variables can be defined inline as well.
const { data } = await updateReview({ key: ..., content: ..., status: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateReview(dataConnect, updateReviewVars);

console.log(data.review_update);

// Or, you can use the `Promise` API.
updateReview(updateReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_update);
});
```

### Using `UpdateReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateReviewRef, UpdateReviewVariables } from '@dataconnect/generated';

// The `UpdateReview` mutation requires an argument of type `UpdateReviewVariables`:
const updateReviewVars: UpdateReviewVariables = {
  key: ..., 
  content: ..., // optional
  status: ..., // optional
  rating: ..., // optional
};

// Call the `updateReviewRef()` function to get a reference to the mutation.
const ref = updateReviewRef(updateReviewVars);
// Variables can be defined inline as well.
const ref = updateReviewRef({ key: ..., content: ..., status: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateReviewRef(dataConnect, updateReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_update);
});
```

## CreateVideo
You can execute the `CreateVideo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createVideo(vars: CreateVideoVariables): MutationPromise<CreateVideoData, CreateVideoVariables>;

interface CreateVideoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateVideoVariables): MutationRef<CreateVideoData, CreateVideoVariables>;
}
export const createVideoRef: CreateVideoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createVideo(dc: DataConnect, vars: CreateVideoVariables): MutationPromise<CreateVideoData, CreateVideoVariables>;

interface CreateVideoRef {
  ...
  (dc: DataConnect, vars: CreateVideoVariables): MutationRef<CreateVideoData, CreateVideoVariables>;
}
export const createVideoRef: CreateVideoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createVideoRef:
```typescript
const name = createVideoRef.operationName;
console.log(name);
```

### Variables
The `CreateVideo` mutation requires an argument of type `CreateVideoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateVideoVariables {
  name: string;
  price: number;
  videoUrl: string;
  storagePath: string;
  description?: string | null;
  thumbnailUrl?: string | null;
  isAvailable?: boolean | null;
}
```
### Return Type
Recall that executing the `CreateVideo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateVideoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateVideoData {
  video_insert: Video_Key;
}
```
### Using `CreateVideo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createVideo, CreateVideoVariables } from '@dataconnect/generated';

// The `CreateVideo` mutation requires an argument of type `CreateVideoVariables`:
const createVideoVars: CreateVideoVariables = {
  name: ..., 
  price: ..., 
  videoUrl: ..., 
  storagePath: ..., 
  description: ..., // optional
  thumbnailUrl: ..., // optional
  isAvailable: ..., // optional
};

// Call the `createVideo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createVideo(createVideoVars);
// Variables can be defined inline as well.
const { data } = await createVideo({ name: ..., price: ..., videoUrl: ..., storagePath: ..., description: ..., thumbnailUrl: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createVideo(dataConnect, createVideoVars);

console.log(data.video_insert);

// Or, you can use the `Promise` API.
createVideo(createVideoVars).then((response) => {
  const data = response.data;
  console.log(data.video_insert);
});
```

### Using `CreateVideo`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createVideoRef, CreateVideoVariables } from '@dataconnect/generated';

// The `CreateVideo` mutation requires an argument of type `CreateVideoVariables`:
const createVideoVars: CreateVideoVariables = {
  name: ..., 
  price: ..., 
  videoUrl: ..., 
  storagePath: ..., 
  description: ..., // optional
  thumbnailUrl: ..., // optional
  isAvailable: ..., // optional
};

// Call the `createVideoRef()` function to get a reference to the mutation.
const ref = createVideoRef(createVideoVars);
// Variables can be defined inline as well.
const ref = createVideoRef({ name: ..., price: ..., videoUrl: ..., storagePath: ..., description: ..., thumbnailUrl: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createVideoRef(dataConnect, createVideoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.video_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.video_insert);
});
```

## UpdateVideo
You can execute the `UpdateVideo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateVideo(vars: UpdateVideoVariables): MutationPromise<UpdateVideoData, UpdateVideoVariables>;

interface UpdateVideoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateVideoVariables): MutationRef<UpdateVideoData, UpdateVideoVariables>;
}
export const updateVideoRef: UpdateVideoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateVideo(dc: DataConnect, vars: UpdateVideoVariables): MutationPromise<UpdateVideoData, UpdateVideoVariables>;

interface UpdateVideoRef {
  ...
  (dc: DataConnect, vars: UpdateVideoVariables): MutationRef<UpdateVideoData, UpdateVideoVariables>;
}
export const updateVideoRef: UpdateVideoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateVideoRef:
```typescript
const name = updateVideoRef.operationName;
console.log(name);
```

### Variables
The `UpdateVideo` mutation requires an argument of type `UpdateVideoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateVideoVariables {
  key: Video_Key;
  name?: string | null;
  price?: number | null;
  description?: string | null;
  thumbnailUrl?: string | null;
  isAvailable?: boolean | null;
}
```
### Return Type
Recall that executing the `UpdateVideo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateVideoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateVideoData {
  video_update?: Video_Key | null;
}
```
### Using `UpdateVideo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateVideo, UpdateVideoVariables } from '@dataconnect/generated';

// The `UpdateVideo` mutation requires an argument of type `UpdateVideoVariables`:
const updateVideoVars: UpdateVideoVariables = {
  key: ..., 
  name: ..., // optional
  price: ..., // optional
  description: ..., // optional
  thumbnailUrl: ..., // optional
  isAvailable: ..., // optional
};

// Call the `updateVideo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateVideo(updateVideoVars);
// Variables can be defined inline as well.
const { data } = await updateVideo({ key: ..., name: ..., price: ..., description: ..., thumbnailUrl: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateVideo(dataConnect, updateVideoVars);

console.log(data.video_update);

// Or, you can use the `Promise` API.
updateVideo(updateVideoVars).then((response) => {
  const data = response.data;
  console.log(data.video_update);
});
```

### Using `UpdateVideo`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateVideoRef, UpdateVideoVariables } from '@dataconnect/generated';

// The `UpdateVideo` mutation requires an argument of type `UpdateVideoVariables`:
const updateVideoVars: UpdateVideoVariables = {
  key: ..., 
  name: ..., // optional
  price: ..., // optional
  description: ..., // optional
  thumbnailUrl: ..., // optional
  isAvailable: ..., // optional
};

// Call the `updateVideoRef()` function to get a reference to the mutation.
const ref = updateVideoRef(updateVideoVars);
// Variables can be defined inline as well.
const ref = updateVideoRef({ key: ..., name: ..., price: ..., description: ..., thumbnailUrl: ..., isAvailable: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateVideoRef(dataConnect, updateVideoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.video_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.video_update);
});
```

## CreateNewUser
You can execute the `CreateNewUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewUser(): MutationPromise<CreateNewUserData, undefined>;

interface CreateNewUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNewUserData, undefined>;
}
export const createNewUserRef: CreateNewUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewUser(dc: DataConnect): MutationPromise<CreateNewUserData, undefined>;

interface CreateNewUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateNewUserData, undefined>;
}
export const createNewUserRef: CreateNewUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewUserRef:
```typescript
const name = createNewUserRef.operationName;
console.log(name);
```

### Variables
The `CreateNewUser` mutation has no variables.
### Return Type
Recall that executing the `CreateNewUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewUserData {
  user_insert: User_Key;
}
```
### Using `CreateNewUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewUser } from '@dataconnect/generated';


// Call the `createNewUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createNewUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateNewUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewUserRef } from '@dataconnect/generated';


// Call the `createNewUserRef()` function to get a reference to the mutation.
const ref = createNewUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## AddNewReview
You can execute the `AddNewReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewReview(): MutationPromise<AddNewReviewData, undefined>;

interface AddNewReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddNewReviewData, undefined>;
}
export const addNewReviewRef: AddNewReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewReview(dc: DataConnect): MutationPromise<AddNewReviewData, undefined>;

interface AddNewReviewRef {
  ...
  (dc: DataConnect): MutationRef<AddNewReviewData, undefined>;
}
export const addNewReviewRef: AddNewReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewReviewRef:
```typescript
const name = addNewReviewRef.operationName;
console.log(name);
```

### Variables
The `AddNewReview` mutation has no variables.
### Return Type
Recall that executing the `AddNewReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewReviewData {
  review_insert: Review_Key;
}
```
### Using `AddNewReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewReview } from '@dataconnect/generated';


// Call the `addNewReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewReview();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewReview(dataConnect);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
addNewReview().then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `AddNewReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewReviewRef } from '@dataconnect/generated';


// Call the `addNewReviewRef()` function to get a reference to the mutation.
const ref = addNewReviewRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewReviewRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has an optional argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  imageUrl?: string | null;
  storagePath?: string | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation has an optional argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  name: ..., // optional
  email: ..., // optional
  phone: ..., // optional
  imageUrl: ..., // optional
  storagePath: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ name: ..., email: ..., phone: ..., imageUrl: ..., storagePath: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateUserVariables` argument.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation has an optional argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  name: ..., // optional
  email: ..., // optional
  phone: ..., // optional
  imageUrl: ..., // optional
  storagePath: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ name: ..., email: ..., phone: ..., imageUrl: ..., storagePath: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateUserVariables` argument.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  key: User_Key;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  imageUrl?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  key: ..., 
  name: ..., // optional
  email: ..., // optional
  phone: ..., // optional
  imageUrl: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ key: ..., name: ..., email: ..., phone: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  key: ..., 
  name: ..., // optional
  email: ..., // optional
  phone: ..., // optional
  imageUrl: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ key: ..., name: ..., email: ..., phone: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

