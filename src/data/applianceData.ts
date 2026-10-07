import { TroubleshootingItem, TrainingSparePartItem, Appliance3DModelData, TrainingCourseModule } from '../types';

export const appliance3DData: Appliance3DModelData[] = [
  {
    id: 'ac',
    title: {
      en: 'Split Inverter Air Conditioner System',
      bn: 'স্প্লিট ইনভার্টার এয়ার কন্ডিশনার সিস্টেম',
    },
    subtitle: {
      en: 'Thermodynamic Phase-Change Cycle & BLDC Inverter Control',
      bn: 'থার্মোডাইনামিক ফেজ-চেঞ্জ সাইকেল ও বিএলডিসি ইনভার্টার কন্ট্রোল',
    },
    workingPrinciple: {
      en: 'High-pressure refrigerant gas is compressed by the inverter rotary compressor, condensed into liquid in outdoor coils, depressurized via electronic expansion valve, and evaporated inside room coils to absorb latent heat.',
      bn: 'ইনভার্টার রোটারি কম্প্রেসার গ্যাসকে উচ্চ চাপে সংকুচিত করে, আউটডোরে তরলে রূপান্তরিত করে, এক্সপানশন ভালভ দিয়ে প্রেসার ড্রপ ঘটিয়ে ইনডোরে তীব্র ঠান্ডা সৃষ্টি করে ঘরের তাপ শোষণ করে।',
    },
    layers: [
      {
        id: 'ac-l1',
        name: { en: '1. Aerodynamic Front Fascia & Auto-Swing Louver', bn: '১. এরোডাইনামিক ফ্রন্ট প্যানেল ও সুইং ল্যুভার' },
        role: { en: 'Directs conditioned laminar airflow across 120-degree room angles.', bn: 'ঘরের বিভিন্ন কোণে সুষমভাবে ঠান্ডা বাতাস প্রবাহ নিশ্চিত করে।' },
        depth: 0,
        color: '#06b6d4',
        specs: { en: 'ABS Virgin Polymer, Stepper Motor Actuated', bn: 'এবিএস ভার্জিন পলিমার, স্টেপার মোটর চালিত' },
      },
      {
        id: 'ac-l2',
        name: { en: '2. High-Density Micro-Mesh Dust Filter', bn: '২. হাই-ডেনসিটি মাইক্রো-মেশ ডাস্ট ফিল্টার' },
        role: { en: 'Traps airborne dust particles to protect internal evaporator fins from clogging.', bn: 'বাতাসের ধুলোবালি আটকে ইনডোর কুলিং ফিন জ্যাম হওয়া রোধ করে।' },
        depth: 1,
        color: '#38bdf8',
        specs: { en: 'Washable Polypropylene Mesh (200 Micron)', bn: 'ওয়াশেবল পলিপ্রোপিলিন নেট (২০০ মাইক্রন)' },
      },
      {
        id: 'ac-l3',
        name: { en: '3. Hydrophilic Blue-Fin Copper Evaporator Coil', bn: '৩. হাইড্রোফিলিক ব্লু-ফিন কপার ইভাপোরেটর কয়েল' },
        role: { en: 'Facilitates fast heat exchange between room air and boiling refrigerant (R32 / R410A).', bn: 'ঘরের গরম বাতাস থেকে দ্রুত তাপ শোষণ করে গ্যাসে স্থানান্তর করে।' },
        depth: 2,
        color: '#0284c7',
        specs: { en: 'Inner Grooved Copper Tubes, Anti-Corrosion Foil', bn: 'ইনার গ্রুভড কপার টিউব, অ্যান্টি-করোশন ফিন্স' },
      },
      {
        id: 'ac-l4',
        name: { en: '4. Dynamic Cross-Flow Tangential Blower Fan', bn: '৪. ডায়নামিক ক্রস-ফ্লো ট্যাঞ্জেনশিয়াল ব্লোয়ার ফ্যান' },
        role: { en: 'Pulls air across cold fins and discharges up to 850 m³/h quiet airflow.', bn: 'নীরবে প্রতি ঘণ্টায় ৮৫০ কিউবিক মিটার ঠান্ডা বাতাস ঘরে প্রবাহিত করে।' },
        depth: 3,
        color: '#2563eb',
        specs: { en: 'Dynamically Balanced Cylinder, 350-1300 RPM', bn: 'ডায়নামিক্যালি ব্যালেন্সড সিলিন্ডার, ৩৫০-১৩০০ আরপিএম' },
      },
      {
        id: 'ac-l5',
        name: { en: '5. Intelligent Inverter IPM Power Driver PCB', bn: '৫. ইন্টেলিজেন্ট ইনভার্টার আইপিএম কন্ট্রোল মাদারবোর্ড' },
        role: { en: 'Synthesizes 3-phase variable AC frequency to regulate compressor speed precisely.', bn: 'কম্প্রেসারের গতি ও কুলিং লোড অনুযায়ী ভোল্টেজ ও ফ্রিকোয়েন্সি নিয়ন্ত্রণ করে।' },
        depth: 4,
        color: '#6366f1',
        specs: { en: 'IGBT Inverter Bridge, Dual Microcontroller, 600V Surge Varistor', bn: 'আইজিবিটি ইনভার্টার ব্রিজ, ডুয়াল এমসিইউ, ৬০০ভি সার্জ প্রটেকশন' },
      },
      {
        id: 'ac-l6',
        name: { en: '6. Hermetic Twin-Rotary BLDC Compressor', bn: '৬. হার্মেটিক টুইন-রোটারি বিএলডিসি কম্প্রেসার' },
        role: { en: 'Pumps and pressurizes refrigerant gas through high/low pressure refrigeration stages.', bn: 'পুরো কুলিং সার্কিটে গ্যাসকে উচ্চ চাপে পাম্প ও সঞ্চালিত করে।' },
        depth: 5,
        color: '#4f46e5',
        specs: { en: 'Rare-Earth Neodymium Magnet Rotor, 15Hz to 120Hz', bn: 'নিওডিমিয়াম ম্যাগনেট রটার, ১৫Hz থেকে ১২০Hz ফ্রিকোয়েন্সি' },
      },
    ],
  },
  {
    id: 'washing_machine',
    title: {
      en: 'Front & Top Load Washing Machine System',
      bn: 'ফ্রন্ট ও টপ লোড ওয়াশিং মেশিন সিস্টেম',
    },
    subtitle: {
      en: 'Rotational Torque, Centrifugal Dewatering & Water Control',
      bn: 'ঘূর্ণন টর্ক, সেন্ট্রিফিউগাল স্পিন ও ওয়াটার কন্ট্রোল মেকানিজম',
    },
    workingPrinciple: {
      en: 'Microcontroller directs dual solenoid valves to meter water, agitates laundry via variable-speed inverter motor, and extracts 90% water during high-speed 1200+ RPM centrifugal spin.',
      bn: 'মাইক্রোকন্ট্রোলার পানির লেভেল মেপে মোটর দিয়ে উল্টো-পাল্টা ঘুর্ণন তৈরি করে ময়লা পরিষ্কার করে এবং পরে ১২০০+ আরপিএম গতিতে সেন্ট্রিফিউগাল স্পিনের মাধ্যমে পানি নিংড়ে নেয়।',
    },
    layers: [
      {
        id: 'wm-l1',
        name: { en: '1. Anti-Vibration Heavy Steel Cabinet & Door Lock', bn: '১. অ্যান্টি-ভাইব্রেশন স্টিল ক্যাবিনেট ও ইলেকট্রনিক ডোর লক' },
        role: { en: 'Provides rigid chassis dampening and protects users with electronic safety lock.', bn: 'মেশিনের বডি মজবুত রাখে এবং চলার সময় দরজা নিরাপদভাবে লক রাখে।' },
        depth: 0,
        color: '#06b6d4',
        specs: { en: 'Galvanized Sheet Metal, PTC Wax Thermal Actuator', bn: 'গ্যালভানাইজড মেটাল শিট, পিটিসি থার্মাল ল্যাচ' },
      },
      {
        id: 'wm-l2',
        name: { en: '2. Stainless Steel Diamond Drum & Baffles', bn: '২. স্টেইনলেস স্টিল ডায়মন্ড ড্রাম ও লিফটার' },
        role: { en: 'Tumbles fabrics gently through soapy water during washing and spinning.', bn: 'কাপড়কে সাবান পানির সাথে ওপর-নিচ তুলে ঘর্ষণের মাধ্যমে নিখুঁত ওয়াশ করে।' },
        depth: 1,
        color: '#38bdf8',
        specs: { en: 'Grade 304 Stainless Steel, Embossed Drain Holes', bn: 'গ্রেড ৩০৪ স্টেইনলেস স্টিল, ড্রেন হোল প্যাটার্ন' },
      },
      {
        id: 'wm-l3',
        name: { en: '3. Tri-Arm Cast Spider Bracket & Double Bearings', bn: '৩. ট্রাই-আর্ম কাস্ট স্পাইডার ও ডাবল বিয়ারিং কিট' },
        role: { en: 'Couples inner drum to main motor spindle, enduring up to 80kg wet centrifugal load.', bn: 'ভেতরের ড্রামকে শ্যাফটের সাথে শক্তভাবে ধরে রেখে মসৃণ ঘূর্ণন দেয়।' },
        depth: 2,
        color: '#0284c7',
        specs: { en: 'Die-cast Aluminum Alloy, 6205/6206 ZZ Ball Bearings', bn: 'ডাই-কাস্ট অ্যালুমিনিয়াম অ্যালয়, ওয়াটারপ্রুফ অয়েল সিল' },
      },
      {
        id: 'wm-l4',
        name: { en: '4. Hydraulic Friction Dampers & Suspension Springs', bn: '৪. হাইড্রোলিক ফ্রিকশন ড্যাম্পার ও সাসপেনশন স্প্রিং' },
        role: { en: 'Absorbs radical centrifugal oscillations, preventing the machine from walking.', bn: 'স্পিনের তীব্র কাঁপুনি শোষণ করে মেশিনকে মেঝের সাথে স্থির রাখে।' },
        depth: 3,
        color: '#2563eb',
        specs: { en: '100N - 120N Hydraulic Resistance, High-Tensile Springs', bn: '১০০-১২০ নিউটন হাইড্রোলিক রেজিস্ট্যান্স' },
      },
      {
        id: 'wm-l5',
        name: { en: '5. Direct Drive (DD) Inverter BLDC Motor', bn: '৫. ডাইরেক্ট ড্রাইভ (DD) ইনভার্টার বিএলডিসি মোটর' },
        role: { en: 'Directly spins drum without belt slip, offering pulse agitation and silent 1400 RPM.', bn: 'বেল্ট ছাড়া সরাসরি ড্রাম ঘুরিয়ে সর্বোচ্চ শক্তি ও নিঃশব্দ গতি দেয়।' },
        depth: 4,
        color: '#6366f1',
        specs: { en: '36-Pole Stator, Hall Effect RPM Sensor', bn: '৩৬-পোল স্টেটর, হল ইফেক্ট আরপিএম সেন্সর' },
      },
      {
        id: 'wm-l6',
        name: { en: '6. High-Flow Magnetic Drain Pump & Coin Trap', bn: '৬. হাই-ফ্লো ম্যাগনেটিক ড্রেন পাম্প ও কয়েন ট্র্যাপ' },
        role: { en: 'Expels greywater at 35 liters/minute and traps pins, lint, and loose coins.', bn: 'মিনিটে ৩৫ লিটার পানি বাইরে ফেলে এবং কয়েন ও ময়লা আটকে রাখে।' },
        depth: 5,
        color: '#4f46e5',
        specs: { en: '40W Synchronous Motor, Non-Clogging Impeller', bn: '৪০ ওয়াট সিঙ্ক্রোনাস মোটর, থ্রেডেড ফিল্টার' },
      },
    ],
  },
  {
    id: 'refrigerator',
    title: {
      en: 'No-Frost Dual Thermal Zone Refrigerator',
      bn: 'নো-ফ্রস্ট ডুয়াল থার্মাল জোন রেফ্রিজারেটর',
    },
    subtitle: {
      en: 'Vapor Compression & Automatic Defrost Circuitry',
      bn: 'ভেপার কম্প্রেশন ও অটোমেটিক ডিফ্রস্ট সাইকেল মেকানিজম',
    },
    workingPrinciple: {
      en: 'Compressor circulates R600a eco-gas. A hidden evaporator coil creates sub-zero freeze air, an electric fan blows it through multi-flow ducts, and a bimetal-triggered heater thaws frost every 8 hours.',
      bn: 'কম্প্রেসার R600a গ্যাস সার্কুলেট করে। পেছনের কয়েলে বরফ বাতাস তৈরি হয় যা ফ্যানের মাধ্যমে সব চেম্বারে ছড়ায় এবং প্রতি ৮ ঘণ্টা পর পর ডিফ্রস্ট হিটার বরফ গলিয়ে ফেলে।',
    },
    layers: [
      {
        id: 'ref-l1',
        name: { en: '1. Multi-Chamber Magnetic Gasket & PCM Door', bn: '১. মাল্টি-চেম্বার ম্যাগনেটিক গ্যাসকেট ও ডোর সিল' },
        role: { en: 'Hermetically locks freezing air inside and repels ambient moist room humidity.', bn: 'বায়ুরোধক ম্যাগনেটিক সিল দিয়ে বাইরের গরম বাতাস ভেতরে ঢোকা বন্ধ করে।' },
        depth: 0,
        color: '#06b6d4',
        specs: { en: 'Virgin Flexible PVC, Barium Ferrite Magnetic Core', bn: 'ফ্লেক্সিবল পিভিসি, বেরিয়াম ফেরাইট ম্যাগনেটিক স্ট্রিপ' },
      },
      {
        id: 'ref-l2',
        name: { en: '2. Multi-Airflow Duct & Rotary Damper Flap', bn: '২. মাল্টি-এয়ারফ্লো ডাক্ট ও মেকানিক্যাল ড্যাম্পার' },
        role: { en: 'Directs modulated proportion of sub-zero air into fresh food zone.', bn: 'ডিপ থেকে প্রয়োজনমতো নিয়ন্ত্রিত ঠান্ডা বাতাস নরমাল চেম্বারে পাঠায়।' },
        depth: 1,
        color: '#38bdf8',
        specs: { en: 'Molded Polystyrene Foam, Thermo-Bellows Actuator', bn: 'পলিস্টাইরিন ফোম ডাক্ট, অটো মেকানিক্যাল গেট' },
      },
      {
        id: 'ref-l3',
        name: { en: '3. Concealed Aluminum Fin Evaporator Spine', bn: '৩. কনসিলড অ্যালুমিনিয়াম ফিন ইভাপোরেটর স্পাইন' },
        role: { en: 'Refrigerant boiling reservoir dropping surface temperatures down to -25°C.', bn: 'গ্যাস বাষ্পীভূত হয়ে মাইনাস ২৫ ডিগ্রি পর্যন্ত তীব্র শৈত্য সৃষ্টি করে।' },
        depth: 2,
        color: '#0284c7',
        specs: { en: 'Aluminum Tube-Fin Matrix, Molded Return U-Bends', bn: 'অ্যালুমিনিয়াম টিউব-ফিন ম্যাট্রিক্স' },
      },
      {
        id: 'ref-l4',
        name: { en: '4. Bimetal Defrost Thermostat & Glass Quartz Heater', bn: '৪. বাইমেটাল ডিফ্রস্ট থার্মোস্ট্যাট ও কোয়ার্টজ গ্লাস হিটার' },
        role: { en: 'Automatically terminates ice accumulation to prevent air duct choking.', bn: 'কয়েলে অতিরিক্ত বরফ জমলে হিটার অন করে বরফ পানি বানিয়ে ড্রেনে ফেলে দেয়।' },
        depth: 3,
        color: '#2563eb',
        specs: { en: 'Snap-Action Bimetallic Disc (-5°C / +10°C), 160W Nichrome Element', bn: 'বাইমেটালিক ডিস্ক (-৫°C / +১০°C), ১৬০ ওয়াট নাইক্রোম হিটার' },
      },
      {
        id: 'ref-l5',
        name: { en: '5. Ultra-Low Temperature Evaporator Circulation Fan', bn: '৫. আল্ট্রা-লো টেম্পারেচার ইভাপোরেটর ফ্যান মোটর' },
        role: { en: 'Blows dry freezing air continuously across shelves and crisper drawers.', bn: 'সব তাকে ও ডিপের কোণায় সমহারে মাইনাস ডিগ্রি বাতাস পৌঁছে দেয়।' },
        depth: 4,
        color: '#6366f1',
        specs: { en: '12V DC Brushless or 220V Shaded Pole, Synthetic Cryo-Grease', bn: '১২ভি ডিসি মোটর, ক্রায়োজেনিক লুব্রিকেটেড বিয়ারিং' },
      },
      {
        id: 'ref-l6',
        name: { en: '6. High-COP Reciprocating / Inverter Compressor & PTC Relay', bn: '৬. হাই-সিওপি রেসিপ্রোকেটিং কম্প্রেসার ও পিটিসি স্টার্টার' },
        role: { en: 'Circulates Isobutane (R600a) / R134a safely with minimal power draw.', bn: 'পরিবেশবান্ধব গ্যাসে নিঃশব্দে কুলিং সাইকেল পরিচালনা করে বিদ্যুৎ বাঁচায়।' },
        depth: 5,
        color: '#4f46e5',
        specs: { en: 'Ceramic PTC Starter Disc, Overload Protector (OLP), 1/5 to 1/3 HP', bn: 'সিরামিক পিটিসি রিলে, থার্মাল ওএলপি, ১/৫ থেকে ১/৩ এইচপি' },
      },
    ],
  },
];

