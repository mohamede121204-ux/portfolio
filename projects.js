/**
 * ==========================================================================
 * MOHAMED EBRAHIM MAHFOUZ - FEATURED PROJECTS DATA
 * ==========================================================================
 */

const projectsData = [
  {
    id: "01",
    category: "Compiler Design & Software Engineering",
    title: "EduScript — Custom Programming Language Compiler & Transpiler",
    shortDescription: "Designed and implemented a custom programming language compiler in Python, including a lexer, recursive-descent parser, and semantic analyzer with scoped type checking.",
    extendedHighlights: [
      "Built a source-to-source transpiler converting the AST into syntactically valid Python using the Visitor design pattern.",
      "Developed an interactive Streamlit IDE with live Tokens, AST, Semantic Analysis, and Generated Python views."
    ],
    technologies: ["Python", "Compiler Design", "AST", "Streamlit", "Visitor Pattern"],
    githubUrl: "https://github.com/mohamede121204-ux",
    demoUrl: null,
    badge: "Featured System"
  },
  {
    id: "02",
    category: "Machine Learning & Healthcare Analytics",
    title: "Heart Disease Prediction Pipeline",
    shortDescription: "Built an end-to-end machine learning pipeline in Python to predict heart disease from clinical data, achieving 90%+ accuracy.",
    extendedHighlights: [
      "Trained and compared five classification models: Logistic Regression, KNN, SVM, Naive Bayes, and Random Forest.",
      "Used GridSearchCV for hyperparameter tuning and performed exploratory data analysis using correlation heatmaps, feature distributions, and scatter plots."
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Machine Learning"],
    githubUrl: "https://github.com/mohamede121204-ux",
    demoUrl: null,
    badge: "90%+ Accuracy"
  },
  {
    id: "03",
    category: "Artificial Intelligence & Algorithms",
    title: "Tic-Tac-Toe AI Game",
    shortDescription: "Developed a desktop Tic-Tac-Toe game in Python with an unbeatable AI using the Minimax algorithm.",
    extendedHighlights: [
      "Implemented heuristic-based AI logic with Easy, Medium, and Hard difficulty levels, including complete win and draw detection."
    ],
    technologies: ["Python", "Tkinter", "Minimax Algorithm", "Artificial Intelligence"],
    githubUrl: "https://github.com/mohamede121204-ux",
    demoUrl: null,
    badge: "Unbeatable AI"
  }
];

// Function to render projects dynamically into the DOM
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = '';

  projectsData.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const techTagsHtml = project.technologies
      .map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
      .join('');

    const highlightsHtml = project.extendedHighlights
      .map(h => `<li class="project-highlight-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg><span>${escapeHtml(h)}</span></li>`)
      .join('');

    card.innerHTML = `
      <div class="project-meta-top">
        <div class="project-tags-group">
          <span class="project-index">Project ${project.id}</span>
          <span class="project-badge-pill">${escapeHtml(project.badge)}</span>
        </div>
        <span class="project-category-badge">${escapeHtml(project.category)}</span>
      </div>

      <h3 class="project-title">${escapeHtml(project.title)}</h3>
      <p class="project-desc">${escapeHtml(project.shortDescription)}</p>

      <ul class="project-highlights-list">
        ${highlightsHtml}
      </ul>

      <div class="project-tech-tags">
        ${techTagsHtml}
      </div>

      <div class="project-footer">
        <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-card-action" aria-label="View source code on GitHub for ${escapeHtml(project.title)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub Repository
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', renderProjects);
