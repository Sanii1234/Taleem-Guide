export const SITE = { name: 'Taleem Guide PK', tagline: 'Scholarships, universities, admissions and entry tests in Pakistan' };

export const scholarships = [
  { slug: 'hec-need-based', name: 'HEC Need Based Scholarship', provider: 'Higher Education Commission', level: 'Undergraduate', covers: 'Tuition and a living stipend at public universities', eligibility: ['Pakistani citizen admitted to a public-sector university', 'Family income within the limit HEC sets for the year', 'Merit and domicile conditions may apply'], how: ['Create or log in to your account on the HEC scholarship portal', 'Fill in family income and admission details', 'Upload documents and submit before the portal closes'], summary: 'Government support that helps students from low-income families finish a degree at a public university.' },
  { slug: 'fulbright-pakistan', name: 'Fulbright Scholarship', provider: 'USEFP (US-Pakistan)', level: "Master's / PhD", covers: 'Tuition, travel, monthly stipend and health insurance', eligibility: ['Pakistani citizen with a 16-year degree', 'Strong academic record and English test score', 'Return to Pakistan after the program'], how: ['Check the field and level on the USEFP website', 'Prepare essays, references and transcripts', 'Submit the online application and attend interviews'], summary: 'The best-known US-funded route to a master’s or PhD at an American university.' },
  { slug: 'chevening', name: 'Chevening Scholarship', provider: 'UK Government', level: "Master's (1 year)", covers: 'Tuition, flights, monthly allowance', eligibility: ['Pakistani citizen with at least two years of work experience', 'Undergraduate degree accepted by UK universities', 'Apply to three eligible UK courses'], how: ['Choose three UK courses', 'Write four essays on leadership, networking and study plans', 'Submit and prepare for the interview'], summary: 'A one-year UK master’s for emerging leaders. Work experience matters as much as grades.' },
  { slug: 'commonwealth', name: 'Commonwealth Scholarship', provider: 'Commonwealth Scholarship Commission', level: "Master's / PhD", covers: 'Tuition, airfare and living costs in the UK', eligibility: ['Pakistani citizen unable to afford UK study', 'Strong first degree', 'Plan that links to development in Pakistan'], how: ['Apply through the nominating agency for Pakistan', 'Submit a clear development case', 'Wait for the shortlist and interview'], summary: 'UK-funded study for students who could not otherwise afford it.' },
  { slug: 'stipendium-hungaricum', name: 'Stipendium Hungaricum', provider: 'Hungary, with HEC', level: 'Bachelor’s / Master’s / PhD', covers: 'Tuition, accommodation support and monthly stipend', eligibility: ['Pakistani citizen', 'Required academic marks for the chosen level', 'English proficiency proof'], how: ['Select a Hungarian university program', 'Apply on the Stipendium Hungaricum portal', 'Send required documents to HEC if asked'], summary: 'A fully funded path to study in Hungary, with HEC handling the Pakistan side.' },
  { slug: 'peef', name: 'PEEF Scholarship', provider: 'Punjab Educational Endowment Fund', level: 'Intermediate to University', covers: 'Tuition and a stipend', eligibility: ['Punjab domicile', 'Merit and financial need', 'Enrolled in a recognized institution'], how: ['Register on the PEEF portal', 'Enter result and family details', 'Submit the form and keep the tracking ID'], summary: 'Punjab-based support for bright students from families with limited means.' },
];

export const universities = [
  { name: 'NUST', city: 'Islamabad', type: 'Public', known: 'Engineering, computing, sciences', test: 'NUST Entry Test (NET)' },
  { name: 'LUMS', city: 'Lahore', type: 'Private', known: 'Business, law, humanities, computing', test: 'SAT or LUMS test' },
  { name: 'FAST-NUCES', city: 'Islamabad, Lahore, Karachi, Peshawar', type: 'Private', known: 'Computer science, software engineering', test: 'FAST admission test' },
  { name: 'GIKI', city: 'Swabi, KP', type: 'Private', known: 'Engineering', test: 'GIKI admission test' },
  { name: 'Quaid-i-Azam University', city: 'Islamabad', type: 'Public', known: 'Natural sciences, social sciences', test: 'University merit and test' },
  { name: 'UET Lahore', city: 'Lahore', type: 'Public', known: 'Engineering and technology', test: 'ECAT' },
  { name: 'COMSATS University', city: 'Islamabad and campuses', type: 'Public', known: 'Computing, engineering, management', test: 'NTS-style university test' },
  { name: 'Aga Khan University', city: 'Karachi', type: 'Private', known: 'Medicine, nursing', test: 'AKU test' },
  { name: 'IBA Karachi', city: 'Karachi', type: 'Public', known: 'Business, economics, computer science', test: 'IBA test' },
  { name: 'University of Haripur', city: 'Haripur, KP', type: 'Public', known: 'Sciences, computing, management', test: 'University merit' },
];