export const trainingSparePartsData: TrainingSparePartItem[] = [
  // --- AC TRAINING PARTS ---
  {
    id: 'part-ac-1',
    appliance: 'ac',
    name: {
      en: 'Dual Run Capacitor (35+5 µF / 50+5 µF)',
      bn: 'ডুয়াল রান ক্যাপাসিটর (৩৫+৫ µF / ৫০+৫ µF)',
    },
    technicalCode: 'CAP-AC-450VAC',
    functionDesc: {
      en: 'Generates a 90-degree electrical phase shift to power the auxiliary starting winding and maintain continuous torque for the compressor and fan motor.',
      bn: 'কম্প্রেসার ও আউটডোর ফ্যান মোটরের স্টার্ট ওয়াইন্ডিংয়ে ৯০ ডিগ্রি ফেজ শিফট তৈরি করে শক্তিশালী ঘূর্ণন শুরু ও বজায় রাখে।',
    },
    commonProblem: {
      en: 'Electrolytic fluid leakage, internal bulge/swelling, capacitance drops below 10% of rated value, compressor buzzes loudly without starting and trips circuit breaker.',
      bn: 'ক্যাপাসিটর ফুলে যাওয়া বা তেল বের হওয়া, নির্ধারিত মানের চেয়ে মান কমে যাওয়া, কম্প্রেসার স্টার্ট না নিয়ে গোঁ-গোঁ শব্দ করে ট্রিপ করা।',
    },
    multimeterTestGuide: {
      en: 'Discharge capacitor safely using 20kΩ 5W resistor. Switch digital multimeter to Capacitance (µF) mode. Probe C to HERM (should read ±5% of rated value, e.g., 35µF). Probe C to FAN (e.g., 5µF). If reading is "OL" or below tolerance, component is damaged.',
      bn: 'প্রথমে রেজিস্টর দিয়ে ডিসচার্জ করুন। মাল্টিমিটার ক্যাপাসিট্যান্স (µF) মোডে দিন। C ও HERM পিনে ধরুন (৩৫µF আসা উচিত)। C ও FAN পিনে ৫µF আসা উচিত। মান ০ বা কম আসলে পার্টস নষ্ট।',
    },
    categoryIcon: 'Zap',
  },
  {
    id: 'part-ac-2',
    appliance: 'ac',
    name: {
      en: 'Rotary Inverter Compressor',
      bn: 'রোটারি ইনভার্টার কম্প্রেসার',
    },
    technicalCode: 'CMP-BLDC-INV',
    functionDesc: {
      en: 'Compresses low-pressure vapor refrigerant into high-temperature, high-pressure superheated gas to drive the thermodynamic heat transfer loop.',
      bn: 'লো-প্রেসার গ্যাস টেনে নিয়ে উচ্চ চাপ ও তাপমাত্রার গ্যাসে রূপান্তরিত করে পুরো কুলিং সাইকেলে সঞ্চালিত করে।',
    },
    commonProblem: {
      en: 'Internal mechanical lockup (Locked Rotor Amps - LRA), burnt motor winding insulation, grounding short circuit, worn discharge valve causing poor compression ratio.',
      bn: 'মেকানিক্যাল জ্যাম (এলআরএ), মোটরের ওয়াইন্ডিং শর্ট বা বডি হয়ে যাওয়া, পিস্টন ক্ষয়ে গিয়ে গ্যাস পাম্প করার প্রেসার কমে যাওয়া।',
    },
    multimeterTestGuide: {
      en: 'Disconnect power. Set meter to Resistance (Ω) mode. Measure resistance across the 3 terminals (U-V, V-W, W-U for 3-phase inverter). All 3 winding readings must be strictly equal (typically 1.2Ω - 3.8Ω). Test each terminal to copper body for grounding continuity (must be infinite "OL").',
      bn: 'পাওয়ার বিচ্ছিন্ন করে ৩টি টার্মিনালের ওহম (Ω) মাপুন (U-V, V-W, W-U)। ইনভার্টারের ক্ষেত্রে ৩টি ওয়াইন্ডিংয়ের মান হুবহু সমান হতে হবে। বডির সাথে মেপে দেখুন "OL" বা ইনফিনিটি দেখাচ্ছে কিনা।',
    },
    categoryIcon: 'Cpu',
  },
  {
    id: 'part-ac-3',
    appliance: 'ac',
    name: {
      en: 'Thermostatic Expansion Valve (TXV) & Capillary Tube',
      bn: 'থার্মোস্ট্যাটিক এক্সপানশন ভালভ ও ক্যাপিলারি টিউব',
    },
    technicalCode: 'TXV-REF-LINE',
    functionDesc: {
      en: 'Throttles high-pressure liquid refrigerant down to low-pressure subcooled spray before entering the cooling coil, enabling rapid boiling and heat absorption.',
      bn: 'উচ্চ চাপের তরল গ্যাসকে নিয়ন্ত্রণ করে নিম্ন চাপে স্প্রে আকারে ইভাপোরেটর কয়েলে পাঠায়, যার ফলে নিমেষে তীব্র ঠান্ডা সৃষ্টি হয়।',
    },
    commonProblem: {
      en: 'Moisture freeze-up inside orifice (ice choke), copper tube oil sludge clog, stuck needle valve causing indoor coil starvation or freezing copper lines.',
      bn: 'টিউবের মুখে বরফ বা তেলের ময়লা জমে জ্যাম হওয়া (চোকিং), কপার পাইপে অস্বাভাবিক বরফ জমা এবং কুলিং বন্ধ হওয়া।',
    },
    multimeterTestGuide: {
      en: 'Mechanical component: Test using manifold pressure gauges and digital thermometer. Measure superheat across evaporator outlet: normal superheat is 5°C - 8°C. If suction pressure is near vacuum and discharge pressure spikes, capillary line is choked.',
      bn: 'গেজ মিটার দিয়ে সাকশন প্রেসার মাপুন। প্রেসার যদি জিরো বা ভ্যাকুয়ামের দিকে চলে যায় এবং কয়েল ঠান্ডা না হয়, তবে ক্যাপিলারি সম্পূর্ণ জ্যাম।',
    },
    categoryIcon: 'Activity',
  },
  {
    id: 'part-ac-4',
    appliance: 'ac',
    name: {
      en: 'Indoor Cross-Flow Blower Fan Motor',
      bn: 'ইনডোর ক্রস-ফ্লো ব্লোয়ার ফ্যান মোটর',
    },
    technicalCode: 'MTR-BLW-DC',
    functionDesc: {
      en: 'Rotates the cylindrical cross-flow impeller quietly to draw room air over cold evaporator fins and distribute conditioned airflow.',
      bn: 'লম্বা ক্রস-ফ্লো ব্লোয়ার ঘুরিয়ে ফিল্টার ও কয়েল ভেদ করে ঘরে সমানভাবে ঠান্ডা বাতাস ছড়িয়ে দেয়।',
    },
    commonProblem: {
      en: 'Burnt stator windings, dried ball bearings generating screeching noise, faulty Hall-effect RPM feedback sensor causing indoor unit to beep and shut off (E6 / F6 error).',
      bn: 'কয়েল পুড়ে যাওয়া, বিয়ারিং শুকিয়ে তীব্র শব্দ হওয়া, হল সেন্সর নষ্ট হয়ে এসি কিছুক্ষণ চলেই E6/F6 এরর কোড দিয়ে বন্ধ হওয়া।',
    },
    multimeterTestGuide: {
      en: 'Inspect connector pins: Vm (DC 310V power), Vcc (DC 15V logic), Vsp (0-6.5V speed control), and FG (RPM pulses). Rotate blower wheel slowly by hand while measuring voltage between FG and GND: multimeter should pulse between 0V and 5V DC.',
      bn: 'ডিসি মোটরের ক্ষেত্রে FG পিন ও গ্রাউন্ডের মাঝে ভোল্টেজ মেপে হাত দিয়ে ফ্যান ঘোরান: ০ থেকে ৫ ভোল্টের পালস সিগন্যাল ওঠানামা করলে সেন্সর ভালো।',
    },
    categoryIcon: 'RotateCw',
  },
  {
    id: 'part-ac-5',
    appliance: 'ac',
    name: {
      en: 'Inverter IPM Power Driver PCB Motherboard',
      bn: 'ইনভার্টার আইপিএম পাওয়ার কন্ট্রোল পিসিবি মাদারবোর্ড',
    },
    technicalCode: 'PCB-INV-IPM',
    functionDesc: {
      en: 'Acts as the electronic brain, converting 220V AC into 310V DC and generating high-speed pulse-width modulated (PWM) 3-phase power for the compressor.',
      bn: 'এসির প্রধান ইলেকট্রনিক নিয়ন্ত্রণ কেন্দ্র, যা ২২০ভি এসিকে ডিসিতে রূপান্তর করে পালস-উইডথ মডুলেশনের মাধ্যমে কম্প্রেসার স্পিড নিয়ন্ত্রণ করে।',
    },
    commonProblem: {
      en: 'Short-circuited IGBT power transistors, blown switch-mode power supply (SMPS) chip, burnt optocoupler isolation circuits, communication error (E1 / E7).',
      bn: 'আইজিবিটি বা আইপিএম চিপ পুড়ে শর্ট হওয়া, এসএমপিএস পাওয়ার সেকশন নষ্ট হওয়া, ইনডোর-আউটডোর কমিউনিকেশন এরর দেওয়া।',
    },
    multimeterTestGuide: {
      en: 'Set meter to Diode Test mode. Connect positive probe to IPM module P (+) terminal and check negative probe against U, V, W terminals (forward drop 0.4V - 0.7V). Reverse probes (should read open OL). Repeat for N (-) terminal. Any reading near 0.00V indicates an internal short.',
      bn: 'মাল্টিমিটার ডায়োড টেস্ট মোডে দিন। পজিটিভ প্রব P (+) পিনে রেখে U, V, W পিন টেস্ট করুন (০.৪-০.৭ ভোল্ট ড্রপ দেখাবে)। উল্টো ধরলে OL দেখাবে। ০.০০ দেখালে আইপিএম শর্ট।',
    },
    categoryIcon: 'Layers',
  },

  // --- WASHING MACHINE TRAINING PARTS ---
  {
    id: 'part-wm-1',
    appliance: 'washing_machine',
    name: {
      en: 'Universal Magnetic Drain Pump Motor (30W - 40W)',
      bn: 'ইউনিভার্সাল ম্যাগনেটিক ড্রেন পাম্প মোটর (৩০W - ৪০W)',
    },
    technicalCode: 'PMP-DRN-240V',
    functionDesc: {
      en: 'Evacuates wash and rinse water rapidly out of the outer tub into the drainage line via an encapsulated permanent-magnet centrifugal rotor.',
      bn: 'স্থায়ী চুম্বক রটারের সাহায্যে ওয়াশ ও রিন্স সাইকেলের পর সমস্ত নোংরা পানি দ্রুত পাইপ দিয়ে বাইরে ড্রেন করে।',
    },
    commonProblem: {
      en: 'Hair or safety pins jamming impeller, worn rotor bushing causing motor to hum without rotating under load, open stator winding causing OE / E2 error.',
      bn: 'চুল বা সুতা পাখায় পেঁচিয়ে জ্যাম হওয়া, বুশ ক্ষয়ে মোটরে ভোঁ-ভোঁ শব্দ হওয়া কিন্তু না ঘোরা, কয়েল কেটে OE এরর কোড আসা।',
    },
    multimeterTestGuide: {
      en: 'Unplug electrical spade terminals. Switch multimeter to Resistance (Ω) mode across the two coil terminals. A healthy 30W-40W pump reads between 150Ω and 180Ω. Reading "OL" means blown coil; reading under 20Ω indicates shorted winding.',
      bn: 'পাম্পের দুটি টার্মিনালে মাল্টিমিটার রেজিস্ট্যান্স (Ω) মোডে মাপুন। ভালো মোটরের মান ১৫০Ω থেকে ১৮০Ω হবে। "OL" দেখালে কয়েল কাটা, ২০Ω এর নিচে দেখালে শর্ট।',
    },
    categoryIcon: 'RefreshCcw',
  },
  {
    id: 'part-wm-2',
    appliance: 'washing_machine',
    name: {
      en: 'Dual / Triple Water Inlet Solenoid Valve',
      bn: 'ডাবল / ট্রিপল ওয়াটার ইনলেট সলেনয়েড ভালভ',
    },
    technicalCode: 'VLV-SOL-INLET',
    functionDesc: {
      en: 'Electromagnetic plunger valve that opens against water line pressure when energized by 220V AC from the main PCB to fill the tub.',
      bn: 'ইলেক্ট্রোম্যাগনেটিক ভালভ যা কন্ট্রোল বোর্ডের নির্দেশে খুলে ওয়াটার লাইনের পানি ড্রামে প্রবেশ করায়।',
    },
    commonProblem: {
      en: 'Sediment / iron scale clogging internal pilot diaphragm, torn silicone seal leaking water into tub when off, burnt solenoid coil throwing IE / 4E error.',
      bn: 'বালু বা আয়রন জমে ফিল্টার জ্যাম হওয়া, ভালভ লিক হয়ে বন্ধ থাকা অবস্থায়ও ফোঁটা ফোঁটা পানি পড়া, কয়েল পুড়ে IE এরর আসা।',
    },
    multimeterTestGuide: {
      en: 'Set multimeter to Resistance (kΩ) mode. Probe each solenoid coil pin. Expected resistance is 3.5kΩ to 4.8kΩ per coil. Infinite reading indicates blown solenoid winding.',
      bn: 'মাল্টিমিটার কিলো-ওহম (kΩ) মোডে দিয়ে সলেনয়েড কয়েল টেস্ট করুন। সুস্থ কয়েলে ৩.৫kΩ থেকে ৪.৮kΩ মান পাওয়া যাবে। ইনফিনিটি দেখালে কয়েল নষ্ট।',
    },
    categoryIcon: 'Droplets',
  },
  {
    id: 'part-wm-3',
    appliance: 'washing_machine',
    name: {
      en: 'Tub Suspension Damper Rods & Friction Springs',
      bn: 'টাব সাসপেনশন ড্যাম্পার রড ও ফ্রিকশন স্প্রিং কিট',
    },
    technicalCode: 'SUS-DAMP-SET4',
    functionDesc: {
      en: 'Counters centrifugal vibrations produced by unbalanced loads during high-velocity 1000-1400 RPM spin dewatering.',
      bn: 'হাই-স্পিড স্পিনের সময় ড্রামের ঘূর্ণন ভারসাম্য রক্ষা করে প্রচণ্ড কম্পন ও বাড়ি খাওয়া রোধ করে।',
    },
    commonProblem: {
      en: 'Loss of internal grease damping resistance, cracked plastic friction sleeves, broken top suspension spring causing violent banging and UE / UB error.',
      bn: 'ড্যাম্পারের ভেতরের ফ্রিকশন গ্রিজ নষ্ট হয়ে লুজ হয়ে যাওয়া, স্পিনের সময় ড্রাম ক্যাবিনেটে প্রচণ্ড শব্দে বাড়ি খাওয়া ও UE এরর দেওয়া।',
    },
    multimeterTestGuide: {
      en: 'Mechanical diagnostic: Push down firmly on the top of the wash tub and release quickly. The tub must bounce once and immediately settle. If it oscillates or rocks 3-4 times, dampers have failed and need replacement.',
      bn: 'মেকানিক্যাল টেস্ট: ড্রামের ওপরে দুই হাত দিয়ে শক্ত চাপ দিয়ে ছেড়ে দিন। একবার সামান্য উঠে স্থির হলে ভালো; ৩-৪ বার দুললে ড্যাম্পার নষ্ট।',
    },
    categoryIcon: 'Maximize2',
  },
  {
    id: 'part-wm-4',
    appliance: 'washing_machine',
    name: {
      en: 'Electronic Door Interlock Switch & Thermal Wax PTC',
      bn: 'ইলেকট্রনিক ডোর ইন্টারলক সুইচ ও থার্মাল পিটিসি লক',
    },
    technicalCode: 'SW-DOOR-LCK',
    functionDesc: {
      en: 'Locks front glass door safely during active cycles and signals a microswitch contact closure to permit motor rotation.',
      bn: 'মেশিন চলার সময় কাচের দরজা শক্ত করে লক করে রাখে এবং কন্ট্রোল বোর্ডে সুইচ ক্লোজ সিগন্যাল পাঠিয়ে মোটর ঘোরার অনুমতি দেয়।',
    },
    commonProblem: {
      en: 'Shattered plastic slider latch, burnt PTC heating tablet, welded internal contacts preventing door from unlocking, dE / Door error.',
      bn: 'ল্যাচ মেকানিজম ভেঙে যাওয়া, পিটিসি গরম না হওয়া, সাইকেল শেষ হলেও দরজা জ্যাম হয়ে না খোলা, ডিসপ্লেতে dE এরর কোড দেখানো।',
    },
    multimeterTestGuide: {
      en: 'Check terminals N, L, and C. Resistance between PTC terminals (N & L) should be 800Ω - 1500Ω. When energized, thermal latch expands and closes contact between L and C (reading 0.0Ω). If open, switch is dead.',
      bn: 'N ও L পিনে ওহম মেপে ৮০০Ω-১৫০০Ω দেখুন। সুইচ মেকানিক্যালি পুশ করলে L ও C পিনে কন্টিনিউটি বিপ বা ০.০Ω শব্দ করবে।',
    },
    categoryIcon: 'Lock',
  },
  {
    id: 'part-wm-5',
    appliance: 'washing_machine',
    name: {
      en: 'Direct-Drive Hall Effect Rotor Position Sensor',
      bn: 'ডাইরেক্ট-ড্রাইভ হল ইফেক্ট আরপিএম পজিশন সেন্সর',
    },
    technicalCode: 'SNS-HALL-DD',
    functionDesc: {
      en: 'Monitors exact rotor magnetic pole alignment and speed to provide closed-loop feedback for smooth multi-motion inverter agitation.',
      bn: 'রটারের সুনির্দিষ্ট অবস্থান ও আরপিএম গতি প্রতি মুহূর্তে মনিটর করে কন্ট্রোল বোর্ডকে তথ্য দেয়।',
    },
    commonProblem: {
      en: 'Moisture ingress shorting surface-mount Hall IC, dry solder joint, washer stutters back-and-forth for 3 seconds then stops with LE error.',
      bn: 'ভেতরে আর্দ্রতা ঢুকে আইসি নষ্ট হওয়া, ড্রাম সামান্য কেঁপে দাঁড়িয়ে যাওয়া এবং LE / E4 এরর কোড দিয়ে বন্ধ হওয়া।',
    },
    multimeterTestGuide: {
      en: 'Set multimeter to DC Volts (20V). Supply 12V DC between Vcc and GND pins. Measure voltage at outputs Ha and Hb while slowly rotating drum: meter must alternate cleanly between 0V and 12V DC. If stuck at continuous 0V or 12V, replace sensor.',
      bn: '১২ ভোল্ট সাপ্লাই দিয়ে Ha ও Hb পিনের ভোল্টেজ মেপে ড্রাম হাত দিয়ে ঘোরান: ভোল্টেজ ০V ও ১২V এর মধ্যে পালস করলে সেন্সর ঠিক আছে।',
    },
    categoryIcon: 'Gauge',
  },

  // --- REFRIGERATOR TRAINING PARTS ---
  {
    id: 'part-ref-1',
    appliance: 'refrigerator',
    name: {
      en: 'Defrost Thermostat Bimetal Switch (-5°C / +10°C)',
      bn: 'ডিফ্রস্ট থার্মোস্ট্যাট বাইমেটাল সুইচ (-৫°C / +১০°C)',
    },
    technicalCode: 'THM-BIMET-REF',
    functionDesc: {
      en: 'Closes internal electrical contacts only when evaporator coil drops below freezing (-5°C) to allow defrost heater power, and opens at +10°C to terminate heating.',
      bn: 'কয়েলের তাপমাত্রা মাইনাস ৫ ডিগ্রিতে নামলে সুইচ অন করে ডিফ্রস্ট হিটার চালু করে এবং প্লাস ১০ ডিগ্রিতে পৌঁছালে হিটার বন্ধ করে দেয়।',
    },
    commonProblem: {
      en: 'Internal moisture freeze-up pushing contact points apart, water logged capsule, open circuit causing continuous ice build-up and room-temperature fresh food zone.',
      bn: 'ভেতরে পানি ঢুকে জ্যাম হওয়া, কন্টাক্ট পয়েন্ট বিচ্ছিন্ন থাকা, যার ফলে ডিপে পাহাড়সম বরফ জমে কিন্তু নরমাল গরম হয়ে খাবার নষ্ট হয়।',
    },
    multimeterTestGuide: {
      en: 'At room temperature (+25°C), test continuity with multimeter: it must read Open ("OL"). Submerge bimetal inside a cup of ice with salt (below -5°C) for 5 minutes: contacts must snap closed and meter must beep (0.0Ω). If it never beeps while freezing, bimetal is defective.',
      bn: 'ঘরের তাপমাত্রায় মাপলে এটি ডিসকানেক্ট বা OL থাকবে। এক গ্লাস লবণ-বরফে ৫ মিনিট ডুবিয়ে রেখে মাপুন: মাইনাস তাপমাত্রায় বিপ শব্দ করে কন্টিনিউটি ০.০Ω দেখাবে। বিপ না করলে নষ্ট।',
    },
    categoryIcon: 'ThermometerSnowflake',
  },
  {
    id: 'part-ref-2',
    appliance: 'refrigerator',
    name: {
      en: 'PTC Starter Relay & Overload Protector (OLP) Combo',
      bn: 'পিটিসি স্টার্টার রিলে ও ওভারলোড প্রটেক্টর (OLP) কম্বো',
    },
    technicalCode: 'RLY-PTC-OLP',
    functionDesc: {
      en: 'Provides high starting torque to the auxiliary winding for 0.5s via a ceramic thermistor disc, while the OLP protects motor coils from overheating and overcurrent.',
      bn: 'সিরামিক ডিস্কের সাহায্যে কম্প্রেসার চালু করতে হাফ সেকেন্ডের স্টার্ট পুশ দেয় এবং অতিরিক্ত কারেন্টে ওএলপি লাইন কেটে কম্প্রেসার বাঁচায়।',
    },
    commonProblem: {
      en: 'Ceramic tablet inside PTC shatters due to voltage spikes, causing compressor to click every 2-3 minutes, struggle to start, and trip on thermal overload.',
      bn: 'ভেতরের সিরামিক ডিস্ক ফেটে যাওয়া, যার ফলে কম্প্রেসার চালু না হয়ে ২ মিনিট পর পর টিক-টিক শব্দ করে ট্রিপ করা ও ফ্রিজ গরম থাকা।',
    },
    multimeterTestGuide: {
      en: 'Shake PTC near your ear: rattling sand noise confirms shattered ceramic. Measure resistance across PTC terminal sockets: normal cold reading is 12Ω to 28Ω. Infinite reading indicates broken disc. For OLP, test continuity across its two pins: must read near 0.0Ω.',
      bn: 'রিলে ঝাঁকালে বালুর মতো শব্দ হলে ডিস্ক ভাঙা। টার্মিনালে ওহম মেপে ১২Ω থেকে ২৮Ω পাওয়া গেলে ভালো। ওএলপির দুই পিনে কন্টিনিউটি ০.০Ω থাকা আবশ্যক।',
    },
    categoryIcon: 'ShieldAlert',
  },
  {
    id: 'part-ref-3',
    appliance: 'refrigerator',
    name: {
      en: 'Quartz Glass & Metal Sheath Defrost Heating Element',
      bn: 'কোয়ার্টজ গ্লাস ও মেটাল শিথ ডিফ্রস্ট হিটার কয়েল',
    },
    technicalCode: 'HTR-DEF-220V',
    functionDesc: {
      en: 'Generates radiant infrared heat beneath the evaporator coil during the 20-minute defrost cycle to melt frost into the drainage gutter.',
      bn: 'ডিফ্রস্ট সাইকেলের সময় নিয়ন্ত্রিত উত্তাপ তৈরি করে কয়েলে জমা সমস্ত বরফ গলিয়ে পানি আকারে পেছনের ট্রের ড্রেনে ফেলে দেয়।',
    },
    commonProblem: {
      en: 'Nichrome element burnt in half, cracked quartz glass tube allowing moisture short circuit, bottom evaporator fins frozen solid blocking fan intake.',
      bn: 'ভেতরের নাইক্রোম তার কেটে যাওয়া, গ্লাস ফেটে পানি ঢোকা, কয়েল জমে পাথরের মতো বরফ হয়ে বাতাস চলাচল সম্পূর্ণ বন্ধ হয়ে যাওয়া।',
    },
    multimeterTestGuide: {
      en: 'Disconnect heater wiring harness. Set meter to Resistance (Ω) mode. A standard 150W-250W 220V heater must read between 180Ω and 360Ω. Reading "OL" confirms an open circuit (burnt filament).',
      bn: 'হিটারের সংযোগ খুলে মাল্টিমিটার রেজিস্ট্যান্স (Ω) মোডে মাপুন। ১৮০Ω থেকে ৩৬০Ω মান দেখালে হিটার ভালো। "OL" দেখালে হিটারের তার পুড়ে নষ্ট।',
    },
    categoryIcon: 'Flame',
  },
  {
    id: 'part-ref-4',
    appliance: 'refrigerator',
    name: {
      en: 'No-Frost Evaporator Circulation Fan Motor',
      bn: 'নো-ফ্রস্ট ইভাপোরেটর ফ্যান মোটর',
    },
    technicalCode: 'MTR-EVAP-FAN',
    functionDesc: {
      en: 'Draws super-chilled air over evaporator coils and forces it through insulated air distribution ducts to cool both freezer and fresh food zones.',
      bn: 'ইভাপোরেটর কয়েল থেকে তীব্র ঠান্ডা বাতাস টেনে ডাক্টের মাধ্যমে ডিপ ও নরমাল জোনে নিরবচ্ছিন্নভাবে প্রবাহিত করে।',
    },
    commonProblem: {
      en: 'Frozen bearing shaft due to meltwater drip, worn rotor bushing vibrating, open motor winding causing fresh food section to stay at warm room temperature.',
      bn: 'ঠান্ডায় বিয়ারিং জ্যাম হওয়া, মোটরের কয়েল পুড়ে যাওয়া, যার ফলে ডিপে সামান্য ঠান্ডা থাকলেও নিচের নরমাল চেম্বার পুরোপুরি গরম থাকা।',
    },
    multimeterTestGuide: {
      en: 'For 220V AC motor: measure winding resistance across both wire leads (typical healthy reading is 300Ω - 600Ω). For 12V DC motor: verify 12V input with door switch depressed. If 12V is present but motor fails to spin freely, replace motor assembly.',
      bn: '২২০ভি এসি মোটরে ৩০০Ω থেকে ৬০০Ω রেজিস্ট্যান্স থাকবে। ১২ভি ডিসি মোটরের ক্ষেত্রে ডোর সুইচ চেপে ১২ ভোল্ট ইনপুট মেপে মোটর স্পিন টেস্ট করুন।',
    },
    categoryIcon: 'Fan',
  },
  {
    id: 'part-ref-5',
    appliance: 'refrigerator',
    name: {
      en: 'Cold Control Mechanical Thermostat Switch',
      bn: 'কোল্ড কন্ট্রোল মেকানিক্যাল থার্মোস্ট্যাট সুইচ',
    },
    technicalCode: 'SW-THM-K59',
    functionDesc: {
      en: 'Senses cabinet cooling via a gas-charged capillary sensor bulb and mechanical bellows to cycle the compressor on and off at preset temperature cut-points.',
      bn: 'গ্যাস-ভরা ক্যাপিলারি টিউব দিয়ে তাপমাত্রা সেন্স করে মেকানিক্যাল বেলোজের মাধ্যমে কম্প্রেসার অটোমেটিক বন্ধ ও চালু করে।',
    },
    commonProblem: {
      en: 'Punctured capillary bulb losing gas charge (compressor never turns on), stuck internal snap contacts causing compressor to run 24/7 and freezing vegetables into ice.',
      bn: 'ক্যাপিলারি পাইপ লিক হয়ে গ্যাস বের হয়ে কম্প্রেসার অন না হওয়া, অথবা সুইচ জ্যাম হয়ে একটানা চলে শাকসবজি বরফ বানিয়ে ফেলা।',
    },
    multimeterTestGuide: {
      en: 'Turn thermostat dial to coldest setting (Position 7): contacts between terminals 4 and 6 must have 0.0Ω continuity. Submerge capillary bulb in sub-zero ice bath: mechanical click should sound and meter should jump to "OL" (open). If it fails to open, contacts are welded.',
      bn: 'নব ৭-এ দিয়ে টেস্ট করলে ০.০Ω দেখাবে। বরফের পানিতে ক্যাপিলারি টিউব ডুবিয়ে নব ১-এ দিলে "টিক" শব্দ হয়ে লাইন কেটে "OL" হবে। কাট-অফ না করলে সুইচ নষ্ট।',
    },
    categoryIcon: 'SlidersHorizontal',
  },
];

