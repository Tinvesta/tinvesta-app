import { IAutocompleteOption } from '@ui';

import { compareObjectsByValue } from '@utils';

import { EIndustrialSector } from '@enums';

import { IIndustrialSector } from '@interfaces';

const getIndustrialSectorLabel = (
  name: EIndustrialSector,
  translations: Record<string, string>,
) => {
  const helperObject = {
    [EIndustrialSector.WELLNESS_AND_BEAUTY]: translations.commonIndustrialSectorsWellnessAndBeauty,
    [EIndustrialSector.TRAVEL_AND_HOSPITALITY]:
      translations.commonIndustrialSectorsTravelAndHospitality,
    [EIndustrialSector.TELECOM]: translations.commonIndustrialSectorsTelecom,
    [EIndustrialSector.BIOTECHNOLOGY]: translations.commonIndustrialSectorsBiotechnology,
    [EIndustrialSector.ARTIFICIAL_INTELLIGENCE]:
      translations.commonIndustrialSectorsArtificialIntelligence,
    [EIndustrialSector.CLIMATE_TECH]: translations.commonIndustrialSectorsClimateTech,
    [EIndustrialSector.CLOUD_COMPUTING]: translations.commonIndustrialSectorsCloudComputing,
    [EIndustrialSector.DATA_ANALYTICS]: translations.commonIndustrialSectorsDataAnalytics,
    [EIndustrialSector.DELIVERY_SERVICES]: translations.commonIndustrialSectorsDeliveryServices,
    [EIndustrialSector.E_COMMERCE]: translations.commonIndustrialSectorsEcommerce,
    [EIndustrialSector.EDTECH]: translations.commonIndustrialSectorsEdtech,
    [EIndustrialSector.ELECTRONICS_AND_AUTOMATION]:
      translations.commonIndustrialSectorsElectronicsAndAutomation,
    [EIndustrialSector.ENERGY]: translations.commonIndustrialSectorsEnergy,
    [EIndustrialSector.ENVIRONMENT]: translations.commonIndustrialSectorsEnvironment,
    [EIndustrialSector.FINTECH]: translations.commonIndustrialSectorsFintech,
    [EIndustrialSector.HEALTHCARE_TECH]: translations.commonIndustrialSectorsHealthcareTech,
    [EIndustrialSector.INFRASTRUCTURE]: translations.commonIndustrialSectorsInfrastructure,
    [EIndustrialSector.JOBS_RECRUITMENT]: translations.commonIndustrialSectorsJobsRecruitment,
    [EIndustrialSector.LIVING_AND_FAMILY]: translations.commonIndustrialSectorsLivingAndFamily,
    [EIndustrialSector.MATERIALS]: translations.commonIndustrialSectorsMaterials,
    [EIndustrialSector.MEDIA_AND_ENTERTAINMENT]:
      translations.commonIndustrialSectorsMediaAndEntertainment,
    [EIndustrialSector.REAL_ESTATE]: translations.commonIndustrialSectorsRealEstate,
    [EIndustrialSector.SECURITY]: translations.commonIndustrialSectorsSecurity,
    [EIndustrialSector.SHARED_MOBILITY]: translations.commonIndustrialSectorsSharedMobility,
    [EIndustrialSector.SOCIAL]: translations.commonIndustrialSectorsSocial,
    [EIndustrialSector.SPORTS_AND_FASHION]: translations.commonIndustrialSectorsSportsAndFashion,
    [EIndustrialSector.TELECOM]: translations.commonIndustrialSectorsTelecom,
    [EIndustrialSector.TRAVEL_AND_HOSPITALITY]:
      translations.commonIndustrialSectorsTravelAndHospitality,
    [EIndustrialSector.WEB3]: translations.commonIndustrialSectorsWeb3,
  };

  return helperObject[name] || helperObject[EIndustrialSector.WEB3];
};

export const mapIndustrialSectorsToDropdownOptions = (
  industrialSectors: IIndustrialSector[],
  translations: Record<string, string>,
): IAutocompleteOption[] =>
  industrialSectors
    .map((_industrialSector) => ({
      value: _industrialSector.id,
      label: getIndustrialSectorLabel(_industrialSector.name, translations),
    }))
    .sort(compareObjectsByValue('label'));
