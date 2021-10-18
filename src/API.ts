/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserPushRegisterInput = {
  userId?: string | null,
  platform?: string | null,
  deviceId?: string | null,
};

export type UserPushDeleteInput = {
  endpointArn?: string | null,
  userId?: string | null,
};

export type PublishNotificationInput = {
  message?: string | null,
  endpointArn?: string | null,
  subject?: string | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name?: string | null,
  icon?: string | null,
  image?: S3ObjectInput | null,
  description?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name?: string | null,
  icon?: string | null,
  image?: S3Object | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  icon?: string | null,
  image?: S3ObjectInput | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateGymInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  address?: string | null,
  gps?: GPSInput | null,
  pictures?: Array< string | null > | null,
  available?: boolean | null,
  status?: string | null,
  likeCount?: number | null,
  averageRating?: number | null,
  gymOwnerId?: string | null,
};

export type GPSInput = {
  lon: number,
  lat: number,
};

export type ModelGymConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  pictures?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  status?: ModelStringInput | null,
  likeCount?: ModelIntInput | null,
  averageRating?: ModelFloatInput | null,
  gymOwnerId?: ModelIDInput | null,
  and?: Array< ModelGymConditionInput | null > | null,
  or?: Array< ModelGymConditionInput | null > | null,
  not?: ModelGymConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Gym = {
  __typename: "Gym",
  id: string,
  name: string,
  description?: string | null,
  address?: string | null,
  gps?: GPS | null,
  pictures?: Array< string | null > | null,
  available?: boolean | null,
  status?: string | null,
  likeCount?: number | null,
  averageRating?: number | null,
  gymOwnerId?: string | null,
  owner?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type GPS = {
  __typename: "GPS",
  lon?: number | null,
  lat?: number | null,
};

export type User = {
  __typename: "User",
  id: string,
  owner?: string | null,
  userGroup?: UserType | null,
  name: string,
  business?: string | null,
  deviceId?: string | null,
  deviceToken?: string | null,
  platform?: string | null,
  stripeCustomerId?: string | null,
  stripeSubscription?: string | null,
  stripeSubscriptionId?: string | null,
  endpointArn?: string | null,
  email: string,
  username?: string | null,
  birthdate?: string | null,
  gender?: string | null,
  address?: string | null,
  phone?: string | null,
  status?: boolean | null,
  premium?: boolean | null,
  trainer?: boolean | null,
  gps?: GPS | null,
  photo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userSettingId: string,
  userSuscriptionId?: string | null,
  setting?: Setting | null,
  gyms?: ModelGymConnection | null,
  notification?: ModelNotificationConnection | null,
};

export enum UserType {
  User = "User",
  Business = "Business",
}


export type Setting = {
  __typename: "Setting",
  id: string,
  categories?: Array< string | null > | null,
  radius?: number | null,
  icon?: string | null,
  settingOwnerId: string,
  owner?: User | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelGymConnection = {
  __typename: "ModelGymConnection",
  items?:  Array<Gym | null > | null,
  nextToken?: string | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items?:  Array<Notification | null > | null,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  message?: string | null,
  endpointArn: string,
  subject?: string | null,
  notificationOwnerId?: string | null,
  owner?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGymInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  address?: string | null,
  gps?: GPSInput | null,
  pictures?: Array< string | null > | null,
  available?: boolean | null,
  status?: string | null,
  likeCount?: number | null,
  averageRating?: number | null,
  gymOwnerId?: string | null,
};

export type DeleteGymInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  message?: string | null,
  endpointArn: string,
  subject?: string | null,
  notificationOwnerId?: string | null,
};

export type ModelNotificationConditionInput = {
  message?: ModelStringInput | null,
  endpointArn?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  notificationOwnerId?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationInput = {
  id: string,
  message?: string | null,
  endpointArn?: string | null,
  subject?: string | null,
  notificationOwnerId?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateSettingInput = {
  id?: string | null,
  categories?: Array< string | null > | null,
  radius?: number | null,
  icon?: string | null,
  settingOwnerId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSettingConditionInput = {
  categories?: ModelStringInput | null,
  radius?: ModelFloatInput | null,
  icon?: ModelStringInput | null,
  settingOwnerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSettingConditionInput | null > | null,
  or?: Array< ModelSettingConditionInput | null > | null,
  not?: ModelSettingConditionInput | null,
};

export type UpdateSettingInput = {
  id: string,
  categories?: Array< string | null > | null,
  radius?: number | null,
  icon?: string | null,
  settingOwnerId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSettingInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  owner?: string | null,
  userGroup?: UserType | null,
  name: string,
  business?: string | null,
  deviceId?: string | null,
  deviceToken?: string | null,
  platform?: string | null,
  stripeCustomerId?: string | null,
  stripeSubscription?: string | null,
  stripeSubscriptionId?: string | null,
  endpointArn?: string | null,
  email: string,
  username?: string | null,
  birthdate?: string | null,
  gender?: string | null,
  address?: string | null,
  phone?: string | null,
  status?: boolean | null,
  premium?: boolean | null,
  trainer?: boolean | null,
  gps?: GPSInput | null,
  photo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userSettingId: string,
  userSuscriptionId?: string | null,
};

export type ModelUserConditionInput = {
  owner?: ModelStringInput | null,
  userGroup?: ModelUserTypeInput | null,
  name?: ModelStringInput | null,
  business?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  deviceToken?: ModelStringInput | null,
  platform?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripeSubscription?: ModelStringInput | null,
  stripeSubscriptionId?: ModelStringInput | null,
  endpointArn?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  premium?: ModelBooleanInput | null,
  trainer?: ModelBooleanInput | null,
  photo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userSettingId?: ModelIDInput | null,
  userSuscriptionId?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type UpdateUserInput = {
  id: string,
  owner?: string | null,
  userGroup?: UserType | null,
  name?: string | null,
  business?: string | null,
  deviceId?: string | null,
  deviceToken?: string | null,
  platform?: string | null,
  stripeCustomerId?: string | null,
  stripeSubscription?: string | null,
  stripeSubscriptionId?: string | null,
  endpointArn?: string | null,
  email?: string | null,
  username?: string | null,
  birthdate?: string | null,
  gender?: string | null,
  address?: string | null,
  phone?: string | null,
  status?: boolean | null,
  premium?: boolean | null,
  trainer?: boolean | null,
  gps?: GPSInput | null,
  photo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userSettingId?: string | null,
  userSuscriptionId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
};

export type ModelGymFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  address?: ModelStringInput | null,
  pictures?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  status?: ModelStringInput | null,
  likeCount?: ModelIntInput | null,
  averageRating?: ModelFloatInput | null,
  gymOwnerId?: ModelIDInput | null,
  and?: Array< ModelGymFilterInput | null > | null,
  or?: Array< ModelGymFilterInput | null > | null,
  not?: ModelGymFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  endpointArn?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  notificationOwnerId?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelSettingFilterInput = {
  id?: ModelIDInput | null,
  categories?: ModelStringInput | null,
  radius?: ModelFloatInput | null,
  icon?: ModelStringInput | null,
  settingOwnerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSettingFilterInput | null > | null,
  or?: Array< ModelSettingFilterInput | null > | null,
  not?: ModelSettingFilterInput | null,
};

export type ModelSettingConnection = {
  __typename: "ModelSettingConnection",
  items?:  Array<Setting | null > | null,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  userGroup?: ModelUserTypeInput | null,
  name?: ModelStringInput | null,
  business?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  deviceToken?: ModelStringInput | null,
  platform?: ModelStringInput | null,
  stripeCustomerId?: ModelStringInput | null,
  stripeSubscription?: ModelStringInput | null,
  stripeSubscriptionId?: ModelStringInput | null,
  endpointArn?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  premium?: ModelBooleanInput | null,
  trainer?: ModelBooleanInput | null,
  photo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userSettingId?: ModelIDInput | null,
  userSuscriptionId?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type EnableDisableUsersMutationVariables = {
  user?: string | null,
};

export type EnableDisableUsersMutation = {
  enableDisableUsers?: string | null,
};

export type RegisterEndpointArnNotificationMutationVariables = {
  body?: UserPushRegisterInput | null,
};

export type RegisterEndpointArnNotificationMutation = {
  registerEndpointArnNotification?: string | null,
};

export type DeleteEndpointArnNotificationMutationVariables = {
  body?: UserPushDeleteInput | null,
};

export type DeleteEndpointArnNotificationMutation = {
  deleteEndpointArnNotification?: string | null,
};

export type PublishNotificationMutationVariables = {
  body?: PublishNotificationInput | null,
};

export type PublishNotificationMutation = {
  publishNotification?: string | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    icon?: string | null,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    icon?: string | null,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    icon?: string | null,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGymMutationVariables = {
  input: CreateGymInput,
  condition?: ModelGymConditionInput | null,
};

export type CreateGymMutation = {
  createGym?:  {
    __typename: "Gym",
    id: string,
    name: string,
    description?: string | null,
    address?: string | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    pictures?: Array< string | null > | null,
    available?: boolean | null,
    status?: string | null,
    likeCount?: number | null,
    averageRating?: number | null,
    gymOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGymMutationVariables = {
  input: UpdateGymInput,
  condition?: ModelGymConditionInput | null,
};

export type UpdateGymMutation = {
  updateGym?:  {
    __typename: "Gym",
    id: string,
    name: string,
    description?: string | null,
    address?: string | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    pictures?: Array< string | null > | null,
    available?: boolean | null,
    status?: string | null,
    likeCount?: number | null,
    averageRating?: number | null,
    gymOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGymMutationVariables = {
  input: DeleteGymInput,
  condition?: ModelGymConditionInput | null,
};

export type DeleteGymMutation = {
  deleteGym?:  {
    __typename: "Gym",
    id: string,
    name: string,
    description?: string | null,
    address?: string | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    pictures?: Array< string | null > | null,
    available?: boolean | null,
    status?: string | null,
    likeCount?: number | null,
    averageRating?: number | null,
    gymOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    message?: string | null,
    endpointArn: string,
    subject?: string | null,
    notificationOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    message?: string | null,
    endpointArn: string,
    subject?: string | null,
    notificationOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    message?: string | null,
    endpointArn: string,
    subject?: string | null,
    notificationOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSettingMutationVariables = {
  input: CreateSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type CreateSettingMutation = {
  createSetting?:  {
    __typename: "Setting",
    id: string,
    categories?: Array< string | null > | null,
    radius?: number | null,
    icon?: string | null,
    settingOwnerId: string,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateSettingMutationVariables = {
  input: UpdateSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type UpdateSettingMutation = {
  updateSetting?:  {
    __typename: "Setting",
    id: string,
    categories?: Array< string | null > | null,
    radius?: number | null,
    icon?: string | null,
    settingOwnerId: string,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteSettingMutationVariables = {
  input: DeleteSettingInput,
  condition?: ModelSettingConditionInput | null,
};

export type DeleteSettingMutation = {
  deleteSetting?:  {
    __typename: "Setting",
    id: string,
    categories?: Array< string | null > | null,
    radius?: number | null,
    icon?: string | null,
    settingOwnerId: string,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    userGroup?: UserType | null,
    name: string,
    business?: string | null,
    deviceId?: string | null,
    deviceToken?: string | null,
    platform?: string | null,
    stripeCustomerId?: string | null,
    stripeSubscription?: string | null,
    stripeSubscriptionId?: string | null,
    endpointArn?: string | null,
    email: string,
    username?: string | null,
    birthdate?: string | null,
    gender?: string | null,
    address?: string | null,
    phone?: string | null,
    status?: boolean | null,
    premium?: boolean | null,
    trainer?: boolean | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    photo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSettingId: string,
    userSuscriptionId?: string | null,
    setting?:  {
      __typename: "Setting",
      id: string,
      categories?: Array< string | null > | null,
      radius?: number | null,
      icon?: string | null,
      settingOwnerId: string,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    gyms?:  {
      __typename: "ModelGymConnection",
      items?:  Array< {
        __typename: "Gym",
        id: string,
        name: string,
        description?: string | null,
        address?: string | null,
        pictures?: Array< string | null > | null,
        available?: boolean | null,
        status?: string | null,
        likeCount?: number | null,
        averageRating?: number | null,
        gymOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notification?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        message?: string | null,
        endpointArn: string,
        subject?: string | null,
        notificationOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    userGroup?: UserType | null,
    name: string,
    business?: string | null,
    deviceId?: string | null,
    deviceToken?: string | null,
    platform?: string | null,
    stripeCustomerId?: string | null,
    stripeSubscription?: string | null,
    stripeSubscriptionId?: string | null,
    endpointArn?: string | null,
    email: string,
    username?: string | null,
    birthdate?: string | null,
    gender?: string | null,
    address?: string | null,
    phone?: string | null,
    status?: boolean | null,
    premium?: boolean | null,
    trainer?: boolean | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    photo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSettingId: string,
    userSuscriptionId?: string | null,
    setting?:  {
      __typename: "Setting",
      id: string,
      categories?: Array< string | null > | null,
      radius?: number | null,
      icon?: string | null,
      settingOwnerId: string,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    gyms?:  {
      __typename: "ModelGymConnection",
      items?:  Array< {
        __typename: "Gym",
        id: string,
        name: string,
        description?: string | null,
        address?: string | null,
        pictures?: Array< string | null > | null,
        available?: boolean | null,
        status?: string | null,
        likeCount?: number | null,
        averageRating?: number | null,
        gymOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notification?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        message?: string | null,
        endpointArn: string,
        subject?: string | null,
        notificationOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    userGroup?: UserType | null,
    name: string,
    business?: string | null,
    deviceId?: string | null,
    deviceToken?: string | null,
    platform?: string | null,
    stripeCustomerId?: string | null,
    stripeSubscription?: string | null,
    stripeSubscriptionId?: string | null,
    endpointArn?: string | null,
    email: string,
    username?: string | null,
    birthdate?: string | null,
    gender?: string | null,
    address?: string | null,
    phone?: string | null,
    status?: boolean | null,
    premium?: boolean | null,
    trainer?: boolean | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    photo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSettingId: string,
    userSuscriptionId?: string | null,
    setting?:  {
      __typename: "Setting",
      id: string,
      categories?: Array< string | null > | null,
      radius?: number | null,
      icon?: string | null,
      settingOwnerId: string,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    gyms?:  {
      __typename: "ModelGymConnection",
      items?:  Array< {
        __typename: "Gym",
        id: string,
        name: string,
        description?: string | null,
        address?: string | null,
        pictures?: Array< string | null > | null,
        available?: boolean | null,
        status?: string | null,
        likeCount?: number | null,
        averageRating?: number | null,
        gymOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notification?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        message?: string | null,
        endpointArn: string,
        subject?: string | null,
        notificationOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    icon?: string | null,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      icon?: string | null,
      image?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGymQueryVariables = {
  id: string,
};

export type GetGymQuery = {
  getGym?:  {
    __typename: "Gym",
    id: string,
    name: string,
    description?: string | null,
    address?: string | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    pictures?: Array< string | null > | null,
    available?: boolean | null,
    status?: string | null,
    likeCount?: number | null,
    averageRating?: number | null,
    gymOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGymsQueryVariables = {
  id?: string | null,
  filter?: ModelGymFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGymsQuery = {
  listGyms?:  {
    __typename: "ModelGymConnection",
    items?:  Array< {
      __typename: "Gym",
      id: string,
      name: string,
      description?: string | null,
      address?: string | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      pictures?: Array< string | null > | null,
      available?: boolean | null,
      status?: string | null,
      likeCount?: number | null,
      averageRating?: number | null,
      gymOwnerId?: string | null,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    message?: string | null,
    endpointArn: string,
    subject?: string | null,
    notificationOwnerId?: string | null,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items?:  Array< {
      __typename: "Notification",
      id: string,
      message?: string | null,
      endpointArn: string,
      subject?: string | null,
      notificationOwnerId?: string | null,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetSettingQueryVariables = {
  id: string,
};

export type GetSettingQuery = {
  getSetting?:  {
    __typename: "Setting",
    id: string,
    categories?: Array< string | null > | null,
    radius?: number | null,
    icon?: string | null,
    settingOwnerId: string,
    owner?:  {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListSettingsQueryVariables = {
  filter?: ModelSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSettingsQuery = {
  listSettings?:  {
    __typename: "ModelSettingConnection",
    items?:  Array< {
      __typename: "Setting",
      id: string,
      categories?: Array< string | null > | null,
      radius?: number | null,
      icon?: string | null,
      settingOwnerId: string,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    userGroup?: UserType | null,
    name: string,
    business?: string | null,
    deviceId?: string | null,
    deviceToken?: string | null,
    platform?: string | null,
    stripeCustomerId?: string | null,
    stripeSubscription?: string | null,
    stripeSubscriptionId?: string | null,
    endpointArn?: string | null,
    email: string,
    username?: string | null,
    birthdate?: string | null,
    gender?: string | null,
    address?: string | null,
    phone?: string | null,
    status?: boolean | null,
    premium?: boolean | null,
    trainer?: boolean | null,
    gps?:  {
      __typename: "GPS",
      lon?: number | null,
      lat?: number | null,
    } | null,
    photo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSettingId: string,
    userSuscriptionId?: string | null,
    setting?:  {
      __typename: "Setting",
      id: string,
      categories?: Array< string | null > | null,
      radius?: number | null,
      icon?: string | null,
      settingOwnerId: string,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    gyms?:  {
      __typename: "ModelGymConnection",
      items?:  Array< {
        __typename: "Gym",
        id: string,
        name: string,
        description?: string | null,
        address?: string | null,
        pictures?: Array< string | null > | null,
        available?: boolean | null,
        status?: string | null,
        likeCount?: number | null,
        averageRating?: number | null,
        gymOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notification?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        message?: string | null,
        endpointArn: string,
        subject?: string | null,
        notificationOwnerId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      scannedCount?: number | null,
      count?: number | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetCategoryByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCategoryByNameQuery = {
  getCategoryByName?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      icon?: string | null,
      image?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationsByEndpointQueryVariables = {
  endpointArn?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetNotificationsByEndpointQuery = {
  getNotificationsByEndpoint?:  {
    __typename: "ModelNotificationConnection",
    items?:  Array< {
      __typename: "Notification",
      id: string,
      message?: string | null,
      endpointArn: string,
      subject?: string | null,
      notificationOwnerId?: string | null,
      owner?:  {
        __typename: "User",
        id: string,
        owner?: string | null,
        userGroup?: UserType | null,
        name: string,
        business?: string | null,
        deviceId?: string | null,
        deviceToken?: string | null,
        platform?: string | null,
        stripeCustomerId?: string | null,
        stripeSubscription?: string | null,
        stripeSubscriptionId?: string | null,
        endpointArn?: string | null,
        email: string,
        username?: string | null,
        birthdate?: string | null,
        gender?: string | null,
        address?: string | null,
        phone?: string | null,
        status?: boolean | null,
        premium?: boolean | null,
        trainer?: boolean | null,
        photo?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        userSettingId: string,
        userSuscriptionId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetUserByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByEmailQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      owner?: string | null,
      userGroup?: UserType | null,
      name: string,
      business?: string | null,
      deviceId?: string | null,
      deviceToken?: string | null,
      platform?: string | null,
      stripeCustomerId?: string | null,
      stripeSubscription?: string | null,
      stripeSubscriptionId?: string | null,
      endpointArn?: string | null,
      email: string,
      username?: string | null,
      birthdate?: string | null,
      gender?: string | null,
      address?: string | null,
      phone?: string | null,
      status?: boolean | null,
      premium?: boolean | null,
      trainer?: boolean | null,
      gps?:  {
        __typename: "GPS",
        lon?: number | null,
        lat?: number | null,
      } | null,
      photo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userSettingId: string,
      userSuscriptionId?: string | null,
      setting?:  {
        __typename: "Setting",
        id: string,
        categories?: Array< string | null > | null,
        radius?: number | null,
        icon?: string | null,
        settingOwnerId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      gyms?:  {
        __typename: "ModelGymConnection",
        nextToken?: string | null,
      } | null,
      notification?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
        scannedCount?: number | null,
        count?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};
