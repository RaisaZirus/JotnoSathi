export const API = 'https://jotnosathi-b.onrender.com'
//export const API = 'http://127.0.0.1:8000'
// export const API = 'http://10.67.136.45:8000' // hotspot — uncomment for demo

export const DIVISIONS = [
  'Barishal', 'Chattogram', 'Dhaka', 'Khulna',
  'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet',
]

export const DISEASE_FIELDS = {
  dengue: {
    color: '#e65100',
    icon: '🦟',
    report_type: 'outbreak',
    label: 'Dengue — feeds risk map',
    fields: [
      { id: 'fever_days',   label: 'Days of fever',   type: 'number', placeholder: 'e.g. 4', min: 1, max: 14 },
      { id: 'rash_present', label: 'Rash present?',   type: 'select', options: [['', 'Select...'], ['true', 'Yes'], ['false', 'No']] },
      { id: 'bleeding',     label: 'Bleeding signs?', type: 'select', options: [['', 'Select...'], ['true', 'Yes — gums/nose'], ['false', 'No']] },
    ],
  },
  measles: {
    color: '#c62828',
    icon: '🔴',
    report_type: 'outbreak',
    label: 'Measles — feeds risk map (ACTIVE OUTBREAK 2026)',
    fields: [
      { id: 'fever_days',         label: 'Days of fever',      type: 'number', placeholder: 'e.g. 3', min: 1, max: 14 },
      { id: 'rash_present',       label: 'Rash present?',      type: 'select', options: [['', 'Select...'], ['true', 'Yes'], ['false', 'No']] },
      { id: 'vaccination_status', label: 'Vaccination status', type: 'select', options: [['', 'Select...'], ['unvaccinated', 'Unvaccinated'], ['vaccinated', 'Vaccinated'], ['partial', 'Partially vaccinated'], ['unknown', 'Unknown']] },
    ],
  },
  maternal: {
    color: '#7b1fa2',
    icon: '🤰',
    report_type: 'registry',
    label: 'Maternal — adds to case registry',
    fields: [
      { id: 'week',              label: 'Gestational week',  type: 'number', placeholder: 'e.g. 28', min: 1, max: 42 },
      { id: 'complication_type', label: 'Complication type', type: 'select', options: [['', 'Select...'], ['bleeding', 'Bleeding'], ['hypertension', 'Hypertension / Pre-eclampsia'], ['no_fetal_movement', 'No fetal movement'], ['preterm_labour', 'Preterm labour'], ['other', 'Other']] },
    ],
  },
  diabetes: {
    color: '#1565c0',
    icon: '🩸',
    report_type: 'registry',
    label: 'Diabetes — adds to case registry',
    fields: [
      { id: 'fasting_glucose', label: 'Fasting glucose (mmol/L)', type: 'number', placeholder: 'e.g. 7.2', step: '0.1' },
      { id: 'hba1c',           label: 'HbA1c % (if available)',   type: 'number', placeholder: 'e.g. 6.8', step: '0.1' },
    ],
  },
  bp: {
    color: '#00695c',
    icon: '💊',
    report_type: 'registry',
    label: 'Blood Pressure — adds to case registry',
    fields: [
      { id: 'systolic',  label: 'Systolic (mmHg)',  type: 'number', placeholder: 'e.g. 145', min: 60, max: 250 },
      { id: 'diastolic', label: 'Diastolic (mmHg)', type: 'number', placeholder: 'e.g. 95',  min: 40, max: 150 },
    ],
  },
}

export const LEVEL_COLORS = {
  CRITICAL: '#c62828',
  HIGH:     '#e65100',
  MODERATE: '#f57f17',
  LOW:      '#2e7d32',
}

export const REFERRAL_FACILITIES = [
  { name: 'Dhaka Medical College Hospital',  lat: 23.7261, lng: 90.3961, type: 'tertiary' },
  { name: 'Sir Salimullah Medical College',  lat: 23.7099, lng: 90.4072, type: 'tertiary' },
  { name: 'Gazipur Sadar Hospital',          lat: 23.9999, lng: 90.4203, type: 'district' },
  { name: 'Narayanganj District Hospital',   lat: 23.6238, lng: 90.4998, type: 'district' },
  { name: 'Manikganj District Hospital',     lat: 23.8634, lng: 89.9816, type: 'district' },
  { name: 'Munshiganj District Hospital',    lat: 23.5423, lng: 90.5302, type: 'district' },
  { name: 'Narsingdi District Hospital',     lat: 23.9215, lng: 90.7152, type: 'district' },
  { name: 'Tangail District Hospital',       lat: 24.2512, lng: 89.9167, type: 'district' },
  { name: 'Chittagong Medical College',      lat: 22.3569, lng: 91.8313, type: 'tertiary' },
  { name: "Cox's Bazar District Hospital",   lat: 21.4272, lng: 92.0058, type: 'district' },
  { name: 'Cumilla District Hospital',       lat: 23.4607, lng: 91.1809, type: 'district' },
  { name: 'Feni District Hospital',          lat: 23.0159, lng: 91.3976, type: 'district' },
  { name: 'Sylhet MAG Osmani Hospital',      lat: 24.8949, lng: 91.8687, type: 'tertiary' },
  { name: 'Sunamganj District Hospital',     lat: 24.8815, lng: 91.3968, type: 'district' },
  { name: 'Moulvibazar District Hospital',   lat: 24.4826, lng: 91.7774, type: 'district' },
  { name: 'Rajshahi Medical College',        lat: 24.3745, lng: 88.6042, type: 'tertiary' },
  { name: 'Bogura District Hospital',        lat: 24.8465, lng: 89.3773, type: 'district' },
  { name: 'Pabna District Hospital',         lat: 24.0064, lng: 89.2372, type: 'district' },
  { name: 'Rangpur Medical College',         lat: 25.7439, lng: 89.2752, type: 'tertiary' },
  { name: 'Dinajpur District Hospital',      lat: 25.6217, lng: 88.6354, type: 'district' },
  { name: 'Kurigram District Hospital',      lat: 25.8073, lng: 89.6364, type: 'district' },
  { name: 'Mymensingh Medical College',      lat: 24.7471, lng: 90.4203, type: 'tertiary' },
  { name: 'Netrokona District Hospital',     lat: 24.8703, lng: 90.7279, type: 'district' },
  { name: 'Jamalpur District Hospital',      lat: 24.9375, lng: 89.9371, type: 'district' },
  { name: 'Khulna Medical College',          lat: 22.8456, lng: 89.5403, type: 'tertiary' },
  { name: 'Jashore District Hospital',       lat: 23.1664, lng: 89.2081, type: 'district' },
  { name: 'Satkhira District Hospital',      lat: 22.7185, lng: 89.0705, type: 'district' },
  { name: 'Sher-E-Bangla Medical College',   lat: 22.7010, lng: 90.3696, type: 'tertiary' },
  { name: 'Patuakhali District Hospital',    lat: 22.3596, lng: 90.3296, type: 'district' },
  { name: 'Bhola District Hospital',         lat: 22.6860, lng: 90.6481, type: 'district' },
]
