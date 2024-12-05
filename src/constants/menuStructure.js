export const MENU_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: 'Dashboard'
  },
  {
    id: 'tegningsregler',
    label: 'Tegningsregler',
    path: '/tegningsregler',
    icon: 'Gavel'
  },
  {
    id: 'calculators',
    label: 'Kalkulatorer',
    icon: 'Calculate',
    subItems: [
      {
        id: 'auto',
        label: 'Auto',
        path: '/calculators/auto'
      },
      {
        id: 'trailer',
        label: 'Tilhenger',
        path: '/calculators/trailer'
      },
      {
        id: 'warranty',
        label: 'Garanti',
        path: '/calculators/warranty'
      }
    ]
  },
  {
    id: 'tools',
    label: 'Verktøy',
    icon: 'Build',
    subItems: [
      {
        id: 'sales-tools',
        label: 'Salgsverktøy',
        path: '/tools/sales'
      },
      {
        id: 'claims-tools',
        label: 'Skadeverktøy',
        path: '/tools/claims'
      },
      {
        id: 'warranty-tools',
        label: 'Garantiverktøy',
        path: '/tools/warranty'
      }
    ]
  },
  {
    id: 'documentation',
    label: 'Dokumentasjon',
    icon: 'Description',
    subItems: [
      {
        id: 'user-manuals',
        label: 'Brukermanualer',
        path: '/docs/manuals'
      },
      {
        id: 'report-docs',
        label: 'Rapportbeskrivelser',
        path: '/docs/reports'
      },
      {
        id: 'api-docs',
        label: 'API Dokumentasjon',
        path: '/docs/api'
      }
    ]
  },
  {
    id: 'reports',
    label: 'Rapporter',
    icon: 'Assessment',
    subItems: [
      {
        id: 'sales-reports',
        label: 'Salgsrapporter',
        path: '/reports/sales'
      },
      {
        id: 'claims-reports',
        label: 'Skaderapporter',
        path: '/reports/claims'
      },
      {
        id: 'warranty-reports',
        label: 'Garantirapporter',
        path: '/reports/warranty'
      }
    ]
  }
]; 