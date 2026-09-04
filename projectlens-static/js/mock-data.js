// ============================================
// ProjectLens - Mock Data
// ============================================

// Mock Themes
const themes = [
  {
    id: 1,
    cohortId: 1,
    title: "AI-Powered Learning Platform",
    description: "Build an intelligent system for personalized student learning",
    objectives: [
      "Adapt content based on student performance",
      "Provide real-time feedback",
      "Track learning progress"
    ],
    keywords: ["AI", "machine-learning", "personalization", "analytics", "feedback"],
    submissionDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Mock Pods
const pods = [
  { id: 1, name: "Pod Alpha", cohortId: 1 },
  { id: 2, name: "Pod Beta", cohortId: 1 },
  { id: 3, name: "Pod Gamma", cohortId: 1 }
];

// Mock Users
const users = [
  {
    id: 1,
    name: "John Trainer",
    email: "trainer@projectlens.com",
    passwordHash: "hash123",
    role: "TRAINER",
    podId: null
  },
  {
    id: 2,
    name: "Alice Lead",
    email: "alice@projectlens.com",
    passwordHash: "hash123",
    role: "POD_LEAD",
    podId: 1
  },
  {
    id: 3,
    name: "Bob Lead",
    email: "bob@projectlens.com",
    passwordHash: "hash123",
    role: "POD_LEAD",
    podId: 2
  },
  {
    id: 4,
    name: "Charlie Lead",
    email: "charlie@projectlens.com",
    passwordHash: "hash123",
    role: "POD_LEAD",
    podId: 3
  },
  {
    id: 5,
    name: "David Member",
    email: "david@projectlens.com",
    passwordHash: "hash123",
    role: "POD_MEMBER",
    podId: 1
  }
];

// Mock Submissions
const submissions = [
  {
    id: 1,
    podId: 1,
    themeId: 1,
    title: "Smart Tutor: AI-Driven Learning Assistant",
    problemStatement: "Students struggle with personalized learning at scale. Traditional systems treat all learners uniformly.",
    objectives: "Build AI system for personalization, adapt content, provide real-time feedback",
    scope: "Web platform for high school students, integration with existing LMS",
    techStack: "Python, TensorFlow, React, Node.js, PostgreSQL",
    docLink: "https://docs.example.com/smart-tutor",
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    podId: 2,
    themeId: 1,
    title: "Adaptive Learning Engine",
    problemStatement: "One-size-fits-all education fails diverse learners. We need intelligent systems to personalize and provide continuous feedback.",
    objectives: "Machine learning personalization, real-time analytics, adaptive content delivery",
    scope: "Mobile and web app for corporate training, scalable backend",
    techStack: "Java, Spring Boot, Angular, TensorFlow, MySQL",
    docLink: "https://docs.example.com/ale",
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    podId: 3,
    themeId: 1,
    title: "Quiz Bot: Automated Assessment Platform",
    problemStatement: "Teachers spend too much time grading. We need automated assessment with minimal setup.",
    objectives: "Automate quiz creation, quick grading, basic analytics",
    scope: "Classroom tool for primary school teachers",
    techStack: "JavaScript, Express.js, React, SQLite",
    docLink: "https://docs.example.com/quiz-bot",
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Mock Evaluations
const evaluations = [
  {
    id: 1,
    submissionId: 1,
    alignmentScore: 85,
    matchedCriteria: ["AI", "personalization", "feedback", "analytics"],
    missingCriteria: ["machine-learning"],
    overlapFlags: [{ submissionId: 2, similarityPercent: 72 }],
    summaryText: "Strong alignment with theme. Matches 4 of 5 keywords. Similar to Pod Beta's submission (72%)."
  },
  {
    id: 2,
    submissionId: 2,
    alignmentScore: 88,
    matchedCriteria: ["machine-learning", "personalization", "analytics", "feedback"],
    missingCriteria: [],
    overlapFlags: [{ submissionId: 1, similarityPercent: 72 }],
    summaryText: "Excellent alignment with theme. Matches all 5 keywords. Similar to Pod Alpha's submission (72%)."
  },
  {
    id: 3,
    submissionId: 3,
    alignmentScore: 45,
    matchedCriteria: ["feedback"],
    missingCriteria: ["AI", "machine-learning", "personalization", "analytics"],
    overlapFlags: [],
    summaryText: "Low alignment with theme. Matches only 1 of 5 keywords. Focus on assessment rather than AI-driven personalization."
  }
];

// Mock Decisions
const decisions = [
  {
    id: 1,
    submissionId: 1,
    status: null,
    comments: [],
    decidedByUserId: null,
    decidedAt: null
  },
  {
    id: 2,
    submissionId: 2,
    status: null,
    comments: [],
    decidedByUserId: null,
    decidedAt: null
  },
  {
    id: 3,
    submissionId: 3,
    status: null,
    comments: [],
    decidedByUserId: null,
    decidedAt: null
  }
];

// ============================================
// Helper Functions
// ============================================

function getScoreBadgeColor(score) {
  if (score < 50) return "badge-danger";
  if (score < 75) return "badge-warning";
  return "badge-success";
}

function getScoreBadgeText(score) {
  if (score < 50) return "Low Alignment";
  if (score < 75) return "Medium Alignment";
  return "High Alignment";
}

function formatDate(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function isDeadlinePassed(deadline) {
  return new Date(deadline) < new Date();
}

function getDecisionBadgeColor(status) {
  if (!status) return "badge-info";
  if (status === "APPROVED") return "badge-success";
  if (status === "NEEDS_REVISION") return "badge-warning";
  return "badge-danger";
}

function getDecisionBadgeText(status) {
  if (!status) return "Pending Review";
  return status.replace(/_/g, " ");
}
