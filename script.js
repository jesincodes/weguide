const CATEGORY_KEYS = ["IT", "Business", "Medical", "Creative", "Engineering"];
const SCORE_BY_OPTION = { A: 2, B: 1, C: 0, D: -1 };
const QUIZ_LENGTH = 15;
const ADAPT_AFTER = 5;
const INITIAL_VISIBLE_COUNT = 12;

const COURSE_MAP = {
  IT: ["BCA", "BSc CS", "BTech CSE", "AI", "Data Science"],
  Business: ["BBA", "BCom"],
  Engineering: ["Mechanical Engineering", "Civil Engineering", "ECE"],
  Medical: ["MBBS", "BSc Nursing", "Pharmacy", "Biotechnology"],
  Creative: ["Design", "Animation", "UI/UX"],
};



const QUESTION_BANK = [
  { id: "G1", question: "Which type of task do you enjoy most?", tags: ["general"], options: [
    { code: "A", text: "Building apps/websites", category: "IT" },
    { code: "B", text: "Planning and managing teams", category: "Business" },
    { code: "C", text: "Helping patients and health work", category: "Medical" },
    { code: "D", text: "Designing visuals and ideas", category: "Creative" },
  ] },
  { id: "G2", question: "Which school subject feels easiest?", tags: ["general"], options: [
    { code: "A", text: "Computer Science", category: "IT" },
    { code: "B", text: "Commerce / Economics", category: "Business" },
    { code: "C", text: "Biology", category: "Medical" },
    { code: "D", text: "Physics / Math for machines", category: "Engineering" },
  ] },
  { id: "G3", question: "What kind of career growth do you want?", tags: ["general"], options: [
    { code: "A", text: "Tech and global software jobs", category: "IT" },
    { code: "B", text: "Leadership and business roles", category: "Business" },
    { code: "C", text: "Healthcare and life sciences", category: "Medical" },
    { code: "D", text: "Product and design creation", category: "Creative" },
  ] },
  { id: "G4", question: "Pick a project you would love to do.", tags: ["general"], options: [
    { code: "A", text: "Build an AI chatbot", category: "IT" },
    { code: "B", text: "Launch a startup plan", category: "Business" },
    { code: "C", text: "Create a health awareness camp", category: "Medical" },
    { code: "D", text: "Design an animation short", category: "Creative" },
  ] },
  { id: "G5", question: "How do you prefer solving problems?", tags: ["general"], options: [
    { code: "A", text: "Through coding and logic", category: "IT" },
    { code: "B", text: "Through strategy and market insight", category: "Business" },
    { code: "C", text: "Through diagnosis and care", category: "Medical" },
    { code: "D", text: "Through prototypes and machines", category: "Engineering" },
  ] },
  { id: "P1", question: "Budget preference for your studies?", tags: ["profile"], options: [
    { code: "A", text: "Higher budget (premium colleges)", category: "Business", profile: { budget: "High" } },
    { code: "B", text: "Balanced budget", category: "IT", profile: { budget: "Medium" } },
    { code: "C", text: "Cost-sensitive budget", category: "Creative", profile: { budget: "Low" } },
    { code: "D", text: "Scholarship-focused only", category: "Medical", profile: { budget: "Low" } },
  ] },
  { id: "P2", question: "Preferred city for college?", tags: ["profile"], options: [
    { code: "A", text: "Bangalore", category: "IT", profile: { city: "Bangalore" } },
    { code: "B", text: "Mysore", category: "Engineering", profile: { city: "Mysore" } },
    { code: "C", text: "Mangalore", category: "Medical", profile: { city: "Mangalore" } },
    { code: "D", text: "Any city", category: "Business", profile: { city: "Any" } },
  ] },
  { id: "P3", question: "Preferred college competitiveness?", tags: ["profile"], options: [
    { code: "A", text: "Top tier only", category: "Engineering", profile: { tier: "Tier 1" } },
    { code: "B", text: "Medium tier with value", category: "Business", profile: { tier: "Tier 2" } },
    { code: "C", text: "Easy admission options", category: "Creative", profile: { tier: "Tier 3" } },
    { code: "D", text: "Open to all tiers", category: "IT", profile: { tier: "Any" } },
  ] },
  { id: "IT1", question: "Which role sounds best?", tags: ["IT"], options: [
    { code: "A", text: "Software Developer", category: "IT" }, { code: "B", text: "Product Manager", category: "Business" }, { code: "C", text: "Biomedical analyst", category: "Medical" }, { code: "D", text: "CAD Engineer", category: "Engineering" },
  ] },
  { id: "IT2", question: "Your view on coding?", tags: ["IT"], options: [
    { code: "A", text: "I enjoy coding daily", category: "IT" }, { code: "B", text: "Only for business tools", category: "Business" }, { code: "C", text: "Not much interest", category: "Medical" }, { code: "D", text: "Mostly hardware side", category: "Engineering" },
  ] },
  { id: "IT3", question: "Which trend excites you most?", tags: ["IT"], options: [
    { code: "A", text: "Artificial Intelligence", category: "IT" }, { code: "B", text: "Fintech", category: "Business" }, { code: "C", text: "Digital health", category: "Medical" }, { code: "D", text: "Smart manufacturing", category: "Engineering" },
  ] },
  { id: "IT4", question: "Preferred work style?", tags: ["IT"], options: [
    { code: "A", text: "Remote tech teams", category: "IT" }, { code: "B", text: "Client-facing business", category: "Business" }, { code: "C", text: "Hospital labs", category: "Medical" }, { code: "D", text: "Plant/site operations", category: "Engineering" },
  ] },
  { id: "IT5", question: "Pick one elective.", tags: ["IT"], options: [
    { code: "A", text: "Data Structures", category: "IT" }, { code: "B", text: "Marketing", category: "Business" }, { code: "C", text: "Anatomy", category: "Medical" }, { code: "D", text: "Thermodynamics", category: "Engineering" },
  ] },
  { id: "IT6", question: "Best project type for you?", tags: ["IT"], options: [
    { code: "A", text: "Build SaaS app", category: "IT" }, { code: "B", text: "Market entry strategy", category: "Business" }, { code: "C", text: "Clinical study report", category: "Medical" }, { code: "D", text: "Bridge design model", category: "Engineering" },
  ] },
  { id: "BUS1", question: "Which business area attracts you?", tags: ["Business"], options: [
    { code: "A", text: "Operations and analytics", category: "Business" }, { code: "B", text: "Coding dashboards", category: "IT" }, { code: "C", text: "Hospital administration", category: "Medical" }, { code: "D", text: "Industrial management", category: "Engineering" },
  ] },
  { id: "BUS2", question: "Do you like presenting ideas?", tags: ["Business"], options: [
    { code: "A", text: "Yes, very much", category: "Business" }, { code: "B", text: "Only technical demos", category: "IT" }, { code: "C", text: "Only medical topics", category: "Medical" }, { code: "D", text: "Rarely", category: "Engineering" },
  ] },
  { id: "BUS3", question: "Best fit internship?", tags: ["Business"], options: [
    { code: "A", text: "Consulting / finance", category: "Business" }, { code: "B", text: "Software company", category: "IT" }, { code: "C", text: "Pharma company", category: "Medical" }, { code: "D", text: "Automobile plant", category: "Engineering" },
  ] },
  { id: "BUS4", question: "What do you track often?", tags: ["Business"], options: [
    { code: "A", text: "Markets and brands", category: "Business" }, { code: "B", text: "Tech updates", category: "IT" }, { code: "C", text: "Health trends", category: "Medical" }, { code: "D", text: "Infrastructure projects", category: "Engineering" },
  ] },
  { id: "BUS5", question: "Preferred career goal?", tags: ["Business"], options: [
    { code: "A", text: "Business leader", category: "Business" }, { code: "B", text: "Tech architect", category: "IT" }, { code: "C", text: "Clinical professional", category: "Medical" }, { code: "D", text: "Core engineer", category: "Engineering" },
  ] },
  { id: "BUS6", question: "You enjoy negotiation?", tags: ["Business"], options: [
    { code: "A", text: "Yes", category: "Business" }, { code: "B", text: "Sometimes", category: "IT" }, { code: "C", text: "Not really", category: "Medical" }, { code: "D", text: "Only technical procurement", category: "Engineering" },
  ] },
  { id: "MED1", question: "How do you feel about patient care?", tags: ["Medical"], options: [
    { code: "A", text: "Highly motivated", category: "Medical" }, { code: "B", text: "Prefer digital health tools", category: "IT" }, { code: "C", text: "Prefer hospital management", category: "Business" }, { code: "D", text: "Prefer biomedical devices", category: "Engineering" },
  ] },
  { id: "MED2", question: "Comfort with biology-heavy study?", tags: ["Medical"], options: [
    { code: "A", text: "Very comfortable", category: "Medical" }, { code: "B", text: "Moderate", category: "IT" }, { code: "C", text: "Low", category: "Business" }, { code: "D", text: "Prefer physics", category: "Engineering" },
  ] },
  { id: "MED3", question: "Preferred work environment?", tags: ["Medical"], options: [
    { code: "A", text: "Hospital / clinic", category: "Medical" }, { code: "B", text: "IT office", category: "IT" }, { code: "C", text: "Corporate office", category: "Business" }, { code: "D", text: "Engineering lab", category: "Engineering" },
  ] },
  { id: "MED4", question: "Would you handle emergency situations?", tags: ["Medical"], options: [
    { code: "A", text: "Yes, confidently", category: "Medical" }, { code: "B", text: "Only with tools", category: "IT" }, { code: "C", text: "Prefer backend roles", category: "Business" }, { code: "D", text: "Prefer production work", category: "Engineering" },
  ] },
  { id: "MED5", question: "Which elective interests you?", tags: ["Medical"], options: [
    { code: "A", text: "Human physiology", category: "Medical" }, { code: "B", text: "Data analytics", category: "IT" }, { code: "C", text: "Healthcare finance", category: "Business" }, { code: "D", text: "Medical instrumentation", category: "Engineering" },
  ] },
  { id: "MED6", question: "Long study duration comfort?", tags: ["Medical"], options: [
    { code: "A", text: "I can commit long-term", category: "Medical" }, { code: "B", text: "Prefer shorter programs", category: "IT" }, { code: "C", text: "Need flexible path", category: "Business" }, { code: "D", text: "Prefer practical projects", category: "Engineering" },
  ] },
  { id: "CR1", question: "Do you enjoy visual storytelling?", tags: ["Creative"], options: [
    { code: "A", text: "Yes, a lot", category: "Creative" }, { code: "B", text: "Only for app UI", category: "IT" }, { code: "C", text: "Not much", category: "Medical" }, { code: "D", text: "Only for product design", category: "Engineering" },
  ] },
  { id: "CR2", question: "Preferred toolset?", tags: ["Creative"], options: [
    { code: "A", text: "Figma/Adobe", category: "Creative" }, { code: "B", text: "VS Code", category: "IT" }, { code: "C", text: "Lab tools", category: "Medical" }, { code: "D", text: "CAD tools", category: "Engineering" },
  ] },
  { id: "CR3", question: "What portfolio would you build?", tags: ["Creative"], options: [
    { code: "A", text: "Brand and UI projects", category: "Creative" }, { code: "B", text: "Coding projects", category: "IT" }, { code: "C", text: "Research papers", category: "Medical" }, { code: "D", text: "Prototype models", category: "Engineering" },
  ] },
  { id: "CR4", question: "Which field excites you more?", tags: ["Creative"], options: [
    { code: "A", text: "Animation and media", category: "Creative" }, { code: "B", text: "AI tools", category: "IT" }, { code: "C", text: "Biotech visuals", category: "Medical" }, { code: "D", text: "Industrial design", category: "Engineering" },
  ] },
  { id: "CR5", question: "You prefer work judged by?", tags: ["Creative"], options: [
    { code: "A", text: "Aesthetics and usability", category: "Creative" }, { code: "B", text: "Performance and speed", category: "IT" }, { code: "C", text: "Accuracy and safety", category: "Medical" }, { code: "D", text: "Durability and function", category: "Engineering" },
  ] },
  { id: "CR6", question: "Your best strength is?", tags: ["Creative"], options: [
    { code: "A", text: "Creativity", category: "Creative" }, { code: "B", text: "Logical thinking", category: "IT" }, { code: "C", text: "Empathy", category: "Medical" }, { code: "D", text: "Problem-solving in hardware", category: "Engineering" },
  ] },
  { id: "EN1", question: "Which engineering stream interests you?", tags: ["Engineering"], options: [
    { code: "A", text: "Mechanical/Civil", category: "Engineering" }, { code: "B", text: "CSE", category: "IT" }, { code: "C", text: "Biomedical", category: "Medical" }, { code: "D", text: "Industrial management", category: "Business" },
  ] },
  { id: "EN2", question: "Do you enjoy building physical systems?", tags: ["Engineering"], options: [
    { code: "A", text: "Yes", category: "Engineering" }, { code: "B", text: "Prefer software systems", category: "IT" }, { code: "C", text: "Prefer life sciences", category: "Medical" }, { code: "D", text: "Prefer operations strategy", category: "Business" },
  ] },
  { id: "EN3", question: "Pick a lab you would join.", tags: ["Engineering"], options: [
    { code: "A", text: "Robotics lab", category: "Engineering" }, { code: "B", text: "AI lab", category: "IT" }, { code: "C", text: "Biochemistry lab", category: "Medical" }, { code: "D", text: "Business analytics lab", category: "Business" },
  ] },
  { id: "EN4", question: "Preferred outcome of your work?", tags: ["Engineering"], options: [
    { code: "A", text: "Real-world infrastructure", category: "Engineering" }, { code: "B", text: "Software platform", category: "IT" }, { code: "C", text: "Health impact", category: "Medical" }, { code: "D", text: "Revenue growth", category: "Business" },
  ] },
  { id: "EN5", question: "Most interesting class?", tags: ["Engineering"], options: [
    { code: "A", text: "Machine design", category: "Engineering" }, { code: "B", text: "Algorithms", category: "IT" }, { code: "C", text: "Human anatomy", category: "Medical" }, { code: "D", text: "Managerial economics", category: "Business" },
  ] },
  { id: "EN6", question: "Work setting you prefer?", tags: ["Engineering"], options: [
    { code: "A", text: "Plant / core engineering", category: "Engineering" }, { code: "B", text: "Software company", category: "IT" }, { code: "C", text: "Healthcare setup", category: "Medical" }, { code: "D", text: "Corporate boardroom", category: "Business" },
  ] },
];

