import { ListProductsData, ListProductsVariables, GetProductByNameData, GetProductByNameVariables, GetAvailableProductsData, CreateProductData, CreateProductVariables, UpdateProductData, UpdateProductVariables, DeleteProductData, DeleteProductVariables, GetAllUsersData, GetAllProductsData, GetAllVideosData, GetAllReviewsData, GetUserSubscriptionsData, CreateReviewData, CreateReviewVariables, UpdateReviewData, UpdateReviewVariables, CreateVideoData, CreateVideoVariables, UpdateVideoData, UpdateVideoVariables, CreateNewUserData, ListAvailableProductsData, AddNewReviewData, GetMySubscriptionData, GetUsersData, GetUsersVariables, GetUserByEmailData, GetUserByEmailVariables, CreateUserData, CreateUserVariables, UpdateUserData, UpdateUserVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListProducts(vars?: ListProductsVariables, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, ListProductsVariables>;
export function useListProducts(dc: DataConnect, vars?: ListProductsVariables, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, ListProductsVariables>;

export function useGetProductByName(vars: GetProductByNameVariables, options?: useDataConnectQueryOptions<GetProductByNameData>): UseDataConnectQueryResult<GetProductByNameData, GetProductByNameVariables>;
export function useGetProductByName(dc: DataConnect, vars: GetProductByNameVariables, options?: useDataConnectQueryOptions<GetProductByNameData>): UseDataConnectQueryResult<GetProductByNameData, GetProductByNameVariables>;

export function useGetAvailableProducts(options?: useDataConnectQueryOptions<GetAvailableProductsData>): UseDataConnectQueryResult<GetAvailableProductsData, undefined>;
export function useGetAvailableProducts(dc: DataConnect, options?: useDataConnectQueryOptions<GetAvailableProductsData>): UseDataConnectQueryResult<GetAvailableProductsData, undefined>;

export function useCreateProduct(options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;
export function useCreateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;

export function useUpdateProduct(options?: useDataConnectMutationOptions<UpdateProductData, FirebaseError, UpdateProductVariables>): UseDataConnectMutationResult<UpdateProductData, UpdateProductVariables>;
export function useUpdateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProductData, FirebaseError, UpdateProductVariables>): UseDataConnectMutationResult<UpdateProductData, UpdateProductVariables>;

export function useDeleteProduct(options?: useDataConnectMutationOptions<DeleteProductData, FirebaseError, DeleteProductVariables>): UseDataConnectMutationResult<DeleteProductData, DeleteProductVariables>;
export function useDeleteProduct(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProductData, FirebaseError, DeleteProductVariables>): UseDataConnectMutationResult<DeleteProductData, DeleteProductVariables>;

export function useGetAllUsers(options?: useDataConnectQueryOptions<GetAllUsersData>): UseDataConnectQueryResult<GetAllUsersData, undefined>;
export function useGetAllUsers(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllUsersData>): UseDataConnectQueryResult<GetAllUsersData, undefined>;

export function useGetAllProducts(options?: useDataConnectQueryOptions<GetAllProductsData>): UseDataConnectQueryResult<GetAllProductsData, undefined>;
export function useGetAllProducts(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllProductsData>): UseDataConnectQueryResult<GetAllProductsData, undefined>;

export function useGetAllVideos(options?: useDataConnectQueryOptions<GetAllVideosData>): UseDataConnectQueryResult<GetAllVideosData, undefined>;
export function useGetAllVideos(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllVideosData>): UseDataConnectQueryResult<GetAllVideosData, undefined>;

export function useGetAllReviews(options?: useDataConnectQueryOptions<GetAllReviewsData>): UseDataConnectQueryResult<GetAllReviewsData, undefined>;
export function useGetAllReviews(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllReviewsData>): UseDataConnectQueryResult<GetAllReviewsData, undefined>;

export function useGetUserSubscriptions(options?: useDataConnectQueryOptions<GetUserSubscriptionsData>): UseDataConnectQueryResult<GetUserSubscriptionsData, undefined>;
export function useGetUserSubscriptions(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserSubscriptionsData>): UseDataConnectQueryResult<GetUserSubscriptionsData, undefined>;

export function useCreateReview(options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;
export function useCreateReview(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;

export function useUpdateReview(options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseDataConnectMutationResult<UpdateReviewData, UpdateReviewVariables>;
export function useUpdateReview(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseDataConnectMutationResult<UpdateReviewData, UpdateReviewVariables>;

export function useCreateVideo(options?: useDataConnectMutationOptions<CreateVideoData, FirebaseError, CreateVideoVariables>): UseDataConnectMutationResult<CreateVideoData, CreateVideoVariables>;
export function useCreateVideo(dc: DataConnect, options?: useDataConnectMutationOptions<CreateVideoData, FirebaseError, CreateVideoVariables>): UseDataConnectMutationResult<CreateVideoData, CreateVideoVariables>;

export function useUpdateVideo(options?: useDataConnectMutationOptions<UpdateVideoData, FirebaseError, UpdateVideoVariables>): UseDataConnectMutationResult<UpdateVideoData, UpdateVideoVariables>;
export function useUpdateVideo(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateVideoData, FirebaseError, UpdateVideoVariables>): UseDataConnectMutationResult<UpdateVideoData, UpdateVideoVariables>;

export function useCreateNewUser(options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateNewUserData, undefined>;
export function useCreateNewUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateNewUserData, undefined>;

export function useListAvailableProducts(options?: useDataConnectQueryOptions<ListAvailableProductsData>): UseDataConnectQueryResult<ListAvailableProductsData, undefined>;
export function useListAvailableProducts(dc: DataConnect, options?: useDataConnectQueryOptions<ListAvailableProductsData>): UseDataConnectQueryResult<ListAvailableProductsData, undefined>;

export function useAddNewReview(options?: useDataConnectMutationOptions<AddNewReviewData, FirebaseError, void>): UseDataConnectMutationResult<AddNewReviewData, undefined>;
export function useAddNewReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewReviewData, FirebaseError, void>): UseDataConnectMutationResult<AddNewReviewData, undefined>;

export function useGetMySubscription(options?: useDataConnectQueryOptions<GetMySubscriptionData>): UseDataConnectQueryResult<GetMySubscriptionData, undefined>;
export function useGetMySubscription(dc: DataConnect, options?: useDataConnectQueryOptions<GetMySubscriptionData>): UseDataConnectQueryResult<GetMySubscriptionData, undefined>;

export function useGetUsers(vars?: GetUsersVariables, options?: useDataConnectQueryOptions<GetUsersData>): UseDataConnectQueryResult<GetUsersData, GetUsersVariables>;
export function useGetUsers(dc: DataConnect, vars?: GetUsersVariables, options?: useDataConnectQueryOptions<GetUsersData>): UseDataConnectQueryResult<GetUsersData, GetUsersVariables>;

export function useGetUserByEmail(vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;
export function useGetUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;

export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables | void>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables | void>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
