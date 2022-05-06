import { IEditProfileFormFieldsData } from '../../profile.types';

export interface IInputVariables {
  clientTypeId: number;
  newData: IEditProfileFormFieldsData;
  oldData: IEditProfileFormFieldsData;
}
