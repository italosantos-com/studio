# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { listProducts, getProductByName, getAvailableProducts, createProduct, updateProduct, deleteProduct, getAllUsers, getAllProducts, getAllVideos, getAllReviews } from '@dataconnect/generated';


// Operation ListProducts:  For variables, look at type ListProductsVars in ../index.d.ts
const { data } = await ListProducts(dataConnect, listProductsVars);

// Operation GetProductByName:  For variables, look at type GetProductByNameVars in ../index.d.ts
const { data } = await GetProductByName(dataConnect, getProductByNameVars);

// Operation GetAvailableProducts: 
const { data } = await GetAvailableProducts(dataConnect);

// Operation CreateProduct:  For variables, look at type CreateProductVars in ../index.d.ts
const { data } = await CreateProduct(dataConnect, createProductVars);

// Operation UpdateProduct:  For variables, look at type UpdateProductVars in ../index.d.ts
const { data } = await UpdateProduct(dataConnect, updateProductVars);

// Operation DeleteProduct:  For variables, look at type DeleteProductVars in ../index.d.ts
const { data } = await DeleteProduct(dataConnect, deleteProductVars);

// Operation GetAllUsers: 
const { data } = await GetAllUsers(dataConnect);

// Operation GetAllProducts: 
const { data } = await GetAllProducts(dataConnect);

// Operation GetAllVideos: 
const { data } = await GetAllVideos(dataConnect);

// Operation GetAllReviews: 
const { data } = await GetAllReviews(dataConnect);


```