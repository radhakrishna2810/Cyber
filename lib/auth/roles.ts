export const roles = [
  { value: 'citizen', label: 'Citizen', description: 'File complaints, upload evidence, and track case status.' },
  { value: 'investigator', label: 'Investigator', description: 'Manage assigned cases, evidence review, and escalations.' },
  { value: 'administrator', label: 'Administrator', description: 'Oversee users, permissions, audit logs, and analytics.' },
] as const;

export type RoleValue = (typeof roles)[number]['value'];
