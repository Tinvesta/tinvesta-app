export interface IAlertContextValue {
  showErrorAlert: (message: string) => void;
  showInfoAlert: (message: string) => void;
  showSuccessAlert: (message: string) => void;
  showWarningAlert: (message: string) => void;
}