const state = {
  answers: [],
  scores: { IT: 0, Business: 0, Medical: 0, Creative: 0, Engineering: 0 },
  profile: { budget: "Medium", city: "Any", tier: "Any" },
  askedQuestionIds: new Set(),
  adaptiveCategory: null,
  currentQuestion: null,
  questionNumber: 0,
  selectedOptionCode: null,
  isCompleted: false,
};

const dom = {
  contactForm: document.getElementById("contactForm"),
  formStatus: document.getElementById("formStatus"),
  collegeSearchInput: document.getElementById("collegeSearchInput"),
  exploreGrid: document.getElementById("exploreGrid"),
  searchEmptyState: document.getElementById("searchEmptyState"),
  cityFilterSelect: document.getElementById("cityFilterSelect"),
  showMoreBtn: document.getElementById("showMoreBtn"),
  quizQuestionText: document.getElementById("quizQuestionText"),
  quizOptions: document.getElementById("quizOptions"),
  quizNextBtn: document.getElementById("quizNextBtn"),
  quizRestartBtn: document.getElementById("quizRestartBtn"),
  quizProgressBar: document.getElementById("quizProgressBar"),
  quizProgressText: document.getElementById("quizProgressText"),
  quizQuestionCard: document.getElementById("quizQuestionCard"),
  quizResultCard: document.getElementById("quizResultCard"),
  recommendedCourseList: document.getElementById("recommendedCourseList"),
  recommendedCollegeList: document.getElementById("recommendedCollegeList"),
  categoryChart: document.getElementById("categoryChart"),
};

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

