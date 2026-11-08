import type { Label } from '../i18n';

export interface NavChild {
  label: Label;
  path: string;
}

export interface NavItem {
  label: Label;
  path: string;
  children?: NavChild[];
}

/**
 * Primary navigation. Structure only: no page content is claimed to be official.
 * Every path is routed; pages not yet built render the shared "In development" page.
 */
export const NAV: NavItem[] = [
  { label: { en: 'Home', bn: 'হোম' }, path: '/' },
  {
    label: { en: 'About the Board', bn: 'বোর্ড পরিচিতি' },
    path: '/about',
    children: [
      { label: { en: 'History' }, path: '/about/history' },
      { label: { en: 'Mission and vision' }, path: '/about/mission' },
      { label: { en: 'Organisational structure' }, path: '/about/structure' },
      { label: { en: 'Chairman and officials' }, path: '/about/officials' },
      { label: { en: 'Departments' }, path: '/about/departments' },
    ],
  },
  { label: { en: 'Academics', bn: 'একাডেমিক' }, path: '/academics' },
  {
    label: { en: 'Examinations', bn: 'পরীক্ষা' },
    path: '/examinations',
    children: [
      { label: { en: 'SSC' }, path: '/examinations/ssc' },
      { label: { en: 'HSC' }, path: '/examinations/hsc' },
      { label: { en: 'Equivalent examinations' }, path: '/examinations/equivalent' },
      { label: { en: 'Routines' }, path: '/examinations/routines' },
      { label: { en: 'Registration' }, path: '/examinations/registration' },
      { label: { en: 'Form fill-up' }, path: '/examinations/form-fillup' },
      { label: { en: 'Admit card' }, path: '/examinations/admit-card' },
      { label: { en: 'Examination centres' }, path: '/examinations/centres' },
      { label: { en: 'Re-scrutiny' }, path: '/examinations/re-scrutiny' },
    ],
  },
  {
    label: { en: 'Results', bn: 'ফলাফল' },
    path: '/results',
    children: [
      { label: { en: 'Individual result' }, path: '/results/individual' },
      { label: { en: 'Institution-wise result' }, path: '/results/institution' },
      { label: { en: 'Result archive' }, path: '/results/archive' },
      { label: { en: 'Result verification' }, path: '/results/verification' },
    ],
  },
  { label: { en: 'Institutions', bn: 'শিক্ষা প্রতিষ্ঠান' }, path: '/institutions' },
  { label: { en: 'Students', bn: 'শিক্ষার্থী' }, path: '/students' },
  { label: { en: 'Teachers', bn: 'শিক্ষক' }, path: '/teachers' },
  {
    label: { en: 'Online Services', bn: 'অনলাইন সেবা' },
    path: '/services',
    children: [
      { label: { en: 'e-TC' }, path: '/services/e-tc' },
      { label: { en: 'e-SIF' }, path: '/services/e-sif' },
      { label: { en: 'e-FF' }, path: '/services/e-ff' },
      { label: { en: 'Certificates and transcripts' }, path: '/services/certificates' },
      { label: { en: 'Corrections' }, path: '/services/corrections' },
      { label: { en: 'Application tracking' }, path: '/services/tracking' },
    ],
  },
  { label: { en: 'Notices', bn: 'নোটিশ' }, path: '/notices' },
  { label: { en: 'Publications', bn: 'প্রকাশনা' }, path: '/publications' },
  { label: { en: 'Downloads', bn: 'ডাউনলোড' }, path: '/downloads' },
  { label: { en: 'Contact', bn: 'যোগাযোগ' }, path: '/contact' },
];