export const deadlines = [
  { name: 'Chevening (UK)', window: 'Usually closes early November', link: '/scholarships/chevening' },
  { name: 'Fulbright (USA)', window: 'Usually opens mid-year', link: '/scholarships/fulbright-pakistan' },
  { name: 'MDCAT (medical)', window: 'Usually registers in summer', link: '/entry-tests' },
  { name: 'Public university Fall intake', window: 'Usually June to September', link: '/admissions' },
  { name: 'NUST NET series', window: 'Several series, winter to summer', link: '/entry-tests' },
  { name: 'HEC Need Based', window: 'Opens after admission lists', link: '/scholarships/hec-need-based' },
];

export const tests = [
  { name: 'MDCAT', for: 'MBBS and BDS', body: 'PM&DC', tips: ['Master the FSc biology, chemistry, physics and English syllabus', 'Solve past papers under timed conditions', 'Review mistakes in a notebook each week'] },
  { name: 'ECAT', for: 'Engineering at UET Lahore and Punjab engineering universities', body: 'UET Lahore', tips: ['Focus on maths and physics numericals', 'Practice speed on formula-based questions', 'Take weekly full-length mocks'] },
  { name: 'NUST NET', for: 'NUST engineering, computing, business', body: 'NUST', tips: ['Know the mix of maths, physics and English', 'Register for more than one NET series if allowed', 'Practice negative-marking strategy'] },
  { name: 'FAST test', for: 'Computer science and engineering at FAST-NUCES', body: 'FAST-NUCES', tips: ['Strengthen basic maths and analytical reasoning', 'Practice sample papers from the FAST website', 'Keep time for the English section'] },
  { name: 'SAT / LUMS', for: 'LUMS undergraduate programs', body: 'College Board / LUMS', tips: ['Take a full practice test first', 'Work on reading and algebra', 'Book your test date early'] },
];

export const posts = [
  { slug: 'how-to-write-a-scholarship-essay', title: 'How to write a scholarship essay that gets read', date: '2026-10-01', read: '6 min', excerpt: 'A simple structure you can follow for Fulbright, Chevening and local scholarships.', body: ['Start with one real moment that shows why you want this degree. Selectors read hundreds of essays, and a specific story is easier to remember than a general claim.', 'Next, connect that moment to your academic or work record. Name the course, the lab or the project you want to join, and explain why that place fits your goal.', 'Finish with what you will do after the scholarship. Funders want to see impact on Pakistan, so state a concrete plan, not a wish.', 'Edit last. Cut repeated words, check the word limit and ask a teacher to read it once.'] },
  { slug: 'documents-checklist-for-admission', title: 'Documents checklist for university admission in Pakistan', date: '2026-09-20', read: '4 min', excerpt: 'Keep these papers ready before the portal opens so you never miss a deadline.', body: ['Gather your matric and intermediate result cards and certificates, and keep scanned copies in one folder.', 'Prepare your CNIC or B-Form, domicile certificate and recent photographs in the size the portal asks for.', 'If you are applying for need-based aid, collect income proof and utility bills early. These take the longest to arrange.', 'Always read the prospectus of each university, because requirements and fee challan rules differ.'] },
  { slug: 'how-to-choose-a-university', title: 'How to choose the right university in Pakistan', date: '2026-09-05', read: '5 min', excerpt: 'Compare programs by accreditation, fee, location and what graduates actually do.', body: ['Check that the university and your program are recognized by HEC, and by the relevant council such as PEC for engineering or PM&DC for medicine.', 'Compare total cost, not just tuition. Add hostel, transport and books, then look at scholarships and fee waivers.', 'Look at where recent graduates work. Department pages and LinkedIn will show you real outcomes.', 'Apply to a mix of reach, match and safe options so you still have choices if one test goes badly.'] },
];
