export type Language = 'en' | 'bn';

export type ApplianceType = 'ac' | 'washing_machine' | 'refrigerator';

export interface TroubleshootingItem {
  id: string;
  appliance: ApplianceType;
  applianceName: {
    en: string;
    bn: string;
  };
  problem: {
    en: string;
    bn: string;
  };
  causes: {
    en: string[];
    bn: string[];
  };
  solutions: {
    en: string[];
    bn: string[];
  };
  testingProcedure: {
    en: string;
    bn: string;
  };
  severity: 'basic' | 'intermediate' | 'advanced_electrical';
  safetyWarning?: {
    en: string;
    bn: string;
  };
  associatedParts: string[];
}

export interface TrainingSparePartItem {
  id: string;
  appliance: ApplianceType;
  name: {
    en: string;
    bn: string;
  };
  technicalCode: string;
  functionDesc: {
    en: string;
    bn: string;
  };
  commonProblem: {
    en: string;
    bn: string;
  };
  multimeterTestGuide: {
    en: string;
    bn: string;
  };
  categoryIcon: string;
}

export interface ExplodedLayer {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  role: {
    en: string;
    bn: string;
  };
  depth: number;
  color: string;
  specs: {
    en: string;
    bn: string;
  };
}

export interface Appliance3DModelData {
  id: ApplianceType;
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  layers: ExplodedLayer[];
  workingPrinciple: {
    en: string;
    bn: string;
  };
}

export interface TrainingCourseModule {
  id: string;
  code: string;
  title: {
    en: string;
    bn: string;
  };
  duration: {
    en: string;
    bn: string;
  };
  level: {
    en: string;
    bn: string;
  };
  topics: {
    en: string[];
    bn: string[];
  };
  practicalFocus: {
    en: string;
    bn: string;
  };
}