export const troubleshootingModulesData: TroubleshootingItem[] = [
  // --- AC MODULES ---
  {
    id: 'tr-ac-1',
    appliance: 'ac',
    applianceName: { en: 'Air Conditioner (AC)', bn: 'এয়ার কন্ডিশনার (এসি)' },
    problem: {
      en: 'AC Not Cooling / Indoor Unit Blows Room Temperature Air',
      bn: 'এসি ঠান্ডা বাতাস দিচ্ছে না / সাধারণ বা গরম বাতাস বের হচ্ছে',
    },
    causes: {
      en: [
        'Heavily clogged indoor mesh filter choking evaporator airflow',
        'Refrigerant gas leak (R32 / R410A) at flare nut joints or service valve schrader core',
        'Weak or open dual run capacitor preventing outdoor compressor startup',
        'Faulty indoor copper pipe thermistor (10kΩ NTC) sending wrong temperature signal to PCB',
      ],
      bn: [
        'ইনডোর এয়ার ফিল্টার অতিরিক্ত ধুলোবালিতে সম্পূর্ণ জ্যাম হওয়া',
        'কপার পাইপের ফ্লেয়ার নাট বা সার্ভিস ভালভ দিয়ে গ্যাস (R32 / R410A) লিক হওয়া',
        'আউটডোর কম্প্রেসারের রানিং ক্যাপাসিটর নষ্ট হয়ে কম্প্রেসার স্টার্ট না নেওয়া',
        'ইনডোর কয়েল টেম্পারেচার সেন্সর (১০kΩ) নষ্ট হয়ে ভুল সিগন্যাল পাঠানো',
      ],
    },
    solutions: {
      en: [
        'Step 1: Inspect & wash indoor filters under running water and dry completely.',
        'Step 2: Inspect outdoor capacitor with multimeter µF mode; replace if capacitance is below 10%.',
        'Step 3: Connect R410A/R32 manifold gauge set; verify suction pressure (normal is 120-140 PSI).',
        'Step 4: Perform soap bubble leak detection, braze pinhole with silver brazing rod, vacuum system with two-stage rotary pump to 500 microns, and weigh in factory gas charge.',
      ],
      bn: [
        'ধাপ ১: ইনডোর ফিল্টার বের করে পানি দিয়ে ভালো করে ধুয়ে শুকিয়ে লাগান।',
        'ধাপ ২: মাল্টিমিটার দিয়ে ক্যাপাসিটরের মান মেপে দুর্বল থাকলে নতুন ক্যাপাসিটর স্থাপন করুন।',
        'ধাপ ৩: গেজ মিটার দিয়ে সাকশন প্রেসার মাপুন (স্বাভাবিক প্রেসার ১২০-১৪০ পিএসআই)।',
        'ধাপ ৪: সাবানের ফেনা দিয়ে গ্যাস লিকেজ শনাক্ত করে ওয়েল্ডিং করুন, ভ্যাকুয়াম পাম্প দিয়ে ৫০০ মাইক্রন পর্যন্ত বায়ুশূন্য করে ওজন মেপে গ্যাস রিফিল করুন।',
      ],
    },
    testingProcedure: {
      en: 'Measure operating running amps with clamp meter on live wire. Compare clamp meter reading against nameplate Rated Amps. If running amps is only 0.8A (normal 5.5A), compressor is idling or capacitor is dead.',
      bn: 'ক্ল্যাম্প মিটার দিয়ে লাইভ তারে রানিং অ্যাম্পিয়ার মাপুন। নেমপ্লেটের চেয়ে অস্বাভাবিক কম (যেমন ০.৮A) দেখালে কম্প্রেসার চালু হয়নি বা গ্যাস একদম নেই।',
    },
    severity: 'intermediate',
    safetyWarning: {
      en: 'Always cut off the 220V main circuit breaker before opening outdoor casing. Discard or ground capacitor terminals with a resistor.',
      bn: 'আউটডোর ইউনিট খোলার আগে প্রধান সার্কিট ব্রেকার বন্ধ করুন। ক্যাপাসিটর ডিসচার্জ না করে খালি হাতে ধরবেন না।',
    },
    associatedParts: ['Dual Run Capacitor', 'R32 / R410A Refrigerant', 'Thermistor Room Sensor'],
  },
  {
    id: 'tr-ac-2',
    appliance: 'ac',
    applianceName: { en: 'Air Conditioner (AC)', bn: 'এয়ার কন্ডিশনার (এসি)' },
    problem: {
      en: 'Compressor Overheats & Shuts Down After 5 Minutes (E1 / Overload Trip)',
      bn: 'কম্প্রেসার ৫ মিনিট চলেই অতিরিক্ত গরম হয়ে বন্ধ হয়ে যাওয়া (E1 / ওএলপি ট্রিপ)',
    },
    causes: {
      en: [
        'Outdoor condenser fins completely packed with dirt/debris blocking heat rejection',
        'Outdoor fan motor capacitor (2.5µF - 4µF) degraded, causing sluggish fan RPM',
        'Severe low line voltage (under 195V AC) under household load',
        'Overcharged refrigerant system resulting in excessively high head pressure (over 450 PSI)',
      ],
      bn: [
        'আউটডোর কনডেন্সার কয়েলে অতিরিক্ত ময়লা জমে তাপ বের হতে না পারা',
        'আউটডোর ফ্যান মোটরের ক্যাপাসিটর দুর্বল হয়ে ফ্যানের গতি কমে যাওয়া',
        'বাসার বিদ্যুতের ভোল্টেজ ১৯৫ ভোল্টের নিচে নেমে যাওয়া',
        'প্রয়োজনের চেয়ে বেশি গ্যাস চার্জ করায় অতিরিক্ত হাই-প্রেসার তৈরি হওয়া',
      ],
    },
    solutions: {
      en: [
        'Step 1: Perform pressure water jet cleaning through outdoor condenser coils from inside-out.',
        'Step 2: Test outdoor fan capacitor; replace if lower than rated 3µF.',
        'Step 3: Measure household supply voltage under AC startup surge; recommend servo stabilizer if below 205V.',
        'Step 4: Hook high-side gauge to verify condensing temperature and balance refrigerant charge.',
      ],
      bn: [
        'ধাপ ১: হাই-প্রেসার ওয়াটার জেট দিয়ে আউটডোরের পেছনের কয়েল ভেতর থেকে বাইরে ওয়াশ করুন।',
        'ধাপ ২: ফ্যান মোটরের ক্যাপাসিটর পরীক্ষা করে নতুন ৩µF ক্যাপাসিটর লাগান।',
        'ধাপ ৩: মাল্টিমিটার দিয়ে ভোল্টেজ মেপে ২০৫ ভোল্টের নিচে থাকলে স্ট্যাবিলাইজার ব্যবহার করুন।',
        'ধাপ ৪: গেজ মিটার দিয়ে হাই-প্রেসার মেপে অতিরিক্ত গ্যাস অ্যাডজাস্ট করুন।',
      ],
    },
    testingProcedure: {
      en: 'Test temperature differential: measure air entering condenser vs air exiting outdoor fan. Differential should be 8°C - 12°C. Low delta with high compressor dome heat indicates air restriction.',
      bn: 'আউটডোরের বাতাস ঢোকা ও বের হওয়ার তাপমাত্রার পার্থক্য মাপুন। ৮° থেকে ১২° ডিগ্রি পার্থক্য থাকা স্বাভাবিক।',
    },
    severity: 'advanced_electrical',
    safetyWarning: {
      en: 'Compressor dome temperature can exceed 90°C. Never touch with bare hands.',
      bn: 'কম্প্রেসারের বডি ৯০ ডিগ্রি পর্যন্ত উত্তপ্ত হতে পারে। খালি হাতে স্পর্শ করবেন না।',
    },
    associatedParts: ['Outdoor Fan Motor', 'Voltage Stabilizer', 'Inverter Outdoor PCB Board'],
  },

  // --- WASHING MACHINE MODULES ---
  {
    id: 'tr-wm-1',
    appliance: 'washing_machine',
    applianceName: { en: 'Washing Machine', bn: 'ওয়াশিং মেশিন' },
    problem: {
      en: 'Washer Won\'t Drain Water / OE Error Code Triggered',
      bn: 'মেশিন থেকে পানি বের হচ্ছে না / ডিসপ্লেতে OE এরর কোড দেখানো',
    },
    causes: {
      en: [
        'Foreign debris (bobby pins, coins, lint) stuck in bottom coin trap filter',
        'Drain pump impeller broken or bound by tangled fabric threads',
        'Drain hose elevated higher than 100cm or pinched behind cabinet',
        'Burnt drain pump motor winding unable to turn against water head',
      ],
      bn: [
        'কয়েন ট্র্যাপ ফিল্টারে কয়েন, হেয়ারপিন বা ময়লা আটকে থাকা',
        'ড্রেন পাম্প মোটরের পাখা ভেঙে যাওয়া বা সুতা পেঁচিয়ে জ্যাম হওয়া',
        'ড্রেন পাইপ ১ মিটারের বেশি উঁচুতে আটকে রাখা বা পাইপ বেঁকে থাকা',
        'ড্রেন পাম্প মোটরের কয়েল পুড়ে যাওয়া',
      ],
    },
    solutions: {
      en: [
        'Step 1: Open lower front service flap, unscrew emergency drain plug, and clear debris trap.',
        'Step 2: Reach finger into pump cavity and verify free rotation of impeller with normal magnetic cogging feel.',
        'Step 3: Measure resistance across pump terminals with multimeter (expected 160Ω). Replace pump if open.',
        'Step 4: Check 220V voltage supply from main PCB to pump during drain cycle phase.',
      ],
      bn: [
        'ধাপ ১: মেশিনের নিচের কয়েন ফিল্টারের ঢাকনা খুলে ভেতরের ময়লা ও কয়েন পরিষ্কার করুন।',
        'ধাপ ২: হাত দিয়ে পাম্পের পাখা ঘুরিয়ে দেখুন ম্যাগনেটিক ঝটকা সহ ফ্রি ঘোরে কিনা।',
        'ধাপ ৩: টার্মিনালে মাল্টিমিটার দিয়ে ১৬০ ওহম রেজিস্ট্যান্স পরীক্ষা করুন; কাটা থাকলে পাম্প পরিবর্তন করুন।',
        'ধাপ ৪: ড্রেন মোডে কন্ট্রোল বোর্ড থেকে ২২০ ভোল্ট পাম্পে আসছে কিনা যাচাই করুন।',
      ],
    },
    testingProcedure: {
      en: 'Run test mode "Spin & Drain". Measure AC voltage at pump electrical plug terminals with digital multimeter. If 220V AC is present but pump hums silently without pumping, mechanical impeller is decoupled from rotor.',
      bn: 'টেস্ট মোডে ড্রেন চালু করে পাম্পের প্লাগে ২২০ ভোল্ট এসি মেপে দেখুন। ভোল্টেজ থাকলে কিন্তু পানি না নামলে পাম্প মেকানিক্যালি নষ্ট।',
    },
    severity: 'basic',
    safetyWarning: {
      en: 'Place a catch basin and towels under coin trap before opening; hot soapy water may rush out.',
      bn: 'কয়েন ট্র্যাপ খোলার সময় নিচে একটি গামলা ও তোয়ালে রাখুন, আটকে থাকা পানি ছিটকে পড়তে পারে।',
    },
    associatedParts: ['Universal Drain Pump Motor', 'Coin Trap Filter Cap'],
  },
  {
    id: 'tr-wm-2',
    appliance: 'washing_machine',
    applianceName: { en: 'Washing Machine', bn: 'ওয়াশিং মেশিন' },
    problem: {
      en: 'Violent Shaking & Loud Banging Noise During High Spin Cycle',
      bn: 'স্পিন করার সময় প্রচণ্ড কাঁপুনি, লাফালাফি ও তীব্র শব্দ হওয়া',
    },
    causes: {
      en: [
        'Shipping transit transport bolts not removed after new installation',
        'Worn hydraulic shock absorber dampers on bottom of outer tub',
        'Machine adjustable leveling feet are uneven on tiled bathroom floor',
        'Fractured aluminum drum spider arm causing off-center drum rotation',
      ],
      bn: [
        'মেশিন ইনস্টল করার পর পেছনের ট্রানজিট লক বোল্ট না খুলে চালানো',
        'নিচের হাইড্রোলিক শক অ্যাবজরভার ড্যাম্পার লুজ বা নষ্ট হয়ে যাওয়া',
        'মেশিনের লেভেলিং পায়া মেঝেতে অসমান থাকা',
        'ড্রামের ভেতরের অ্যালুমিনিয়াম স্পাইডার আর্ম ভেঙে একপাশে কাত হওয়া',
      ],
    },
    solutions: {
      en: [
        'Step 1: Check rear panel: remove all 4 shipping transit bolts and plastic spacers immediately.',
        'Step 2: Level washer using bubble level on top lid; adjust threaded feet and tighten locknuts.',
        'Step 3: Remove lower panel, pull damper pins, and check hydraulic resistance: replace dampers in pairs if loose.',
        'Step 4: Lift inner drum up and down by hand: if it wobbles inside outer tub with metal grind, replace spider arm & bearings.',
      ],
      bn: [
        'ধাপ ১: নতুন মেশিনের ক্ষেত্রে পেছনের ৪টি শিপিং বোল্ট রেঞ্চ দিয়ে সম্পূর্ণ খুলে ফেলুন।',
        'ধাপ ২: স্পিরিট লেভেল দিয়ে মেশিনের চার পায়া সমান করে লক নাট টাইট দিন।',
        'ধাপ ৩: নিচের শক অ্যাবজরভার ড্যাম্পার টেস্ট করুন; টানলে সহজে উঠে আসলে ড্যাম্পার জোড়া পরিবর্তন করুন।',
        'ধাপ ৪: হাত দিয়ে ড্রাম নাড়ালে যদি খটখট শব্দ সহ দোলে, তবে ড্রাম স্পাইডার ও বিয়ারিং কিট পরিবর্তন করুন।',
      ],
    },
    testingProcedure: {
      en: 'Spin the inner drum rapidly by hand while listening at the rear pulley. A smooth whisper indicates good bearings. A dry roaring "rumble" (like a jet engine) confirms worn ball bearings and failed lip seal.',
      bn: 'হাত দিয়ে ড্রাম জোরে ঘুরিয়ে শুনুন: ট্রেনের মতো গড়গড় শব্দ হলে বিয়ারিং ও ওয়াটার সিল নষ্ট।',
    },
    severity: 'intermediate',
    safetyWarning: {
      en: 'Operating a washer with loose shipping bolts can permanently crack the plastic outer tub.',
      bn: 'শিপিং বোল্ট না খুলে চালালে ড্রামের প্লাস্টিক বডি ভেঙে অপূরণীয় ক্ষতি হতে পারে।',
    },
    associatedParts: ['Tub Suspension Damper Rods', 'Drum Spider Bracket', 'Double Bearings Kit'],
  },

  // --- REFRIGERATOR MODULES ---
  {
    id: 'tr-ref-1',
    appliance: 'refrigerator',
    applianceName: { en: 'Refrigerator & Deep Freezer', bn: 'রেফ্রিজারেটর ও ডিপ ফ্রিজ' },
    problem: {
      en: 'Freezer Is Freezing Well, But Lower Refrigerator Compartment Is Warm',
      bn: 'ডিপ চেম্বারে বরফ হচ্ছে কিন্তু নরমাল অংশে কোনো ঠান্ডা হচ্ছে না',
    },
    causes: {
      en: [
        'Defrost bimetal thermostat open-circuit, preventing automatic defrost cycle',
        'Burnt defrost heater element causing thick frost wall to choke air duct channels',
        'Evaporator circulation fan motor burnt or frozen solid by ice buildup',
        'Mechanical damper air door stuck shut between freezer and fresh food section',
      ],
      bn: [
        'ডিফ্রস্ট বাইমেটাল থার্মোস্ট্যাট নষ্ট হয়ে অটো হিটার চালু না হওয়া',
        'ডিফ্রস্ট হিটার কেটে গিয়ে কয়েলে পাহাড়সম বরফ জমে বাতাস নামার পথ বন্ধ হওয়া',
        'ইভাপোরেটর ফ্যান মোটর নষ্ট হওয়ায় ঠান্ডা বাতাস নরমালে প্রবাহিত হতে না পারা',
        'ডিপ ও নরমালের মাঝের মেকানিক্যাল এয়ার ড্যাম্পার গেট বন্ধ থাকা',
      ],
    },
    solutions: {
      en: [
        'Step 1: Disassemble freezer rear panel; steam melt frost using heat gun safely (avoid melting plastic liner).',
        'Step 2: Test defrost bimetal continuity in ice bath; replace with matched -5°C snap disc.',
        'Step 3: Measure defrost heater resistance (typical 200Ω - 350Ω); replace if open circuit.',
        'Step 4: Check evaporator fan motor operation with door switch pressed; replace motor if seized.',
      ],
      bn: [
        'ধাপ ১: ডিপের পেছনের কাভার খুলে সাবধানে বরফ গলিয়ে ফেলুন (প্লাস্টিক গলানো এড়ান)।',
        'ধাপ ২: বাইমেটাল থার্মোস্ট্যাট টেস্ট করে নতুন বাইমেটাল সুইচ লাগান।',
        'ধাপ ৩: ডিফ্রস্ট হিটারের ওহম (Ω) মেপে দেখুন; কাটা থাকলে নতুন কোয়ার্টজ হিটার লাগান।',
        'ধাপ ৪: ডোর সুইচ চেপে ফ্যান মোটর ঘুরে বাতাস দিচ্ছে কিনা নিশ্চিত করুন।',
      ],
    },
    testingProcedure: {
      en: 'Locate defrost timer or PCB test jumper. Advance timer cam into manual defrost position: compressor should shut off and heater circuit should draw approximately 0.7A - 1.0A on clamp meter.',
      bn: 'ডিফ্রস্ট টাইমার ঘুরিয়ে ম্যানুয়াল হিটিং মোডে দিন: কম্প্রেসার বন্ধ হয়ে ক্ল্যাম্প মিটারে ০.৮ অ্যাম্পিয়ার কারেন্ট দেখালে হিটার সার্কিট সচল।',
    },
    severity: 'intermediate',
    safetyWarning: {
      en: 'Never scrape evaporator aluminum tubing with screwdrivers; puncturing tubing vents refrigerant immediately.',
      bn: 'ধারালো স্ক্রু-ড্রাইভার দিয়ে কয়েলের বরফ চাঁছবেন না; গ্যাস পাইপ লিক হয়ে বড় ক্ষতি হবে।',
    },
    associatedParts: ['Defrost Thermostat Bimetal', 'Defrost Heating Element', 'Evaporator Fan Motor'],
  },
  {
    id: 'tr-ref-2',
    appliance: 'refrigerator',
    applianceName: { en: 'Refrigerator & Deep Freezer', bn: 'রেফ্রিজারেটর ও ডিপ ফ্রিজ' },
    problem: {
      en: 'Compressor Clicks Every 2-3 Minutes, Does Not Start & Cabinet Stays Warm',
      bn: 'কম্প্রেসার থেকে ২-৩ মিনিট পরপর "ক্লিক" শব্দ হয়, কিন্তু চালু হয় না ও ঠান্ডা বন্ধ',
    },
    causes: {
      en: [
        'Cracked or burnt PTC ceramic starter relay disc unable to energize start winding',
        'Overload protector (OLP) tripping open due to high starting amp surge',
        'Low household line supply voltage (below 180V AC)',
        'Internal compressor piston mechanically locked up (Locked Rotor)',
      ],
      bn: [
        'পিটিসি স্টার্টার রিলের সিরামিক ডিস্ক ফেটে গিয়ে স্টার্ট কয়েলে সংযোগ না দেওয়া',
        'অতিরিক্ত কারেন্ট টানার কারণে ওভারলোড প্রটেক্টর (OLP) ট্রিপ করে ক্লিক শব্দ করা',
        'বিদ্যুতের লাইনে ভোল্টেজ ১৮০ ভোল্টের নিচে নেমে যাওয়া',
        'কম্প্রেসারের ভেতরের পিস্টন মেকানিক্যালি জ্যাম (সিজ) হয়ে যাওয়া',
      ],
    },
    solutions: {
      en: [
        'Step 1: Disconnect power, unclip PTC relay and shake near ear: if it rattles, replace immediately.',
        'Step 2: Test OLP continuity with digital multimeter (must read near 0.0Ω).',
        'Step 3: Measure compressor terminal pin resistance (Common, Run, Start): R_cs + R_cr must strictly equal R_sr.',
        'Step 4: Attempt starting with technician Hard-Start Capacitor Booster. If still locked, replace compressor.',
      ],
      bn: [
        'ধাপ ১: প্লাগ খুলে পিটিসি রিলে ঝাঁকিয়ে দেখুন; ঝনঝন শব্দ করলে নতুন রিলে স্থাপন করুন।',
        'ধাপ ২: ওএলপি মাল্টিমিটার দিয়ে মেপে ০.০ ওহম কন্টিনিউটি নিশ্চিত করুন।',
        'ধাপ ৩: কম্প্রেসারের ৩টি পিনের ওহম মেপে দেখুন (কমন, রান, স্টার্ট)।',
        'ধাপ ৪: হার্ড স্টার্ট ক্যাপাসিটর বুস্টার দিয়ে ট্রাই করুন; পিস্টন জ্যাম থাকলে কম্প্রেসার পরিবর্তন আবশ্যক।',
      ],
    },
    testingProcedure: {
      en: 'Test compressor terminal resistance formula: Winding Resistance Formula: R(Run-to-Start) = R(Common-to-Run) + R(Common-to-Start). Any short to casing earth confirms terminal breakdown.',
      bn: 'ওয়াইন্ডিং ফর্মুলা যাচাই: R(Run to Start) = R(Common to Run) + R(Common to Start)। বডির সাথে রেজিস্ট্যান্স ইনফিনিটি (OL) হতে হবে।',
    },
    severity: 'advanced_electrical',
    safetyWarning: {
      en: 'Compressor dome shell can reach over 85°C when stalled. Avoid touching with bare hands.',
      bn: 'স্টার্ট না নিতে পারলে কম্প্রেসার অতিরিক্ত গরম হয়ে যায়। খালি হাতে স্পর্শ করবেন না।',
    },
    associatedParts: ['PTC Starter Relay', 'Overload Protector (OLP)', 'Hard-Start Capacitor Booster'],
  },
];

