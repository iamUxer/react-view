import React from "react";
import { FormattedMessage } from "react-intl";

export const InsuranceTypes = [
  {
    value: 1,
    label: <FormattedMessage id={"insurancetypes.general"} />
  },
  {
    value: 2,
    label: <FormattedMessage id={"insurancetypes.fullpersonalburden"} />
  },
  {
    value: 3,
    label: <FormattedMessage id={"insurancetypes.healthinsurance"} />
  },
  {
    value: 4,
    label: <FormattedMessage id={"insurancetypes.medicalbenefit1"} />
  },
  {
    value: 5,
    label: <FormattedMessage id={"insurancetypes.medicalbenefit2"} />
  },
  {
    value: 6,
    label: <FormattedMessage id={"insurancetypes.salarytype2disorder"} />
  }
];

export const JobTypes = [
  {
    value: 1,
    label: <FormattedMessage id={"jobtypes.dentist"} />
  },
  {
    value: 2,
    label: <FormattedMessage id={"jobtypes.doctor"} />
  },
  {
    value: 3,
    label: <FormattedMessage id={"jobtypes.officemanager"} />
  },
  {
    value: 4,
    label: <FormattedMessage id={"jobtypes.dentalhygienist"} />
  },
  {
    value: 5,
    label: <FormattedMessage id={"jobtypes.nursesaide"} />
  },
  {
    value: 6,
    label: <FormattedMessage id={"jobtypes.coordinator"} />
  },
  {
    value: 7,
    label: <FormattedMessage id={"jobtypes.pharmacist"} />
  },
  {
    value: 8,
    label: <FormattedMessage id={"jobtypes.dentaltechnician"} />
  },
  {
    value: 9,
    label: <FormattedMessage id={"jobtypes.radiologist"} />
  },
  {
    value: 10,
    label: <FormattedMessage id={"jobtypes.nurse"} />
  },
  {
    value: 11,
    label: <FormattedMessage id={"jobtypes.general"} />
  }
];

export const PayBanks = [
  {
    value: 1,
    label: <FormattedMessage id={"banks.wrbank"} />
  },
  {
    value: 2,
    label: <FormattedMessage id={"banks.shbank"} />
  },
  {
    value: 3,
    label: <FormattedMessage id={"banks.kbbank"} />
  },
  {
    value: 4,
    label: <FormattedMessage id={"banks.ibkbank"} />
  }
];

export const Departments = [
  {
    value: 1,
    label: <FormattedMessage id={"departments.directorroom"} />
  },
  {
    value: 2,
    label: <FormattedMessage id={"departments.treatmentroom"} />
  },
  {
    value: 3,
    label: <FormattedMessage id={"departments.desk"} />
  },
  {
    value: 4,
    label: <FormattedMessage id={"departments.dentaltechnicianroom"} />
  }
];

export const Permissions = [
  {
    value: 1,
    label: <FormattedMessage id={"permissions.root"} />
  },
  {
    value: 2,
    label: <FormattedMessage id={"permissions.admin"} />
  },
  {
    value: 3,
    label: <FormattedMessage id={"permissions.user"} />
  }
];

export const WorkPatterns = [
  {
    value: 1,
    label: <FormattedMessage id={"workpatterns.fulltime"} />
  },
  {
    value: 2,
    label: <FormattedMessage id={"workpatterns.parttime"} />
  },
  {
    value: 3,
    label: <FormattedMessage id={"workpatterns.other"} />
  }
];
