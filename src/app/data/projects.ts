// Bilingual content structure
type BilingualText = {
  en: string;
  id: string;
};

type BilingualArray = {
  en: string[];
  id: string[];
};

export type Project = {
  id: number;
  slug: string;
  title: string; // Title stays in original language (no translation)
  role: BilingualText;
  year: string;
  impact: BilingualText;
  thumbnailImage: string; // Thumbnail on home + hero banner on detail
  challenge: BilingualText;
  solution: BilingualText;
  results: BilingualArray;
  designScreens: {
    image: string;
    title: BilingualText;
    subtitle: BilingualText;
  }[]; // Design Screens section with titles and descriptions
  userFlow?: {
    description: BilingualText;
    images: string[];
  }; // User Flow section (optional) with description
  projectUrl: string;
  overview: {
    description: BilingualText;
    timeline: BilingualText;
    platform: BilingualText;
    methodology: BilingualText;
  };
  problemStatement: BilingualArray;
  howMightWe?: BilingualArray;
  research: {
    title: BilingualText;
    findings: BilingualArray;
  }[];
  personas: {
    title: BilingualText;
    name: string;
    occupation: BilingualText;
    goals: BilingualArray;
    painPoints: BilingualArray;
  }[];
  userJourneyMap: {
    persona: BilingualText;
    stages: {
      stage: BilingualText;
      action: BilingualText;
      thoughts: BilingualText;
      painPoints: BilingualText;
      opportunity: BilingualText;
    }[];
  }[];
  solutionStrategy: {
    title: BilingualText;
    description: BilingualText;
  }[];
  usabilityTesting: {
    participants: BilingualText;
    keyTasks?: BilingualArray;
    results: BilingualArray;
    keyFindings?: BilingualArray;
    iterations: BilingualArray;
  };
  keyLearnings: BilingualArray;
};

