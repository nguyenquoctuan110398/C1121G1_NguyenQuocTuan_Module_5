import {ServiceType} from "./service-type";
import {RentType} from "./rent-type";

export interface Services {
  id?: number;
  serviceCode?: string;
  serviceName?: string;
  serviceArea?: string;
  serviceCost?: string;
  serviceMaxPeople?: string;
  standardRoom?: string;
  descriptionOtherConvenience?: string
  poolArea?: string;
  numberOfFloors?: string;
  serviceType?: ServiceType;
  rentType?: RentType;
  serviceImg?: string;
}
