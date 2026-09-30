// Edit this file to update the content of your portfolio.

export const profile = {
  name: "Devkumar Patel",
  first: "Dev",
  roles: ["IT & SAP S/4HANA Support Analyst", "Full-Stack Web Development", "Cloud & Networking"],
  tagline:
    "I keep business systems running, connect them with APIs, and build the web apps around them.",
  location: "Toronto, Canada",
  email: "devmp1506@gmail.com",
  phone: "647-456-3827",
  github: "https://github.com/dmpatel90",
  linkedin: "https://www.linkedin.com/in/dev-patel-a32977214/",
  resume: "/Devkumar_Patel_Resume.pdf",
};

export const about =
  "I'm a Business Information Technology student at Seneca Polytechnic with a background in cybersecurity and networking. My work sits where business and technology meet. I support SAP S/4HANA and Microsoft environments, integrate systems through REST APIs, and build full-stack web apps with Node.js and PostgreSQL. I also train people on the systems I support, because a tool only helps if people know how to use it.";

// IT support tasks shown in the "IT Support" section.
export const supportTasks = [
  { icon: "desk", title: "Helpdesk L1 / L2", text: "Providing first- and second-line support through the service desk: logging, triaging, resolving and escalating tickets." },
  { icon: "hw", title: "Hardware & peripherals", text: "Diagnosing and fixing desktops, laptops, printers, scanners and other peripherals." },
  { icon: "sw", title: "Software & OS issues", text: "Installing, configuring and troubleshooting Windows, Microsoft 365 and business applications." },
  { icon: "net", title: "Network troubleshooting", text: "Fixing connectivity, IP, DNS and DHCP problems, from a single PC to a whole office." },
  { icon: "user", title: "Accounts & access", text: "Creating users, resetting passwords and managing roles and permissions in Active Directory, Microsoft and SAP." },
  { icon: "sap", title: "SAP end-user support", text: "Resolving SAP S/4HANA issues for users across SD, MM, PM, PP and QM." },
  { icon: "pos", title: "POS administration", text: "Running Rite Books POS across multiple retail outlets: sales, inventory, users and reports." },
  { icon: "doc", title: "Training & guides", text: "Training 200+ employees a year and writing user guides and technical documentation." },
];

export const supportStats = [
  { value: "100+", label: "users supported" },
  { value: "200+", label: "people trained per year" },
  { value: "L1 / L2", label: "support levels" },
];

// "What I do" bento cards. `size` controls the grid span: "lg" is a wide card.
export const services = [
  {
    key: "sap",
    title: "SAP S/4HANA Support",
    text: "Providing Level 1 and 2 support across SD, MM, PM, PP and QM, including user roles and authorizations, UAT, data validation and post-go-live troubleshooting.",
    tags: ["SD", "MM", "PM", "PP", "QM"],
    size: "lg",
  },
  {
    key: "api",
    title: "API Integration",
    text: "Connecting ERP systems to external platforms over REST, like SAP to a national e-invoicing service.",
    tags: ["REST", "JSON", "SAP"],
  },
  {
    key: "web",
    title: "Full-Stack Web Apps",
    text: "Building Node.js and Express back ends, PostgreSQL databases with Sequelize, and responsive EJS and Bootstrap front ends.",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    key: "m365",
    title: "SharePoint & Microsoft 365",
    text: "Building business apps for asset, leave and employee management, and managing Active Directory and access control.",
    tags: ["SharePoint", "M365", "AD"],
  },
  {
    key: "net",
    title: "Networking & Linux",
    text: "Working with TCP/IP, subnetting, VLANs, DNS and DHCP, plus Linux and VyOS with nftables firewall rules.",
    tags: ["Packet Tracer", "VyOS", "nftables"],
  },
  {
    key: "train",
    title: "Training & Documentation",
    text: "Delivering SAP and IT training to 200+ employees a year and writing clear user guides and technical documentation.",
    tags: ["Training", "User guides"],
  },
  {
    key: "cloud",
    title: "Azure Cloud",
    text: "Working with virtual machines, Application Gateway, Defender for Cloud and Key Vault, including VM networking.",
    tags: ["VMs", "Key Vault", "Defender"],
    size: "lg",
  },
];

