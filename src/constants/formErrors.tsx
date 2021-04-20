/** TYPES */
import { ISelectOption } from "../types";

/**
 * **Check to see if the phone number provided matches our validation pattern**
 *
 * @param phone - Phone number provided in the form
 * @returns undefined if valid phone number, error message if invalid.
 *
 */
const isValidPhone = (phone: any) => {
  /** REGEX PATTERN FOR PHONES */
  const pattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  /** Replace all non-number characters */
  const digits = phone.replace(/\D/g, "");
  /** Runs the pattern against the digits and returns true if valid, false if invalid */
  const isValid = pattern.test(digits);
  /** If isValid is true, return undefined, otherwise return error message. */
  return isValid ? undefined : "Please enter a valid phone number.";
};

export const formErrors = {
  first: {
    required: {
      value: true,
      message: "Please provide your first name",
    },
  },
  middle: {},
  last: {
    required: {
      value: true,
      message: "Please provide your last name",
    },
  },
  preferred: {},
  prefix: {},
  suffix: {},
  propertyType: {},
  contacts: {},
  primaryPhone: {},
  primaryAddress: {},
  primaryStreet: {
    required: {
      value: true,
      message: "Please provide your street name",
    },
  },
  primaryAptUnit: {},
  primaryCity: {
    required: {
      value: true,
      message: "Please provide your city",
    },
  },
  primaryState: {
    required: {
      value: true,
      message: "Please provide your state",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  primaryZip: {
    required: {
      value: true,
      max: 5,
      message: "Please provide a valid zip code",
    },
  },
  primaryCounty: {
    required: {
      value: true,
      message: "Please provide your county",
    },
  },
  daysSpent: {
    required: {
      value: true,
      message: "Please provide days spent",
    },
  },
  mailAddressSameAsPrimary: {},
  sameAsMember: {},
  secondaryAddress: {},
  secondaryStreet: {
    required: {
      value: true,
      message: "Please provide your street name",
    },
  },
  secondaryAptUnit: {},
  secondaryCity: {
    required: {
      value: true,
      message: "Please provide your city",
    },
  },
  secondaryState: {
    required: {
      value: true,
      message: "Please provide your state",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  secondaryZip: {
    required: {
      value: true,
      max: 5,
      message: "Please provide a valid zip code",
    },
  },
  secondaryCounty: {},
  homePrimary: {},
  home: {
    validate: (phone: any) => isValidPhone(phone),
  },
  cellPrimary: {},
  cell: {
    validate: (phone: any) => isValidPhone(phone),
  },
  businessPhone: {
    validate: (phone: any) => isValidPhone(phone),
  },
  bestTimeToCall: {
    required: {
      value: true,
      message: "Please enter the best time to call",
    },
  },
  email: {
    pattern: {
      /**  REGEX PATTERN FOR EMAILS */
      // eslint-disable-next-line
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: "Please enter a valid email address.",
    },
  },
  dob: {
    required: {
      value: true,
      message: "Please provide a date.",
    },
  },
  ssn: {},
  livingStatus: {
    required: {
      value: true,
      message: "Please provide life status",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  dod: {},
  gender: {
    required: {
      value: true,
      message: "Please provide your gender.",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  veteran: {
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  disability: {},
  usCitizen: {},
  receiveGovBenefits: {},
  hearingImpaired: {},
  employed: {
    // required: {
    //   value: true,
    //   message: "Please select one of the options",
    // },
  },
  planToRetire: {},
  occupation: {},
  occupationStatus: {
    required: {
      value: true,
      message: "Please select an occupation status",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  retired: {},
  retirementDate: {},
  date: {
    required: {
      value: true,
      message: "Please provide a date.",
    },
  },
  relationToMembers: {
    required: {
      value: true,
      message: "Please make a selection.",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  relationType: {
    required: {
      value: true,
      message: "Please make a selection.",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  details: {
    required: {
      value: true,
      message: "Please make a selection",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  childDetails: {
    required: {
      value: true,
      message: "Please make a selection",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  grandChildDetails: {
    required: {
      value: true,
      message: "Please make a selection",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  relatedTo: {
    required: {
      value: true,
      message: "Please make a selection",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  okayToText: {},
  checkEmailRegularly: {},
  okayToEmail: {},
  useFacebook: {},
  married: {},
  dateOfMarriage: {},
  stateMarried: {},
  working: {},
  notes: {},
  lastWillAndTestament: {},
  revocableLivingTrust: {},
  financialPowerOfAttorney: {},
  healthcarePowerOfAttorney: {},
  advanceDirective: {},
  realEstateType: {},
  residentialCommercialType: {},
  mortgageLoans: {
    max: {
      value: 2147483647,
      message: "The amount entered is too large. Please record the amount in the notes",
    },
  },
  estimatedValue: {
    max: {
      value: 2147483647,
      message: "The amount entered is too large. Please record the amount in the notes",
    },
  },
  ownershipType: {
    required: {
      value: true,
      message: "Please make a selection",
    },
  },
  owner: {},
  ownerOne: {},
  ownerTwo: {},
  ownerThree: {},
  entity: {},
  entityType: {
    required: {
      value: true,
      message: "Please make a selection",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  entityName: {
    required: {
      value: true,
      message: "Please provide a name.",
    },
  },
  eIn: {
    required: {
      value: true,
      message: "Please provide an ID .",
    },
  },
  businessName: {},
  businessType: {},
  member: {},
  spouse: {},
  joint: {},
  uaa: {},
  assetType: {},
  asset: {},
  make: {},
  model: {},
  year: {},
  color: {},
  loan: {},
  value: {},
  description: {},
  name: {},
  primary: {},
  firstAlternative: {},
  secondAlternative: {},
  sameAsRepresentative: {},
  artificialRespiration: {},
  painMedication: {},
  hydration: {},
  feedingTube: {},
  beneficiary: {},
  distributionTime: {},
  spousePrimary: {},
  spouseAlternateOne: {},
  spouseAlternateTwo: {},
  residualLeftToDropdown: {},
  amountPercentage: {},
  whoDropdown: {},
  typeDropdown: {},
  when: {},
  state: {},
  workStatus: {},
  relationshipStatus: {
    required: {
      value: true,
      message: "Please make a selection.",
    },
    validate: (val: ISelectOption) => val !== { value: -1, label: "" },
  },
  preNupAgreement: {},
  settlementAgreement: {},
  assetsIncludedSettlementAgreement: {},
  settlementEnded: {},
  settlementStarted: {},
  agreementStatus: {},
  stateOfDeath: {},
  dateDeceased: {},
  stateDivorced: {},
  dateDivorced: {},
  estateProbate: {},
  probateStatus: {},
  probateClosed: {},
  probateOpen: {},
  civilUnionStatus: {},
  secondaryDaysSpent: {},
  primaryDaysSpent: {},
  rep: {},
  salesDate: {},
  establishedDate: {},
  establishedState: {},

  checkingMember: {},
  checkingSpouse: {},
  checkingJoint: {},
  savingsMember: {},
  savingsSpouse: {},
  savingsJoint: {},
  cdsAndMoneyMarketMember: {},
  cdsAndMoneyMarketSpouse: {},
  cdsAndMoneyMarketJoint: {},
  retirementMember: {},
  retirementSpouse: {},
  investmentMember: {},
  investmentSpouse: {},
  investmentJoint: {},
  annuitiesMember: {},
  annuitiesSpouse: {},
  annuitiesJoint: {},
  permanentLifeInsuranceMember: {},
  permanentLifeInsuranceSpouse: {},
  termLifeInsuranceMember: {},
  termLifeInsuranceSpouse: {},
  petType: {},
};
