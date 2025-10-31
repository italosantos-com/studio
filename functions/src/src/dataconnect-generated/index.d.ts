import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddNewReviewData {
  review_insert: Review_Key;
}

export interface CreateNewUserData {
  user_insert: User_Key;
}

export interface CreateProductData {
  product_insert: Product_Key;
}

export interface CreateProductVariables {
  name: string;
  price: number;
  description?: string | null;
  imageUrl?: string | null;
  storagePath?: string | null;
  isAvailable?: boolean | null;
}

export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  user: User_Key;
  content: string;
  status: string;
  rating?: number | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  imageUrl?: string | null;
  storagePath?: string | null;
}

export interface CreateVideoData {
  video_insert: Video_Key;
}

export interface CreateVideoVariables {
  name: string;
  price: number;
  videoUrl: string;
  storagePath: string;
  description?: string | null;
  thumbnailUrl?: string | null;
  isAvailable?: boolean | null;
}

export interface DeleteProductData {
  product_delete?: Product_Key | null;
}

export interface DeleteProductVariables {
  key: Product_Key;
}

export interface GetAllProductsData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}

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

export interface GetAllUsersData {
  users: ({
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    imageUrl?: string | null;
    createdAt: TimestampString;
  })[];
}

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

export interface GetAvailableProductsData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}

export interface GetMySubscriptionData {
  subscriptionTypes: ({
    id: UUIDString;
    plan?: string | null;
    startDate?: TimestampString | null;
    endDate?: TimestampString | null;
    status: string;
  } & SubscriptionType_Key)[];
}

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

export interface GetProductByNameVariables {
  name: string;
}

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

export interface GetUserByEmailVariables {
  email: string;
}

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

export interface GetUsersData {
  users: ({
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    imageUrl?: string | null;
    createdAt: TimestampString;
  })[];
}

export interface GetUsersVariables {
  limit?: number | null;
}

export interface ListAvailableProductsData {
  products: ({
    id: UUIDString;
    name: string;
    price: number;
    imageUrl?: string | null;
  } & Product_Key)[];
}

export interface ListProductsData {
  products: ({
    name: string;
    price: number;
    description?: string | null;
    imageUrl?: string | null;
    isAvailable?: boolean | null;
  })[];
}

export interface ListProductsVariables {
  limit?: number | null;
}

export interface Photo_Key {
  id: UUIDString;
  __typename?: 'Photo_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface SubscriptionType_Key {
  id: UUIDString;
  __typename?: 'SubscriptionType_Key';
}

export interface UpdateProductData {
  product_update?: Product_Key | null;
}

export interface UpdateProductVariables {
  key: Product_Key;
  name?: string | null;
  price?: number | null;
  description?: string | null;
  imageUrl?: string | null;
  isAvailable?: boolean | null;
}

export interface UpdateReviewData {
  review_update?: Review_Key | null;
}

export interface UpdateReviewVariables {
  key: Review_Key;
  content?: string | null;
  status?: string | null;
  rating?: number | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  key: User_Key;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  imageUrl?: string | null;
}

export interface UpdateVideoData {
  video_update?: Video_Key | null;
}

export interface UpdateVideoVariables {
  key: Video_Key;
  name?: string | null;
  price?: number | null;
  description?: string | null;
  thumbnailUrl?: string | null;
  isAvailable?: boolean | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Video_Key {
  id: UUIDString;
  __typename?: 'Video_Key';
}

interface ListProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListProductsVariables): QueryRef<ListProductsData, ListProductsVariables>;
  operationName: string;
}
export const listProductsRef: ListProductsRef;

export function listProducts(vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;
export function listProducts(dc: DataConnect, vars?: ListProductsVariables): QueryPromise<ListProductsData, ListProductsVariables>;

interface GetProductByNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProductByNameVariables): QueryRef<GetProductByNameData, GetProductByNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProductByNameVariables): QueryRef<GetProductByNameData, GetProductByNameVariables>;
  operationName: string;
}
export const getProductByNameRef: GetProductByNameRef;

export function getProductByName(vars: GetProductByNameVariables): QueryPromise<GetProductByNameData, GetProductByNameVariables>;
export function getProductByName(dc: DataConnect, vars: GetProductByNameVariables): QueryPromise<GetProductByNameData, GetProductByNameVariables>;

interface GetAvailableProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAvailableProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAvailableProductsData, undefined>;
  operationName: string;
}
export const getAvailableProductsRef: GetAvailableProductsRef;

export function getAvailableProducts(): QueryPromise<GetAvailableProductsData, undefined>;
export function getAvailableProducts(dc: DataConnect): QueryPromise<GetAvailableProductsData, undefined>;

interface CreateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  operationName: string;
}
export const createProductRef: CreateProductRef;

export function createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;
export function createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface UpdateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProductVariables): MutationRef<UpdateProductData, UpdateProductVariables>;
  operationName: string;
}
export const updateProductRef: UpdateProductRef;

export function updateProduct(vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;
export function updateProduct(dc: DataConnect, vars: UpdateProductVariables): MutationPromise<UpdateProductData, UpdateProductVariables>;

interface DeleteProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProductVariables): MutationRef<DeleteProductData, DeleteProductVariables>;
  operationName: string;
}
export const deleteProductRef: DeleteProductRef;