export const portfolioProjects: Project[] = [
  {
    id: 1,
    slug: "kelola-keuangan",
    title: "Kelola Keuangan – Personal Finance Management App",
    role: {
      en: "Product / UI/UX Designer",
      id: "Product / UI/UX Designer"
    },
    year: "2026",
    impact: {
      en: "Progressive Web App designed to help users manage income, expenses, savings, budgets, bills, and financial goals in a simple and structured way — without spreadsheets.",
      id: "Progressive Web App yang dirancang untuk membantu pengguna mengelola pemasukan, pengeluaran, tabungan, anggaran, tagihan, dan target finansial dengan cara yang sederhana dan terstruktur — tanpa spreadsheet."
    },
    thumbnailImage: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/thumbnail/thumbnail.png",
    challenge: {
      en: "How might we design a finance app that is simple, intuitive, and reduces user anxiety when managing money?",
      id: "Bagaimana kami dapat merancang aplikasi keuangan yang sederhana, intuitif, dan mengurangi kecemasan pengguna saat mengelola uang?"
    },
    solution: {
      en: "Focused on clarity, speed, and emotional comfort with smart dashboard, quick add expense feature, visual budget tracker, and goal-based saving system.",
      id: "Berfokus pada kejelasan, kecepatan, dan kenyamanan emosional dengan dashboard pintar, fitur tambah pengeluaran cepat, pelacak anggaran visual, dan sistem tabungan berbasis target."
    },
    results: {
      en: [
        "80% of users reported increased spending awareness",
        "Reduced friction in expense logging",
        "Improved confidence in budgeting decisions",
        "Task success rate: 92%",
        "3/5 users expected to see transaction breakdown inside Budget & Savings",
        "SUS Score: 84 (Excellent)"
      ],
      id: [
        "80% pengguna melaporkan peningkatan kesadaran pengeluaran",
        "Mengurangi hambatan dalam pencatatan pengeluaran",
        "Meningkatkan kepercayaan dalam keputusan anggaran",
        "Tingkat keberhasilan tugas: 92%",
        "3/5 pengguna mengharapkan rincian transaksi di dalam Budget & Savings",
        "Skor SUS: 84 (Excellent)"
      ]
    },
    designScreens: [
      {
        image: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%201.png",
        title: {
          en: "Financial Overview in One View",
          id: "Tinjauan Finansial dalam Satu Tampilan"
        },
        subtitle: {
          en: "View all your important financial information in one place. The dashboard provides a clear and comprehensive overview of your current financial condition.",
          id: "Lihat semua informasi finansial penting Anda di satu tempat. Dashboard memberikan tinjauan yang jelas dan komprehensif tentang kondisi finansial Anda saat ini."
        }
      },
      {
        image: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%202.png",
        title: {
          en: "3 More Flexible Transaction Types",
          id: "3 Jenis Transaksi yang Lebih Fleksibel"
        },
        subtitle: {
          en: "Easily record all your financial activities. Savings are no longer treated as \"expenses,\" creating a healthier psychological approach to managing money.",
          id: "Catat semua aktivitas finansial Anda dengan mudah. Tabungan tidak lagi diperlakukan sebagai \"pengeluaran,\" menciptakan pendekatan psikologis yang lebih sehat dalam mengelola uang."
        }
      },
      {
        image: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%203.png",
        title: {
          en: "Control Spending with Budget Limits",
          id: "Kontrol Pengeluaran dengan Batas Anggaran"
        },
        subtitle: {
          en: "Set spending limits for each category and monitor usage in real time. The app provides visual notifications as you approach your limit.",
          id: "Tetapkan batas pengeluaran untuk setiap kategori dan pantau penggunaan secara real-time. Aplikasi memberikan notifikasi visual saat Anda mendekati batas."
        }
      },
      {
        image: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%204.png",
        title: {
          en: "Manage Your Savings and Investments",
          id: "Kelola Tabungan dan Investasi Anda"
        },
        subtitle: {
          en: "Separate savings from expenses. Create multiple savings types with individual targets and track their progress easily.",
          id: "Pisahkan tabungan dari pengeluaran. Buat berbagai jenis tabungan dengan target individu dan lacak kemajuannya dengan mudah."
        }
      },
      {
        image: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%205.png",
        title: {
          en: "Plan Big Events with a Dedicated Budget",
          id: "Rencanakan Acara Besar dengan Anggaran Khusus"
        },
        subtitle: {
          en: "Set up a specific budget for special occasions like weddings, vacations, or home renovations. Track event-related expenses separately and stay within your planned budget.",
          id: "Buat anggaran khusus untuk acara spesial seperti pernikahan, liburan, atau renovasi rumah. Lacak pengeluaran terkait acara secara terpisah dan tetap dalam anggaran yang direncanakan."
        }
      },
      {
        image: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%206.png",
        title: {
          en: "Never Miss a Bill Again",
          id: "Tidak Akan Pernah Melewatkan Tagihan Lagi"
        },
        subtitle: {
          en: "Manage all your recurring monthly bills in one place. Automatic reminders ensure you never miss a payment.",
          id: "Kelola semua tagihan bulanan berulang Anda di satu tempat. Pengingat otomatis memastikan Anda tidak pernah melewatkan pembayaran."
        }
      },
      {
        image: "http://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/design%20screen/screen%20-%207.png",
        title: {
          en: "Financial Analysis with Data Visualization",
          id: "Analisis Finansial dengan Visualisasi Data"
        },
        subtitle: {
          en: "View your financial trends through various graphs and charts. Export reports to PDF or Excel for documentation.",
          id: "Lihat tren finansial Anda melalui berbagai grafik dan chart. Ekspor laporan ke PDF atau Excel untuk dokumentasi."
        }
      }
    ],
    userFlow: {
      description: {
        en: "This user flow maps out the complete journey of adding a new expense transaction — from opening the quick-add feature to final confirmation. The flow emphasizes speed and clarity, allowing users to log expenses in under 10 seconds while maintaining accurate categorization and budget tracking. Key decision points include transaction type selection, category assignment, and optional note addition.",
        id: "User flow ini memetakan perjalanan lengkap menambahkan transaksi pengeluaran baru — dari membuka fitur quick-add hingga konfirmasi akhir. Flow ini menekankan kecepatan dan kejelasan, memungkinkan pengguna mencatat pengeluaran dalam waktu kurang dari 10 detik sambil mempertahankan kategorisasi yang akurat dan pelacakan anggaran. Titik keputusan kunci mencakup pemilihan jenis transaksi, penugasan kategori, dan penambahan catatan opsional."
      },
      images: [
        "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/kelola%20keuangan/user%20flow/userflow.png"
      ]
    },
    projectUrl: "https://kelola-keuangan-testing.netlify.app/",
    overview: {
      description: {
        en: "Kelola Keuangan is a Progressive Web App designed to help users manage income, expenses, savings, budgets, bills, and financial goals in a simple and structured way — without spreadsheets.",
        id: "Kelola Keuangan adalah Progressive Web App yang dirancang untuk membantu pengguna mengelola pemasukan, pengeluaran, tabungan, anggaran, tagihan, dan target finansial dengan cara yang sederhana dan terstruktur — tanpa spreadsheet."
      },
      timeline: {
        en: "4 Weeks",
        id: "4 Minggu"
      },
      platform: {
        en: "Progressive Web App (Mobile-first)",
        id: "Progressive Web App (Mobile-first)"
      },
      methodology: {
        en: "User-Centered Design",
        id: "User-Centered Design"
      }
    },
    problemStatement: {
      en: [
        "National financial literacy in Indonesia remains moderate — only 65.43% of the population demonstrates sufficient financial literacy, according to the 2024 National Survey of Financial Literacy and Inclusion by BPS and OJK, indicating a gap between financial service usage and financial understanding. (Source: https://patikab.bps.go.id/en/news/2024/08/01/746/indeks-literasi-keuangan-penduduk-indonesia-sebesar-65-34-persen.html)",
        "Many beginners struggle to start managing finances using spreadsheets (categories, formulas, setup complexity).",
        "Users realize overspending only at the end of the month due to lack of real-time visibility.",
        "Managing multiple savings types (emergency fund, investment, personal savings) consistently is difficult.",
        "Generating monthly or yearly financial comparisons is complicated for non-finance users."
      ],
      id: [
        "Literasi keuangan nasional di Indonesia masih moderat — hanya 65,43% penduduk menunjukkan literasi keuangan yang memadai, menurut Survei Nasional Literasi dan Inklusi Keuangan 2024 oleh BPS dan OJK, mengindikasikan adanya kesenjangan antara penggunaan layanan keuangan dan pemahaman finansial. (Sumber: https://patikab.bps.go.id/en/news/2024/08/01/746/indeks-literasi-keuangan-penduduk-indonesia-sebesar-65-34-persen.html)",
        "Banyak pemula kesulitan memulai mengelola keuangan menggunakan spreadsheet (kategori, rumus, kompleksitas setup).",
        "Pengguna baru menyadari overspending di akhir bulan karena kurangnya visibilitas real-time.",
        "Mengelola berbagai jenis tabungan (dana darurat, investasi, tabungan pribadi) secara konsisten sulit dilakukan.",
        "Menghasilkan perbandingan keuangan bulanan atau tahunan rumit untuk pengguna non-finansial."
      ]
    },
    howMightWe: {
      en: [
        "How might we help users track their finances without requiring spreadsheet expertise or complex setup?",
        "How might we provide real-time spending visibility so users can prevent overspending before it happens?",
        "How might we make it easy for users to separate and manage multiple savings goals transparently?",
        "How might we create budget controls that are preventive rather than just tracking past behavior?",
        "How might we generate actionable financial insights that non-finance users can understand and use?"
      ],
      id: [
        "Bagaimana kami dapat membantu pengguna melacak keuangan mereka tanpa memerlukan keahlian spreadsheet atau setup yang rumit?",
        "Bagaimana kami dapat memberikan visibilitas pengeluaran real-time sehingga pengguna dapat mencegah overspending sebelum terjadi?",
        "Bagaimana kami dapat memudahkan pengguna untuk memisahkan dan mengelola berbagai target tabungan secara transparan?",
        "Bagaimana kami dapat membuat kontrol anggaran yang preventif daripada hanya melacak perilaku masa lalu?",
        "Bagaimana kami dapat menghasilkan insight finansial yang dapat dipahami dan digunakan oleh pengguna non-finansial?"
      ]
    },
    research: [
      {
        title: {
          en: "1. User Interviews (3 Participants)",
          id: "1. Wawancara Pengguna (3 Partisipan)"
        },
        findings: {
          en: [
            "Beginners feel overwhelmed setting up spreadsheets (categories & formulas)",
            "Users struggle to separate and track multiple savings types",
            "Borrowing from savings often goes untracked",
            "Users want simple budget control without complex setup",
            "They prefer seeing financial summaries in one main screen"
          ],
          id: [
            "Pemula merasa kewalahan saat setup spreadsheet (kategori & rumus)",
            "Pengguna kesulitan memisahkan dan melacak berbagai jenis tabungan",
            "Meminjam dari tabungan sering tidak tercatat",
            "Pengguna menginginkan kontrol anggaran sederhana tanpa setup rumit",
            "Mereka lebih suka melihat ringkasan finansial di satu layar utama"
          ]
        }
      },
      {
        title: {
          en: "2. Competitor Analysis",
          id: "2. Analisis Kompetitor"
        },
        findings: {
          en: [
            "Reviewed: Money Lover, Catatan Keuangan, Finansialku, blu by BCA Digital"
          ],
          id: [
            "Dianalisis: Money Lover, Catatan Keuangan, Finansialku, blu by BCA Digital"
          ]
        }
      },
      {
        title: {
          en: "3. Unresolved User Problems",
          id: "3. Masalah Pengguna yang Belum Terselesaikan"
        },
        findings: {
          en: [
            "Still require manual category setup that overwhelms beginners",
            "Savings separation is not always intuitive or psychologically clear",
            "Borrowing from savings is difficult to track transparently",
            "Budgeting features focus on tracking, not preventive control",
            "Event-based budgeting (wedding, travel, renovation) is not well structured",
            "Reporting feels complex for users who just want quick insights"
          ],
          id: [
            "Masih memerlukan setup kategori manual yang membingungkan pemula",
            "Pemisahan tabungan tidak selalu intuitif atau jelas secara psikologis",
            "Meminjam dari tabungan sulit dilacak secara transparan",
            "Fitur budgeting fokus pada pelacakan, bukan kontrol preventif",
            "Budgeting berbasis acara (pernikahan, travel, renovasi) tidak terstruktur dengan baik",
            "Laporan terasa kompleks untuk pengguna yang hanya ingin insight cepat"
          ]
        }
      }
    ],
    personas: [
      {
        title: {
          en: "👤 User Persona 01 — Single Professional",
          id: "👤 User Persona 01 — Profesional Lajang"
        },
        name: "Stella, 27",
        occupation: {
          en: "Marketing Executive",
          id: "Marketing Executive"
        },
        goals: {
          en: [
            "Build a 6-month emergency fund",
            "Separate savings (emergency, investment, personal)",
            "Control impulsive spending",
            "Track monthly financial progress"
          ],
          id: [
            "Membangun dana darurat 6 bulan",
            "Memisahkan tabungan (darurat, investasi, pribadi)",
            "Mengontrol pengeluaran impulsif",
            "Melacak progres keuangan bulanan"
          ]
        },
        painPoints: {
          en: [
            "Confused starting with spreadsheets (categories & formulas)",
            "Borrowing from savings often goes untracked",
            "No clear budget warning system",
            "Difficult to generate monthly reports"
          ],
          id: [
            "Bingung memulai dengan spreadsheet (kategori & rumus)",
            "Meminjam dari tabungan sering tidak tercatat",
            "Tidak ada sistem peringatan anggaran yang jelas",
            "Sulit menghasilkan laporan bulanan"
          ]
        }
      },
      {
        title: {
          en: "👤 User Persona 02 — Family-Oriented Professional",
          id: "👤 User Persona 02 — Profesional Berkeluarga"
        },
        name: "Andi, 35",
        occupation: {
          en: "Operations Manager",
          id: "Operations Manager"
        },
        goals: {
          en: [
            "Manage household monthly expenses",
            "Plan budgets for children's needs & family events",
            "Track savings (education fund, emergency fund, investment)",
            "Monitor yearly financial growth"
          ],
          id: [
            "Mengelola pengeluaran bulanan rumah tangga",
            "Merencanakan anggaran untuk kebutuhan anak & acara keluarga",
            "Melacak tabungan (dana pendidikan, dana darurat, investasi)",
            "Memantau pertumbuhan keuangan tahunan"
          ]
        },
        painPoints: {
          en: [
            "Struggles dividing income into multiple financial buckets",
            "Event spending disrupts monthly budget",
            "Hard to compare financial data across periods",
            "Needs structured bill reminders"
          ],
          id: [
            "Kesulitan membagi pendapatan ke berbagai pos keuangan",
            "Pengeluaran acara mengganggu anggaran bulanan",
            "Sulit membandingkan data keuangan antar periode",
            "Membutuhkan pengingat tagihan terstruktur"
          ]
        }
      }
    ],
    userJourneyMap: [
      {
        persona: {
          en: "Persona 1: Stella (Single, 27, Marketing Executive)",
          id: "Persona 1: Stella (Lajang, 27, Marketing Executive)"
        },
        stages: [
          {
            stage: { en: "Awareness", id: "Kesadaran" },
            action: { en: "Realizes salary runs out too fast", id: "Menyadari gaji cepat habis" },
            thoughts: { en: "Where did my money go?", id: "Kemana uang saya pergi?" },
            painPoints: { en: "No tracking habit", id: "Tidak ada kebiasaan mencatat" },
            opportunity: { en: "Clear value proposition: \"See everything in one dashboard\"", id: "Proposisi nilai yang jelas: \"Lihat semua di satu dashboard\"" }
          },
          {
            stage: { en: "Consideration", id: "Pertimbangan" },
            action: { en: "Tries using spreadsheet", id: "Mencoba menggunakan spreadsheet" },
            thoughts: { en: "This is confusing…", id: "Ini membingungkan…" },
            painPoints: { en: "Categories & formulas are complicated", id: "Kategori & rumus rumit" },
            opportunity: { en: "Offer ready-to-use structured system", id: "Tawarkan sistem terstruktur siap pakai" }
          },
          {
            stage: { en: "Onboarding", id: "Onboarding" },
            action: { en: "Installs & explores app", id: "Install & eksplorasi aplikasi" },
            thoughts: { en: "Looks simple.", id: "Terlihat sederhana." },
            painPoints: { en: "Afraid it will be complex", id: "Takut akan rumit" },
            opportunity: { en: "Minimal onboarding & clean UI", id: "Onboarding minimal & UI bersih" }
          },
          {
            stage: { en: "First Use", id: "Penggunaan Pertama" },
            action: { en: "Adds first expense", id: "Menambah pengeluaran pertama" },
            thoughts: { en: "Oh, that was fast.", id: "Oh, cepat sekali." },
            painPoints: { en: "Doesn't want friction", id: "Tidak mau hambatan" },
            opportunity: { en: "1-tap quick add with auto category", id: "Quick add 1-tap dengan kategori otomatis" }
          },
          {
            stage: { en: "Budget Setup", id: "Setup Anggaran" },
            action: { en: "Creates monthly budget", id: "Membuat anggaran bulanan" },
            thoughts: { en: "Can I stay consistent?", id: "Bisakah saya konsisten?" },
            painPoints: { en: "Hard to monitor limits", id: "Sulit memantau batas" },
            opportunity: { en: "Color-based progress feedback", id: "Feedback progress berbasis warna" }
          },
          {
            stage: { en: "Saving Goal", id: "Target Tabungan" },
            action: { en: "Sets emergency fund target", id: "Menentukan target dana darurat" },
            thoughts: { en: "I want to hit this target.", id: "Saya ingin capai target ini." },
            painPoints: { en: "Motivation drops easily", id: "Motivasi mudah turun" },
            opportunity: { en: "Visual progress & motivational microcopy", id: "Progress visual & microcopy motivasi" }
          },
          {
            stage: { en: "Monthly Review", id: "Review Bulanan" },
            action: { en: "Checks report", id: "Mengecek laporan" },
            thoughts: { en: "Now I understand my spending.", id: "Sekarang saya paham pengeluaran saya." },
            painPoints: { en: "Hard to analyze manually before", id: "Sulit analisis manual sebelumnya" },
            opportunity: { en: "Simple visual reports & comparisons", id: "Laporan visual sederhana & perbandingan" }
          }
        ]
      },
      {
        persona: {
          en: "Persona 2: Andi (Married, 35, Operations Manager)",
          id: "Persona 2: Andi (Menikah, 35, Operations Manager)"
        },
        stages: [
          {
            stage: { en: "Awareness", id: "Kesadaran" },
            action: { en: "Family expenses feel overwhelming", id: "Pengeluaran keluarga terasa berat" },
            thoughts: { en: "Our expenses keep increasing.", id: "Pengeluaran kami terus meningkat." },
            painPoints: { en: "No centralized tracking", id: "Tidak ada pelacakan terpusat" },
            opportunity: { en: "Dashboard with total balance overview", id: "Dashboard dengan overview saldo total" }
          },
          {
            stage: { en: "Bill Management", id: "Manajemen Tagihan" },
            action: { en: "Tracks recurring bills", id: "Melacak tagihan berulang" },
            thoughts: { en: "Did we pay electricity?", id: "Sudah bayar listrik?" },
            painPoints: { en: "Missed payments", id: "Terlewat bayar" },
            opportunity: { en: "Bill reminder system", id: "Sistem pengingat tagihan" }
          },
          {
            stage: { en: "Budget Planning", id: "Perencanaan Anggaran" },
            action: { en: "Sets budget for groceries & kids", id: "Menentukan anggaran belanja & anak" },
            thoughts: { en: "Need better control.", id: "Perlu kontrol lebih baik." },
            painPoints: { en: "Budget often exceeded", id: "Anggaran sering terlampaui" },
            opportunity: { en: "Real-time budget monitoring", id: "Monitoring anggaran real-time" }
          },
          {
            stage: { en: "Savings Allocation", id: "Alokasi Tabungan" },
            action: { en: "Divides savings (emergency, education, investment)", id: "Membagi tabungan (darurat, pendidikan, investasi)" },
            thoughts: { en: "I need everything separated.", id: "Saya butuh semuanya terpisah." },
            painPoints: { en: "Hard to track multiple savings manually", id: "Sulit melacak berbagai tabungan manual" },
            opportunity: { en: "Multi-saving goal structure", id: "Struktur multi-target tabungan" }
          },
          {
            stage: { en: "Event Planning", id: "Perencanaan Acara" },
            action: { en: "Plans family vacation", id: "Merencanakan liburan keluarga" },
            thoughts: { en: "How much have we spent?", id: "Berapa sudah kita habiskan?" },
            painPoints: { en: "Event expenses mix with regular spending", id: "Pengeluaran acara campur dengan rutin" },
            opportunity: { en: "Dedicated Event Budget feature", id: "Fitur Event Budget khusus" }
          },
          {
            stage: { en: "Review", id: "Review" },
            action: { en: "Checks monthly report with spouse", id: "Mengecek laporan bulanan dengan pasangan" },
            thoughts: { en: "Now we have clarity.", id: "Sekarang kami punya kejelasan." },
            painPoints: { en: "Hard to compare periods before", id: "Sulit membandingkan periode sebelumnya" },
            opportunity: { en: "Monthly & yearly comparison reports", id: "Laporan perbandingan bulanan & tahunan" }
          }
        ]
      }
    ],
    solutionStrategy: [
      {
        title: {
          en: "1. Clear Financial Visibility",
          id: "1. Visibilitas Finansial yang Jelas"
        },
        description: {
          en: "A smart dashboard that shows total balance, income vs expense comparison, budget status, savings progress, and bill reminders — all in one structured view.",
          id: "Dashboard pintar yang menampilkan saldo total, perbandingan pemasukan vs pengeluaran, status anggaran, progress tabungan, dan pengingat tagihan — semua dalam satu tampilan terstruktur."
        }
      },
      {
        title: {
          en: "2. Simplified Money Tracking System",
          id: "2. Sistem Pelacakan Uang yang Disederhanakan"
        },
        description: {
          en: "Three clear transaction types (Income, Expense, Savings) with fast input flow and flexible fund allocation to eliminate tracking confusion.",
          id: "Tiga tipe transaksi yang jelas (Pemasukan, Pengeluaran, Tabungan) dengan alur input cepat dan alokasi dana fleksibel untuk menghilangkan kebingungan pelacakan."
        }
      },
      {
        title: {
          en: "3. Preventive Budget & Goal Control",
          id: "3. Kontrol Anggaran & Target Preventif"
        },
        description: {
          en: "Real-time budget monitoring with color alerts, structured savings buckets, and event-based budgeting to support proactive financial planning.",
          id: "Monitoring anggaran real-time dengan alert warna, bucket tabungan terstruktur, dan budgeting berbasis acara untuk mendukung perencanaan finansial proaktif."
        }
      },
      {
        title: {
          en: "4. Actionable Financial Insights",
          id: "4. Insight Finansial yang Actionable"
        },
        description: {
          en: "Clean visual reports with period comparison and export options (PDF & Excel) for better decision-making and documentation.",
          id: "Laporan visual bersih dengan perbandingan periode dan opsi ekspor (PDF & Excel) untuk pengambilan keputusan dan dokumentasi yang lebih baik."
        }
      }
    ],
    usabilityTesting: {
      participants: {
        en: "3 participants (1 single professional, 2 married professionals)",
        id: "3 partisipan (1 profesional lajang, 2 profesional menikah)"
      },
      keyTasks: {
        en: [
          "Add a transaction",
          "Set a budget",
          "Track savings",
          "Generate a report"
        ],
        id: [
          "Menambah transaksi",
          "Menentukan anggaran",
          "Melacak tabungan",
          "Menghasilkan laporan"
        ]
      },
      results: {
        en: [
          "3/3 users added a transaction in under 10 seconds",
          "Task success rate: 92%",
          "2/3 users expected to see transaction breakdown inside Budget & Savings",
          "SUS Score: 84 (Excellent)"
        ],
        id: [
          "3/3 pengguna menambah transaksi dalam waktu kurang dari 10 detik",
          "Tingkat keberhasilan tugas: 92%",
          "2/3 pengguna mengharapkan rincian transaksi di dalam Budget & Savings",
          "Skor SUS: 84 (Excellent)"
        ]
      },
      keyFindings: {
        en: [
          "Admin needed clearer visual session status (Waiting / In Session / Editing / Delivered)",
          "Promo selection required clearer price preview before confirmation",
          "Owner preferred revenue summary visible immediately on login"
        ],
        id: [
          "Admin membutuhkan status sesi visual yang lebih jelas (Waiting / In Session / Editing / Delivered)",
          "Pemilihan promo memerlukan preview harga yang lebih jelas sebelum konfirmasi",
          "Owner lebih suka summary pendapatan terlihat segera setelah login"
        ]
      },
      iterations: {
        en: [
          "Added Budget Detail Page to view transaction history and spending timeline",
          "Added Savings Detail Page to track withdrawals and usage history",
          "Added Event Budget Detail Page to monitor all transactions tied to each event"
        ],
        id: [
          "Menambahkan Halaman Detail Budget untuk melihat riwayat transaksi dan timeline pengeluaran",
          "Menambahkan Halaman Detail Savings untuk melacak penarikan dan riwayat penggunaan",
          "Menambahkan Halaman Detail Event Budget untuk memantau semua transaksi terkait setiap acara"
        ]
      }
    },
    keyLearnings: {
      en: [
        "Simplicity drives adoption",
        "Users need structure, not complexity",
        "Clear data visualization reduces cognitive overload",
        "Financial transparency builds confidence",
        "Detail-level access increases trust in the system"
      ],
      id: [
        "Kesederhanaan mendorong adopsi",
        "Pengguna butuh struktur, bukan kompleksitas",
        "Visualisasi data yang jelas mengurangi beban kognitif",
        "Transparansi finansial membangun kepercayaan",
        "Akses level detail meningkatkan kepercayaan pada sistem"
      ]
    }
  },
  {
    id: 2,
    slug: "holysnap-studio-management",
    title: "Holysnap – Studio Management System",
    role: {
      en: "Product / UI/UX Designer",
      id: "Product / UI/UX Designer"
    },
    year: "2026",
    impact: {
      en: "Studio management system designed to digitize and streamline daily operations of a self photo studio — including check-in, queue management, pricing, editing workflow, delivery, and business analytics.",
      id: "Sistem manajemen studio yang dirancang untuk mendigitalisasi dan menyederhanakan operasional harian self photo studio — termasuk check-in, manajemen antrian, pricing, editing workflow, delivery, dan business analytics."
    },
    thumbnailImage: "https://raw.githubusercontent.com/andriansoelistiyo/assets/refs/heads/main/holysnap/thumbnail/thumbnail.png",
    challenge: {
      en: "Transform a fully manual operational process into a scalable and data-driven system for self photo studio management.",
      id: "Mengubah proses operasional manual sepenuhnya menjadi sistem yang scalable dan data-driven untuk manajemen self photo studio."
    },
    solution: {
      en: "Designed an integrated platform covering check-in, queue management, pricing, editing workflow, delivery, and business analytics.",
      id: "Merancang platform terintegrasi yang mencakup check-in, manajemen antrian, pricing, editing workflow, delivery, dan business analytics."
    },
    results: {
      en: [
        "Reduced admin tool-switching from 4 platforms to 1 centralized system",
        "Customer check-in time reduced to under 15 seconds",
        "Photo delivery time shortened from ±10 minutes to under 3 minutes per session",
        "Owner gained real-time access to daily revenue and session data",
        "Improved operational consistency through standardized grid templates"
      ],
      id: [
        "Mengurangi perpindahan tool admin dari 4 platform ke 1 sistem terpusat",
        "Waktu check-in pelanggan berkurang menjadi di bawah 15 detik",
        "Waktu delivery foto diperpendek dari ±10 menit menjadi di bawah 3 menit per sesi",
        "Owner mendapatkan akses real-time ke data pendapatan dan sesi harian",
        "Meningkatkan konsistensi operasional melalui template grid terstandarisasi"
      ]
    },
    designScreens: [],
    userFlow: {
      description: {
        en: "This section is currently in progress. User flow diagrams and detailed interaction flows are being finalized and will be available soon.",
        id: "Bagian ini sedang dalam pengerjaan. Diagram user flow dan alur interaksi detail sedang dalam proses finalisasi dan akan tersedia segera."
      },
      images: []
    },
    projectUrl: "https://small-uneven-96502327.figma.site/",
    overview: {
      description: {
        en: "Holysnap is a studio management system designed to digitize and streamline the daily operations of a self photo studio — including check-in, queue management, pricing, editing workflow, delivery, and business analytics. The goal was to transform a fully manual operational process into a scalable and data-driven system.",
        id: "Holysnap adalah sistem manajemen studio yang dirancang untuk mendigitalisasi dan menyederhanakan operasional harian self photo studio — termasuk check-in, manajemen antrian, pricing, editing workflow, delivery, dan business analytics. Tujuannya adalah mengubah proses operasional manual sepenuhnya menjadi sistem yang scalable dan data-driven."
      },
      timeline: {
        en: "4 Weeks",
        id: "4 Minggu"
      },
      platform: {
        en: "Admin Tablet & Web Dashboard",
        id: "Admin Tablet & Web Dashboard"
      },
      methodology: {
        en: "User-Centered Design",
        id: "User-Centered Design"
      }
    },
    problemStatement: {
      en: [
        "Holysnap's daily operations were handled entirely manually — including customer check-in, queue numbering, pricing adjustments, photo editing layout, file delivery, and daily reporting.",
        "Customer queue tracking was not transparent. Numbers were written manually, and customers had no visibility into their turn, creating inefficiencies during peak hours.",
        "Photo grid layouts were created manually using Canva, resulting in inconsistent output quality and heavy dependency on individual admin skills.",
        "After each session, photos had to be uploaded manually to Google Drive and shared individually with customers, increasing the risk of delivery errors.",
        "Business performance data (daily revenue, peak hours, customer trends, promo effectiveness) was recorded manually, limiting the owner's ability to make data-driven decisions."
      ],
      id: [
        "Operasional harian Holysnap ditangani sepenuhnya secara manual — termasuk check-in pelanggan, penomoran antrian, penyesuaian harga, layout editing foto, pengiriman file, dan pelaporan harian.",
        "Pelacakan antrian pelanggan tidak transparan. Nomor ditulis manual, dan pelanggan tidak memiliki visibilitas giliran mereka, menciptakan inefisiensi saat jam ramai.",
        "Layout grid foto dibuat manual menggunakan Canva, menghasilkan kualitas output yang tidak konsisten dan ketergantungan besar pada skill admin individu.",
        "Setelah setiap sesi, foto harus diupload manual ke Google Drive dan dibagikan satu per satu dengan pelanggan, meningkatkan risiko kesalahan pengiriman.",
        "Data performa bisnis (pendapatan harian, jam ramai, tren pelanggan, efektivitas promo) dicatat manual, membatasi kemampuan owner untuk membuat keputusan berbasis data."
      ]
    },
    research: [
      {
        title: {
          en: "1. Stakeholder Interviews (Owner & Admin)",
          id: "1. Wawancara Stakeholder (Owner & Admin)"
        },
        findings: {
          en: [
            "Admins spend significant time on repetitive operational tasks (manual check-in, queue numbering, editing layout, uploading files).",
            "Photo grid editing in Canva creates workflow dependency — output quality varies based on admin experience.",
            "Uploading photos manually to Google Drive and sharing links individually increases delivery time and risk of error.",
            "The owner relies on verbal updates from admins to track daily performance.",
            "There is no centralized system connecting check-in, editing, delivery, and reporting."
          ],
          id: [
            "Admin menghabiskan waktu signifikan untuk tugas operasional berulang (check-in manual, penomoran antrian, editing layout, upload file).",
            "Editing grid foto di Canva menciptakan ketergantungan workflow — kualitas output bervariasi berdasarkan pengalaman admin.",
            "Upload foto manual ke Google Drive dan berbagi link satu per satu meningkatkan waktu delivery dan risiko error.",
            "Owner bergantung pada update verbal dari admin untuk melacak performa harian.",
            "Tidak ada sistem terpusat yang menghubungkan check-in, editing, delivery, dan pelaporan."
          ]
        }
      },
      {
        title: {
          en: "2. Field Observation (1 Full Operational Day)",
          id: "2. Observasi Lapangan (1 Hari Operasional Penuh)"
        },
        findings: {
          en: [
            "Queue tracking was written manually, and customers frequently asked about their turn.",
            "Pricing adjustments and promotions were calculated manually at checkout.",
            "Admins switched between multiple tools: notebook, calculator, Canva, Google Drive, WhatsApp.",
            "End-of-day reporting was compiled manually from scattered notes.",
            "Peak-hour management lacked structured queue visibility."
          ],
          id: [
            "Pelacakan antrian ditulis manual, dan pelanggan sering menanyakan giliran mereka.",
            "Penyesuaian harga dan promosi dihitung manual saat checkout.",
            "Admin berpindah antar banyak tool: notebook, kalkulator, Canva, Google Drive, WhatsApp.",
            "Pelaporan end-of-day dikompilasi manual dari catatan yang tersebar.",
            "Manajemen jam ramai tidak memiliki visibilitas antrian terstruktur."
          ]
        }
      },
      {
        title: {
          en: "3. Operational Gaps Identified",
          id: "3. Gap Operasional yang Teridentifikasi"
        },
        findings: {
          en: [
            "High dependency on individual admin skills.",
            "No standardized editing and delivery workflow.",
            "Manual reporting limits business visibility.",
            "Operational data is not structured or reusable.",
            "The studio operates reactively instead of strategically."
          ],
          id: [
            "Ketergantungan tinggi pada skill admin individu.",
            "Tidak ada workflow editing dan delivery terstandarisasi.",
            "Pelaporan manual membatasi visibilitas bisnis.",
            "Data operasional tidak terstruktur atau dapat digunakan kembali.",
            "Studio beroperasi reaktif alih-alih strategis."
          ]
        }
      }
    ],
    personas: [
      {
        title: {
          en: "👤 User Persona 01 — Studio Owner",
          id: "👤 User Persona 01 — Pemilik Studio"
        },
        name: "Suci, 30",
        occupation: {
          en: "Studio Owner (Holysnap)",
          id: "Pemilik Studio (Holysnap)"
        },
        goals: {
          en: [
            "Monitor daily revenue and transaction performance",
            "Track peak and low hours to optimize staffing",
            "Analyze customer data to improve promotions",
            "Standardize operational workflow",
            "Scale the business without increasing complexity"
          ],
          id: [
            "Memantau pendapatan harian dan performa transaksi",
            "Melacak jam ramai dan sepi untuk optimasi staffing",
            "Menganalisis data pelanggan untuk meningkatkan promosi",
            "Menstandarisasi workflow operasional",
            "Meningkatkan skala bisnis tanpa meningkatkan kompleksitas"
          ]
        },
        painPoints: {
          en: [
            "Has to manually ask admin for daily updates",
            "Revenue and performance data are not structured",
            "Difficult to identify best-selling packages",
            "No visibility into operational bottlenecks",
            "Business decisions are based on assumptions, not data"
          ],
          id: [
            "Harus bertanya manual ke admin untuk update harian",
            "Data pendapatan dan performa tidak terstruktur",
            "Sulit mengidentifikasi paket terlaris",
            "Tidak ada visibilitas bottleneck operasional",
            "Keputusan bisnis berdasarkan asumsi, bukan data"
          ]
        }
      },
      {
        title: {
          en: "👤 User Persona 02 — Studio Admin",
          id: "👤 User Persona 02 — Admin Studio"
        },
        name: "Sarah, 24",
        occupation: {
          en: "Studio Admin",
          id: "Admin Studio"
        },
        goals: {
          en: [
            "Process customer check-in efficiently",
            "Manage queue clearly during peak hours",
            "Edit photo grids quickly and consistently",
            "Deliver photos to customers without delays",
            "Avoid repetitive manual tasks"
          ],
          id: [
            "Memproses check-in pelanggan secara efisien",
            "Mengelola antrian dengan jelas saat jam ramai",
            "Mengedit grid foto dengan cepat dan konsisten",
            "Mengirim foto ke pelanggan tanpa delay",
            "Menghindari tugas manual berulang"
          ]
        },
        painPoints: {
          en: [
            "Customer registration is written manually",
            "Queue numbers are tracked manually",
            "Editing grids in Canva takes time and varies by skill",
            "Must upload photos to Google Drive and share links one by one",
            "Switching between multiple tools slows down workflow"
          ],
          id: [
            "Registrasi pelanggan ditulis manual",
            "Nomor antrian dilacak manual",
            "Editing grid di Canva memakan waktu dan bervariasi berdasarkan skill",
            "Harus upload foto ke Google Drive dan berbagi link satu per satu",
            "Berpindah antar banyak tool memperlambat workflow"
          ]
        }
      }
    ],
    howMightWe: {
      en: [
        "How might we digitize customer registration to eliminate manual recording and reduce errors?",
        "How might we create a transparent queue system so customers can track their turn in real time?",
        "How might we standardize pricing and promotional management to reduce manual calculations?",
        "How might we simplify the photo grid editing process so it does not depend on individual admin skills?",
        "How might we automate photo delivery without relying on manual Google Drive uploads and link sharing?",
        "How might we provide real-time operational visibility for the owner without requiring manual reporting?",
        "How might we transform daily operational data into actionable business insights?"
      ],
      id: [
        "Bagaimana kami dapat mendigitalisasi registrasi pelanggan untuk menghilangkan pencatatan manual dan mengurangi error?",
        "Bagaimana kami dapat membuat sistem antrian transparan sehingga pelanggan dapat melacak giliran mereka secara real-time?",
        "Bagaimana kami dapat menstandarisasi pricing dan manajemen promosi untuk mengurangi perhitungan manual?",
        "Bagaimana kami dapat menyederhanakan proses editing grid foto sehingga tidak bergantung pada skill admin individu?",
        "Bagaimana kami dapat mengotomatisasi pengiriman foto tanpa bergantung pada upload manual Google Drive dan berbagi link?",
        "Bagaimana kami dapat memberikan visibilitas operasional real-time untuk owner tanpa memerlukan pelaporan manual?",
        "Bagaimana kami dapat mengubah data operasional harian menjadi business insight yang actionable?"
      ]
    },
    solutionStrategy: [
      {
        title: {
          en: "1. Centralized Studio Management System",
          id: "1. Sistem Manajemen Studio Terpusat"
        },
        description: {
          en: "A unified dashboard that connects customer check-in, queue management, transaction processing, photo editing workflow, and delivery into one structured system — eliminating fragmented tools and manual recording.",
          id: "Dashboard terpadu yang menghubungkan check-in pelanggan, manajemen antrian, pemrosesan transaksi, workflow editing foto, dan delivery ke dalam satu sistem terstruktur — menghilangkan tool yang terfragmentasi dan pencatatan manual."
        }
      },
      {
        title: {
          en: "2. Smart Queue & Check-in System",
          id: "2. Sistem Antrian & Check-in Pintar"
        },
        description: {
          en: "A digital check-in flow that automatically generates queue numbers and allows real-time tracking of session status — reducing customer uncertainty and minimizing admin interruptions during peak hours.",
          id: "Alur check-in digital yang otomatis menghasilkan nomor antrian dan memungkinkan pelacakan status sesi real-time — mengurangi ketidakpastian pelanggan dan meminimalkan interupsi admin saat jam ramai."
        }
      },
      {
        title: {
          en: "3. Standardized Editing & Delivery Workflow",
          id: "3. Workflow Editing & Delivery Terstandarisasi"
        },
        description: {
          en: "A built-in grid template system that replaces manual Canva editing, ensuring consistent output quality regardless of admin experience. Integrated photo upload and automatic customer link generation eliminate manual Google Drive sharing.",
          id: "Sistem template grid built-in yang menggantikan editing Canva manual, memastikan kualitas output konsisten terlepas dari pengalaman admin. Upload foto terintegrasi dan generasi link pelanggan otomatis menghilangkan berbagi Google Drive manual."
        }
      },
      {
        title: {
          en: "4. Real-Time Business Analytics",
          id: "4. Business Analytics Real-Time"
        },
        description: {
          en: "An owner dashboard displaying daily revenue, peak & low traffic hours, best-selling packages, and customer data trends. This transforms operational data into measurable business insights, enabling strategic decision-making instead of assumption-based planning.",
          id: "Dashboard owner yang menampilkan pendapatan harian, jam ramai & sepi, paket terlaris, dan tren data pelanggan. Ini mengubah data operasional menjadi business insight yang terukur, memungkinkan pengambilan keputusan strategis alih-alih perencanaan berbasis asumsi."
        }
      }
    ],
    userJourneyMap: [
      {
        persona: {
          en: "Persona 1: Sarah (Studio Admin, 24)",
          id: "Persona 1: Sarah (Admin Studio, 24)"
        },
        stages: [
          {
            stage: { en: "Customer Arrival", id: "Kedatangan Pelanggan" },
            action: { en: "Record name manually, write queue number", id: "Catat nama manual, tulis nomor antrian" },
            thoughts: { en: "Hope I don't make a mistake.", id: "Semoga tidak salah catat." },
            painPoints: { en: "Manual recording, risk of error", id: "Pencatatan manual, risiko error" },
            opportunity: { en: "Digital check-in", id: "Check-in digital" }
          },
          {
            stage: { en: "Queue Management", id: "Manajemen Antrian" },
            action: { en: "Update order manually", id: "Update urutan manual" },
            thoughts: { en: "Customers often ask about their turn.", id: "Customer sering tanya giliran berapa." },
            painPoints: { en: "No real-time visibility", id: "Tidak ada visibilitas real-time" },
            opportunity: { en: "Auto queue system", id: "Sistem antrian otomatis" }
          },
          {
            stage: { en: "Session Starts", id: "Sesi Dimulai" },
            action: { en: "Call customer & update status manually", id: "Panggil pelanggan & update status manual" },
            thoughts: { en: "Can't skip anyone in line.", id: "Jangan sampai lompat antrian." },
            painPoints: { en: "No structured session tracker", id: "Tidak ada tracker sesi terstruktur" },
            opportunity: { en: "Status lifecycle tracker", id: "Tracker lifecycle status" }
          },
          {
            stage: { en: "Payment Process", id: "Proses Pembayaran" },
            action: { en: "Calculate package + promo manually", id: "Hitung paket + promo manual" },
            thoughts: { en: "Afraid of miscalculating.", id: "Takut salah hitung." },
            painPoints: { en: "Manual pricing", id: "Pricing manual" },
            opportunity: { en: "Auto price calculation", id: "Kalkulasi harga otomatis" }
          },
          {
            stage: { en: "Editing Grid", id: "Editing Grid" },
            action: { en: "Open Canva, adjust layout", id: "Buka Canva, atur layout" },
            thoughts: { en: "Need to be fast, there's a queue.", id: "Harus cepat, masih ada antrian." },
            painPoints: { en: "Tool switching & inconsistent output", id: "Berpindah tool & output tidak konsisten" },
            opportunity: { en: "Built-in template", id: "Template built-in" }
          },
          {
            stage: { en: "Delivery", id: "Pengiriman" },
            action: { en: "Upload to Google Drive, copy link", id: "Upload ke Google Drive, copy link" },
            thoughts: { en: "Hope I don't send to the wrong person.", id: "Semoga tidak salah kirim." },
            painPoints: { en: "Manual upload & link sharing", id: "Upload manual & berbagi link" },
            opportunity: { en: "Auto link generation", id: "Generasi link otomatis" }
          },
          {
            stage: { en: "End of Day", id: "Akhir Hari" },
            action: { en: "Recap revenue manually", id: "Rekap pendapatan manual" },
            thoughts: { en: "Tired of recalculating.", id: "Capek hitung ulang." },
            painPoints: { en: "Manual reporting", id: "Pelaporan manual" },
            opportunity: { en: "Auto dashboard summary", id: "Summary dashboard otomatis" }
          }
        ]
      },
      {
        persona: {
          en: "Persona 2: Suci (Studio Owner, 30)",
          id: "Persona 2: Suci (Pemilik Studio, 30)"
        },
        stages: [
          {
            stage: { en: "During Operation", id: "Saat Operasional" },
            action: { en: "Ask admin about progress", id: "Tanya admin tentang progress" },
            thoughts: { en: "Is it busy today?", id: "Hari ini ramai nggak?" },
            painPoints: { en: "No real-time visibility", id: "Tidak ada visibilitas real-time" },
            opportunity: { en: "Live dashboard", id: "Dashboard live" }
          },
          {
            stage: { en: "Revenue Tracking", id: "Pelacakan Pendapatan" },
            action: { en: "Wait for end-of-day recap", id: "Tunggu rekap end-of-day" },
            thoughts: { en: "How much revenue today?", id: "Pendapatan hari ini berapa?" },
            painPoints: { en: "Manual recap", id: "Rekap manual" },
            opportunity: { en: "Automated revenue tracking", id: "Pelacakan pendapatan otomatis" }
          },
          {
            stage: { en: "Performance Review", id: "Review Performa" },
            action: { en: "Check notes manually", id: "Cek catatan manual" },
            thoughts: { en: "When are the busy hours?", id: "Jam ramai kapan ya?" },
            painPoints: { en: "No structured data", id: "Tidak ada data terstruktur" },
            opportunity: { en: "Peak hour analytics", id: "Analitik jam ramai" }
          },
          {
            stage: { en: "Strategy Planning", id: "Perencanaan Strategi" },
            action: { en: "Estimate best packages", id: "Estimasi paket terbaik" },
            thoughts: { en: "Which promo is effective?", id: "Promo mana yang efektif?" },
            painPoints: { en: "Assumption-based decision", id: "Keputusan berbasis asumsi" },
            opportunity: { en: "Package performance data", id: "Data performa paket" }
          }
        ]
      }
    ],
    usabilityTesting: {
      participants: {
        en: "2 participants (1 Studio Owner, 1 Admin)",
        id: "2 partisipan (1 Pemilik Studio, 1 Admin)"
      },
      keyTasks: {
        en: [
          "Customer check-in & automatic queue generation",
          "Transaction processing with promo selection",
          "Photo grid template application",
          "Photo delivery link generation",
          "Viewing daily revenue dashboard"
        ],
        id: [
          "Check-in pelanggan & generasi antrian otomatis",
          "Pemrosesan transaksi dengan pemilihan promo",
          "Aplikasi template grid foto",
          "Generasi link pengiriman foto",
          "Melihat dashboard pendapatan harian"
        ]
      },
      results: {
        en: [
          "Admin completed customer check-in in under 12 seconds",
          "Task success rate: 95%",
          "Admin no longer needed to switch between notebook, Canva, and Google Drive",
          "Owner accessed daily revenue and session data independently",
          "SUS Score: 85 (Excellent Usability)"
        ],
        id: [
          "Admin menyelesaikan check-in pelanggan dalam waktu kurang dari 12 detik",
          "Tingkat keberhasilan tugas: 95%",
          "Admin tidak perlu lagi berpindah antara notebook, Canva, dan Google Drive",
          "Owner mengakses data pendapatan harian dan sesi secara mandiri",
          "Skor SUS: 85 (Usability Excellent)"
        ]
      },
      keyFindings: {
        en: [
          "Admin needed clearer visual session status (Waiting / In Session / Editing / Delivered)",
          "Promo selection required clearer price preview before confirmation",
          "Owner preferred revenue summary visible immediately on login"
        ],
        id: [
          "Admin membutuhkan status sesi visual yang lebih jelas (Waiting / In Session / Editing / Delivered)",
          "Pemilihan promo memerlukan preview harga yang lebih jelas sebelum konfirmasi",
          "Owner lebih suka summary pendapatan terlihat segera setelah login"
        ]
      },
      iterations: {
        en: [
          "Added session lifecycle tracker with visual status indicators",
          "Added real-time price calculation preview",
          "Reprioritized dashboard layout (Revenue → Sessions → Peak Hours → Packages)",
          "Added auto-generated delivery link with copy button"
        ],
        id: [
          "Menambahkan tracker lifecycle sesi dengan indikator status visual",
          "Menambahkan preview kalkulasi harga real-time",
          "Reprioritasi layout dashboard (Revenue → Sessions → Peak Hours → Packages)",
          "Menambahkan link pengiriman auto-generated dengan tombol copy"
        ]
      }
    },
    keyLearnings: {
      en: [
        "Designing for internal systems requires balancing speed, accuracy, and operational clarity",
        "The biggest bottleneck in small businesses is workflow fragmentation, not lack of demand",
        "Reducing cognitive load for operators directly improves customer experience",
        "Data becomes valuable only when it is structured and accessible",
        "True scalability starts with operational consistency"
      ],
      id: [
        "Mendesain untuk sistem internal memerlukan keseimbangan kecepatan, akurasi, dan kejelasan operasional",
        "Bottleneck terbesar di bisnis kecil adalah fragmentasi workflow, bukan kurangnya demand",
        "Mengurangi beban kognitif operator secara langsung meningkatkan customer experience",
        "Data menjadi berharga hanya ketika terstruktur dan accessible",
        "Scalability sejati dimulai dari konsistensi operasional"
      ]
    }
  }
];