// Percentages are self-assessed. Adjust them to whatever feels right.
export const skills = [
  { name: "IT Support", level: 80 },
  { name: "SAP S/4HANA", level: 75 },
  { name: "SharePoint / M365", level: 70 },
  { name: "Active Directory", level: 70 },
  { name: "Networking", level: 65 },
  { name: "HTML / CSS", level: 55 },
  { name: "Git / GitHub", level: 50 },
  { name: "Linux", level: 50 },
  { name: "SQL / PostgreSQL", level: 45 },
  { name: "Microsoft Azure", level: 45 },
  { name: "JavaScript / Node", level: 40 },
  { name: "Python", level: 35 },
];

export const projects = [
  {
    title: "Pet Choice",
    kind: "Full-stack web app",
    visual: "browser",
    wide: true,
    badge: "FEATURED",
    text: "A cat-breed explorer built on The Cat API. Search, filter and sort breeds, view images and details, and manage entries with full CRUD. It uses Node.js and Express on the server, PostgreSQL through Sequelize, and responsive EJS and Bootstrap views.",
    tags: ["Node.js", "Express", "PostgreSQL", "Sequelize", "EJS", "Bootstrap"],
    link: "https://github.com/dmpatel90",
  },
  {
    title: "FoodShare Food Bank Management System",
    kind: "Project management · Team of 7",
    visual: "gantt",
    wide: true,
    badge: "PROJECT MANAGER",
    text: "Led a seven-person Seneca team as Project Manager to plan a system that replaces spreadsheets and paper logs across a three-hub food bank network in Scarborough, Mississauga and North Bay. I wrote the project charter and plan, built the WBS and schedule in Microsoft Project, and set the cost baseline, risk register and success criteria. The system covers donors, families, inventory, warehouses, transport and FIFO-based distribution.",
    highlights: [
      ["41", "scheduled tasks"],
      ["456 h", "planned work"],
      ["$25,010", "cost baseline"],
      ["3", "warehouse hubs"],
    ],
    tags: ["Microsoft Project", "WBS & WBS Dictionary", "Project Charter", "Risk Management", "Stakeholder Management", "Cost Baseline"],
  },
  {
    title: "SAP ↔ EFRIS Integration",
    kind: "Enterprise integration",
    visual: "flow",
    text: "Supported the integration of SAP S/4HANA with the Uganda Revenue Authority's EFRIS e-invoicing platform over REST APIs, from testing and data validation through go-live.",
    tags: ["SAP S/4HANA", "REST APIs", "UAT"],
  },
  {
    title: "SharePoint Business Apps",
    kind: "Internal tools",
    visual: "apps",
    text: "Designed and deployed three SharePoint apps for Asset Management, Leave Management and Employee Administration.",
    tags: ["SharePoint", "Microsoft 365"],
  },
  {
    title: "Networking & Linux Labs",
    kind: "Lab work",
    visual: "terminal",
    text: "Configured subnetting, VLANs, DNS and DHCP in Cisco Packet Tracer, and set up Linux and VyOS routers with nftables firewall rules.",
    tags: ["Packet Tracer", "Linux", "VyOS", "nftables"],
  },
  {
    title: "Azure Cloud Labs",
    kind: "Lab work",
    visual: "cloud",
    text: "Hands-on labs with VMs, Application Gateway, Defender for Cloud and Key Vault, including troubleshooting VM networking and connectivity.",
    tags: ["Azure", "VM networking", "Key Vault"],
  },
];

export const education = [
  {
    degree: "Post Graduate Certificate, Business Information Technology",
    school: "Seneca Polytechnic",
    place: "Toronto, ON",
    dates: "Jan 2026 – Present",
    current: true,
    courses: ["Business Analysis", "Systems Analysis & Design", "Database Management", "Web Development", "Cloud Computing", "Project Management", "Programming", "Linux"],
  },
  {
    degree: "B.Sc. Cybersecurity and Networking",
    school: "Isbat University",
    place: "Kampala, Uganda",
    dates: "Mar 2020 – Mar 2023",
    gpa: "4.30",
    courses: [],
  },
];

export const languages = ["English", "Gujarati", "Hindi"];