export const trainingCoursesData: TrainingCourseModule[] = [
  {
    id: 'course-1',
    code: 'AC-301',
    title: {
      en: 'Master Inverter AC Diagnostics & Gas Charging',
      bn: 'মাস্টার ইনভার্টার এসি ডায়াগনস্টিক ও গ্যাস চার্জিং',
    },
    duration: { en: '4 Weeks (Practical Lab)', bn: '৪ সপ্তাহ (হাতে-কলমে ল্যাব)' },
    level: { en: 'Technician to Senior Specialist', bn: 'টেকনিশিয়ান থেকে সিনিয়র স্পেশালিস্ট' },
    topics: {
      en: [
        'Thermodynamic P-h Diagram & Superheat/Subcooling Calculations',
        'R32 & R410A Safe Nitrogen Leak Pressure Testing (up to 400 PSI)',
        'Inverter IPM PCB Microcontroller & Optical Coupler Debugging',
        'Twin-Rotary BLDC Motor Winding Insulation Megger Testing',
      ],
      bn: [
        'থার্মোডাইনামিক পি-এইচ ডায়াগ্রাম ও সুপারহিট ক্যালকুলেশন',
        'R32 ও R410A নাইট্রোজেন প্রেশার লিক টেস্ট (৪০০ পিএসআই পর্যন্ত)',
        'ইনভার্টার পিসিবি আইপিএম চিপ ও অপটোকাপলার মেরামত',
        'টুইন-রোটারি বিএলডিসি মোটর মেগার ও ইনসুলেশন টেস্ট',
      ],
    },
    practicalFocus: {
      en: 'Two-stage vacuuming to 500 microns, electronic scale gas charging, and board-level component desoldering.',
      bn: 'টু-স্টেজ ভ্যাকুয়াম পাম্প দিয়ে ৫০০ মাইক্রন ভ্যাকুয়াম, ডিজিটাল স্কেলে গ্যাস রিফিল ও সার্কিট বোর্ড সোল্ডারিং।',
    },
  },
  {
    id: 'course-2',
    code: 'WM-202',
    title: {
      en: 'Front & Top Load Washer Electronics & Mechanics',
      bn: 'ফ্রন্ট ও টপ লোড ওয়াশার ইলেকট্রনিক্স ও মেকানিক্স',
    },
    duration: { en: '3 Weeks (Hands-on Workshop)', bn: '৩ সপ্তাহ (ওয়ার্কশপ ট্রেনিং)' },
    level: { en: 'Basic to Professional', bn: 'প্রাথমিক থেকে প্রফেশনাল' },
    topics: {
      en: [
        'Direct-Drive BLDC Motor Hall Sensor Frequency Diagnostics',
        'Complete Tub Disassembly, Spider Arm Casting & Dual Bearing Replacement',
        'Hydrostatic Pressure Sensor LC Oscillation Testing',
        'Digital PCB Error Code Tracing (OE, IE, UE, dE, LE, PE, TE)',
      ],
      bn: [
        'ডাইরেক্ট-ড্রাইভ মোটর হল সেন্সর ফ্রিকোয়েন্সি টেস্ট',
        'সম্পূর্ণ ড্রাম খোলা, স্পাইডার আর্ম ও ডাবল বিয়ারিং প্রতিস্থাপন',
        'হাইড্রোস্ট্যাট ওয়াটার লেভেল প্রেসার সেন্সর টেস্ট',
        'কন্ট্রোল বোর্ডের এরর কোড ডায়াগনসিস (OE, IE, UE, dE, LE, PE)',
      ],
    },
    practicalFocus: {
      en: 'Heavy bearing puller tools, hydraulic shock damper calibration, and door interlock wax actuator testing.',
      bn: 'হেভি বিয়ারিং পুলার দিয়ে বিয়ারিং খোলা, হাইড্রোলিক ড্যাম্পার সেটিং ও ডোর ইন্টারলক মেরামত।',
    },
  },
  {
    id: 'course-3',
    code: 'REF-101',
    title: {
      en: 'No-Frost Refrigerator Defrost Circuitry & Hermetic Brazing',
      bn: 'নো-ফ্রস্ট রেফ্রিজারেটর ডিফ্রস্ট সার্কিট ও কপার ব্রেজিং',
    },
    duration: { en: '3 Weeks (Field Practicum)', bn: '৩ সপ্তাহ (ফিল্ড প্র্যাকটিকাম)' },
    level: { en: 'Technician Level', bn: 'টেকনিশিয়ান লেভেল' },
    topics: {
      en: [
        'Automatic Defrost Timer & Bimetal Thermostat Snap Action Cycles',
        'Oxy-Acetylene / MAPP Gas Copper-to-Copper & Copper-to-Steel Brazing',
        'PTC Starter Ceramic Relay & Thermal Overload Protector (OLP) Logic',
        'Capillary Tube Sludge Flushing with R141b & Filter Drier Replacement',
      ],
      bn: [
        'অটোমেটিক ডিফ্রস্ট টাইমার ও বাইমেটাল সুইচ সাইকেল পরিচালনা',
        'ম্যাপ গ্যাস দিয়ে কপার-টু-কপার ও কপার-টু-স্টিল পাইপ ব্রেজিং',
        'পিটিসি স্টার্টার সিরামিক রিলে ও ওএলপি ওভারলোড প্রোটেকশন টেস্ট',
        'R141b কেমিক্যাল ফ্লাশিং দিয়ে ক্যাপিলারি জ্যাম পরিষ্কার ও ড্রায়ার পরিবর্তন',
      ],
    },
    practicalFocus: {
      en: 'Capillary tube unchoking, flame brazing leak-free joints, and Isobutane (R600a) explosive-safe vacuum charging.',
      bn: 'ক্যাপিলারি পাইপ জ্যাম ওয়াশ, লিকেজমুক্ত ব্রেজিং এবং R600a গ্যাস নিরাপদে চার্জিং।',
    },
  },
];