function getDominantCategory(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function categoryPercentages(scores) {
  const positive = CATEGORY_KEYS.map((k) => Math.max(scores[k], 0));
  const total = positive.reduce((s, n) => s + n, 0) || 1;
  const map = {};
  CATEGORY_KEYS.forEach((key, idx) => {
    map[key] = Math.round((positive[idx] / total) * 100);
  });
  return map;
}

function pickNextQuestion() {
  const unanswered = QUESTION_BANK.filter((q) => !state.askedQuestionIds.has(q.id));
  if (!unanswered.length) return null;

  if (state.questionNumber < ADAPT_AFTER) {
    return unanswered.find((q) => q.tags.includes("general")) || unanswered[0];
  }

  if (!state.adaptiveCategory) {
    state.adaptiveCategory = getDominantCategory(state.scores);
  }

  const preferred = unanswered.filter(
    (q) => q.tags.includes(state.adaptiveCategory) || q.tags.includes("profile")
  );
  return preferred[0] || unanswered[0];
}

function applyAnswer(question, option) {
  const delta = SCORE_BY_OPTION[option.code];
  const category = option.category;

  if (state.scores[category] !== undefined) {
    state.scores[category] += delta;
  }

  if (option.profile) {
    state.profile = { ...state.profile, ...option.profile };
  }

  state.answers.push({
    questionId: question.id,
    optionCode: option.code,
    optionText: option.text,
    category,
    scoreDelta: delta,
  });
}

function renderQuestion(question) {
  state.currentQuestion = question;
  state.selectedOptionCode = null;
  dom.quizNextBtn.disabled = true;

  const progress = Math.round((state.questionNumber / QUIZ_LENGTH) * 100);
  dom.quizProgressBar.style.width = `${progress}%`;
  dom.quizProgressText.textContent = `Question ${state.questionNumber + 1} of ${QUIZ_LENGTH}`;

  dom.quizQuestionCard.classList.add("fade");
  setTimeout(() => {
    dom.quizQuestionText.textContent = question.question;
    dom.quizOptions.innerHTML = "";

    question.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.dataset.code = option.code;
      btn.textContent = `${option.code}. ${option.text}`;
      btn.addEventListener("click", () => {
        dom.quizOptions.querySelectorAll(".quiz-option").forEach((el) => el.classList.remove("selected"));
        btn.classList.add("selected");
        state.selectedOptionCode = option.code;
        dom.quizNextBtn.disabled = false;
      });
      dom.quizOptions.appendChild(btn);
    });
    dom.quizQuestionCard.classList.remove("fade");
  }, 130);
}

