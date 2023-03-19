// src/adminjs/resources/index.ts

import { ResourceWithOptions } from "adminjs";
import { Convertion, Currency, User } from "../../models";
import { convertionResourceOptions } from "./convertion";
import { currencyResourceOptions } from "./currency";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: User,
    options: userResourceOptions
  },
  {
    resource: Convertion,
    options: convertionResourceOptions
  },
  {
    resource: Currency,
    options: currencyResourceOptions
  },
]