export function deleteProduct(vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;
export function deleteProduct(dc: DataConnect, vars: DeleteProductVariables): MutationPromise<DeleteProductData, DeleteProductVariables>;

interface GetAllUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllUsersData, undefined>;
  operationName: string;
}
export const getAllUsersRef: GetAllUsersRef;

export function getAllUsers(): QueryPromise<GetAllUsersData, undefined>;
export function getAllUsers(dc: DataConnect): QueryPromise<GetAllUsersData, undefined>;

interface GetAllProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllProductsData, undefined>;
  operationName: string;
}
export const getAllProductsRef: GetAllProductsRef;

export function getAllProducts(): QueryPromise<GetAllProductsData, undefined>;
export function getAllProducts(dc: DataConnect): QueryPromise<GetAllProductsData, undefined>;

interface GetAllVideosRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllVideosData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllVideosData, undefined>;
  operationName: string;
}
export const getAllVideosRef: GetAllVideosRef;

export function getAllVideos(): QueryPromise<GetAllVideosData, undefined>;
export function getAllVideos(dc: DataConnect): QueryPromise<GetAllVideosData, undefined>;

interface GetAllReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllReviewsData, undefined>;
  operationName: string;
}
export const getAllReviewsRef: GetAllReviewsRef;

export function getAllReviews(): QueryPromise<GetAllReviewsData, undefined>;
export function getAllReviews(dc: DataConnect): QueryPromise<GetAllReviewsData, undefined>;

interface GetUserSubscriptionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserSubscriptionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserSubscriptionsData, undefined>;
  operationName: string;
}
export const getUserSubscriptionsRef: GetUserSubscriptionsRef;

export function getUserSubscriptions(): QueryPromise<GetUserSubscriptionsData, undefined>;
export function getUserSubscriptions(dc: DataConnect): QueryPromise<GetUserSubscriptionsData, undefined>;

interface CreateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  operationName: string;
}
export const createReviewRef: CreateReviewRef;

export function createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;
export function createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface UpdateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
  operationName: string;
}
export const updateReviewRef: UpdateReviewRef;

export function updateReview(vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;
export function updateReview(dc: DataConnect, vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface CreateVideoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateVideoVariables): MutationRef<CreateVideoData, CreateVideoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateVideoVariables): MutationRef<CreateVideoData, CreateVideoVariables>;
  operationName: string;
}
export const createVideoRef: CreateVideoRef;

export function createVideo(vars: CreateVideoVariables): MutationPromise<CreateVideoData, CreateVideoVariables>;
export function createVideo(dc: DataConnect, vars: CreateVideoVariables): MutationPromise<CreateVideoData, CreateVideoVariables>;

interface UpdateVideoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateVideoVariables): MutationRef<UpdateVideoData, UpdateVideoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateVideoVariables): MutationRef<UpdateVideoData, UpdateVideoVariables>;
  operationName: string;
}
export const updateVideoRef: UpdateVideoRef;

export function updateVideo(vars: UpdateVideoVariables): MutationPromise<UpdateVideoData, UpdateVideoVariables>;
export function updateVideo(dc: DataConnect, vars: UpdateVideoVariables): MutationPromise<UpdateVideoData, UpdateVideoVariables>;

interface CreateNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNewUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateNewUserData, undefined>;
  operationName: string;
}
export const createNewUserRef: CreateNewUserRef;

export function createNewUser(): MutationPromise<CreateNewUserData, undefined>;
export function createNewUser(dc: DataConnect): MutationPromise<CreateNewUserData, undefined>;

interface ListAvailableProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAvailableProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAvailableProductsData, undefined>;
  operationName: string;
}
export const listAvailableProductsRef: ListAvailableProductsRef;

export function listAvailableProducts(): QueryPromise<ListAvailableProductsData, undefined>;
export function listAvailableProducts(dc: DataConnect): QueryPromise<ListAvailableProductsData, undefined>;

interface AddNewReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddNewReviewData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<AddNewReviewData, undefined>;
  operationName: string;
}
export const addNewReviewRef: AddNewReviewRef;

export function addNewReview(): MutationPromise<AddNewReviewData, undefined>;
export function addNewReview(dc: DataConnect): MutationPromise<AddNewReviewData, undefined>;

interface GetMySubscriptionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySubscriptionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMySubscriptionData, undefined>;
  operationName: string;
}
export const getMySubscriptionRef: GetMySubscriptionRef;

export function getMySubscription(): QueryPromise<GetMySubscriptionData, undefined>;
export function getMySubscription(dc: DataConnect): QueryPromise<GetMySubscriptionData, undefined>;

interface GetUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetUsersVariables): QueryRef<GetUsersData, GetUsersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetUsersVariables): QueryRef<GetUsersData, GetUsersVariables>;
  operationName: string;
}
export const getUsersRef: GetUsersRef;

export function getUsers(vars?: GetUsersVariables): QueryPromise<GetUsersData, GetUsersVariables>;
export function getUsers(dc: DataConnect, vars?: GetUsersVariables): QueryPromise<GetUsersData, GetUsersVariables>;

interface GetUserByEmailRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
  operationName: string;
}
export const getUserByEmailRef: GetUserByEmailRef;

export function getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;
export function getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