function recommendationEngine() {
  const dominant = getDominantCategory(state.scores);
  const percentages = categoryPercentages(state.scores);
  const recommendedCourses = COURSE_MAP[dominant];

  const budgetTierMap = { High: "Tier 1", Medium: "Tier 2", Low: "Tier 3" };
  const profileTier = state.profile.tier === "Any" ? budgetTierMap[state.profile.budget] : state.profile.tier;

  const filtered = COLLEGE_DB
    .filter((c) => (state.profile.city === "Any" ? true : c.city === state.profile.city))
    .filter((c) => (profileTier === "Any" ? true : c.tier === profileTier))
    .filter((c) => c.categories.includes(dominant));

  const shortlist = (filtered.length ? filtered : COLLEGE_DB.filter((c) => c.categories.includes(dominant))).slice(0, 5);
  return { dominant, recommendedCourses, percentages, shortlist };
}

let categoryChartInstance = null;
function renderResults() {
  const result = recommendationEngine();
  dom.quizProgressBar.style.width = "100%";
  dom.quizProgressText.textContent = "Quiz completed";
  state.isCompleted = true;
  if (dom.quizNextBtn) {
    dom.quizNextBtn.disabled = false;
    dom.quizNextBtn.textContent = "Retake Quiz";
  }

  dom.recommendedCourseList.textContent = result.recommendedCourses.join(", ");
  dom.recommendedCollegeList.innerHTML = "";
  result.shortlist.forEach((college) => {
    const li = document.createElement("li");
    li.textContent = `${college.name} (${college.city}, ${college.tier})`;
    dom.recommendedCollegeList.appendChild(li);
  });

  if (categoryChartInstance) categoryChartInstance.destroy();
  if (window.Chart && dom.categoryChart) {
    categoryChartInstance = new Chart(dom.categoryChart, {
      type: "pie",
      data: {
        labels: CATEGORY_KEYS,
        datasets: [{
          data: CATEGORY_KEYS.map((k) => result.percentages[k]),
          backgroundColor: ["#1f4ecb", "#2f9e44", "#d9480f", "#9c36b5", "#0b7285"],
        }],
      },
      options: {
        plugins: { legend: { position: "bottom" } },
      },
    });
  }

  dom.quizResultCard.hidden = false;
}

