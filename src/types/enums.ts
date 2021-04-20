/**
 * **Strings representing the different screens**
 * @enum
 */
export enum ScreenState {
  Home = 'Home',
  Toast = 'Onboarding',
  Form = 'Case Management',
}

/**
 * **Strings representing the different input names**
 * @enum
 */
export enum InputName {
  Name = 'name',
  Email = 'email',
  Phone = 'phone',
  Date = 'date',
  IceCream = 'iceCream',
}

/**
 * **Strings representing the different ice cream options**
 * @enum
 */
export enum IceCream {
  Chocolate = 'chocolate',
  Vanilla = 'vanilla',
  Strawberry = 'strawberry',
  RockyRoad = 'rocky road',
}

/**
 * **Strings representing the different toast types**
 */
export enum ToastType {
  /** Success Toast Type */
  Success = 'Success',
  /** Error Toast Type */
  Error = 'Error',
  /** Warning Toast Type */
  Warning = 'Warning',
  /** Info Toast Type */
  Info = 'Info',
}