function nextQuizStep() {
  if (state.isCompleted) {
    setupQuiz();
    return;
  }

  if (!state.currentQuestion || !state.selectedOptionCode) return;
  const selected = state.currentQuestion.options.find((o) => o.code === state.selectedOptionCode);
  if (!selected) return;

  applyAnswer(state.currentQuestion, selected);
  state.askedQuestionIds.add(state.currentQuestion.id);
  state.questionNumber += 1;

  if (state.questionNumber >= QUIZ_LENGTH) {
    renderResults();
    return;
  }

  const nextQuestion = pickNextQuestion();
  if (!nextQuestion) {
    renderResults();
    return;
  }
  renderQuestion(nextQuestion);
}

function resetQuizState() {
  state.answers = [];
  state.scores = { IT: 0, Business: 0, Medical: 0, Creative: 0, Engineering: 0 };
  state.profile = { budget: "Medium", city: "Any", tier: "Any" };
  state.askedQuestionIds = new Set();
  state.adaptiveCategory = null;
  state.currentQuestion = null;
  state.questionNumber = 0;
  state.selectedOptionCode = null;
  state.isCompleted = false;
}

function setupQuiz() {
  if (!dom.quizQuestionText || !dom.quizOptions || !dom.quizNextBtn) return;
  resetQuizState();
  dom.quizResultCard.hidden = true;
  dom.quizNextBtn.textContent = "Next Question";
  dom.quizNextBtn.disabled = true;
  const first = pickNextQuestion();
  if (first) renderQuestion(first);
}

function setupContactForm() {
  if (!dom.contactForm || !dom.formStatus) return;
  dom.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    dom.formStatus.textContent = "Thank you. Your message has been received.";
    dom.formStatus.style.color = "#1f7a2a";
    dom.contactForm.reset();
  });
}

function setupExploreColleges() {
  if (!dom.collegeSearchInput || !dom.cityFilterSelect || !dom.exploreGrid || !dom.searchEmptyState) return;

  let visibleCount = INITIAL_VISIBLE_COUNT;
  const exploreColleges = COLLEGE_DB;
  const imageCache = new Map();
  const fallbackImage = "assets/weguide-logo.png";

  const fetchCollegeImage = async (collegeName) => {
    if (imageCache.has(collegeName)) return imageCache.get(collegeName);
    const cleaned = collegeName.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
    const tryTitles = [cleaned, collegeName];
    for (const title of tryTitles) {
      try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
        if (!res.ok) continue;
        const data = await res.json();
        if (data.thumbnail?.source) {
          imageCache.set(collegeName, data.thumbnail.source);
          return data.thumbnail.source;
        }
      } catch (_err) {}
    }
    imageCache.set(collegeName, fallbackImage);
    return fallbackImage;
  };

  const createCollegeCard = (college) => {
    const card = document.createElement("article");
    card.className = "explore-card";
    
    // Conditionally render buttons based on the user's configuration in colleges.js
    let brochureHtml = "";
    if (college.brochure && college.brochure.trim() !== "") {
      brochureHtml = `<a class="explore-btn explore-btn-secondary" href="${college.brochure}" target="_blank" rel="noopener">Brochure</a>`;
    }
    
    let feeHtml = "";
    if (college.feeStructure && college.feeStructure.trim() !== "") {
      feeHtml = `<a class="explore-btn explore-btn-secondary" href="${college.feeStructure}" target="_blank" rel="noopener">Fee Structure</a>`;
    }

    card.innerHTML = `
      <img src="${fallbackImage}" alt="${college.name} campus" loading="lazy" />
      <div class="explore-body">
        <h4>${college.name}</h4>
        <p>${college.city}</p>
        <div class="explore-links">
          ${brochureHtml}
          ${feeHtml}
        </div>
      </div>
    `;
    const img = card.querySelector("img");
    if (img) fetchCollegeImage(college.name).then((src) => { img.src = src; });
    return card;
  };

  const getFiltered = () => {
    const query = dom.collegeSearchInput.value.trim().toLowerCase();
    const city = dom.cityFilterSelect.value;
    return exploreColleges.filter((c) => {
      const byQuery = !query || c.name.toLowerCase().includes(query) || c.city.toLowerCase().includes(query);
      const byCity = !city || c.city === city;
      return byQuery && byCity;
    });
  };

  const render = (items) => {
    dom.exploreGrid.innerHTML = "";
    items.slice(0, visibleCount).forEach((c) => dom.exploreGrid.appendChild(createCollegeCard(c)));
    dom.searchEmptyState.hidden = items.length !== 0;
    if (dom.showMoreBtn) dom.showMoreBtn.hidden = items.length <= visibleCount || items.length === 0;
  };

  const refresh = () => {
    visibleCount = INITIAL_VISIBLE_COUNT;
    render(getFiltered());
  };

  dom.collegeSearchInput.addEventListener("input", refresh);
  dom.cityFilterSelect.addEventListener("change", refresh);
  if (dom.showMoreBtn) {
    dom.showMoreBtn.addEventListener("click", () => {
      visibleCount += INITIAL_VISIBLE_COUNT;
      render(getFiltered());
    });
  }
  render(exploreColleges);
}

function bindQuizEvents() {
  if (dom.quizNextBtn) dom.quizNextBtn.addEventListener("click", nextQuizStep);
  if (dom.quizRestartBtn) dom.quizRestartBtn.addEventListener("click", setupQuiz);
}

setupContactForm();
setupExploreColleges();
bindQuizEvents();
setupQuiz();
