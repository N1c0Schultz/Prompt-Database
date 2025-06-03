# Contributing to AI Prompt Library

Thank you for your interest in contributing to the AI Prompt Library! This guide will help you set up the project, contribute content, and deploy to GitHub.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- Git installed and configured
- GitHub account (for deployment)

### Setup
```bash
# Clone or download the project
cd ai-prompt-library

# Install dependencies (if any)
npm install

# Validate the project structure
npm run build

# Search prompts (optional)
npm run search "your keyword"
```

## 📁 Project Structure

```
src/
├── prompts/           # All prompt content organized by category
│   ├── agentic/       # AI agent and automation prompts
│   ├── creative/      # Creative and artistic prompts
│   ├── general/       # General-purpose prompts
│   ├── professional/  # Business and workplace prompts
│   └── technical/     # Programming and technical prompts
├── categories/        # Category configuration
└── utils/            # Build and search utilities
docs/                 # Documentation
examples/             # Sample implementations
```

## ✍️ Contributing Content

### Adding New Prompts

1. **Choose the appropriate category** (agentic, creative, general, professional, technical)
2. **Select prompt type**:
   - `system-prompts.md` - Configure AI model behavior
   - `developer-prompts.md` - Development and coding assistance
   - `user-prompts.md` - End-user interaction templates

3. **Follow the format**:
```markdown
## Prompt Title

```
Your prompt content here...
```

**Use Case**: Brief description of when to use this prompt
**Model Compatibility**: GPT-4, Claude, Gemini Pro (as applicable)
**Best For**: Key use cases or scenarios
```

### Quality Guidelines

- **Clear and specific**: Prompts should have clear instructions
- **Well-tested**: Test prompts before submitting
- **Properly formatted**: Follow markdown conventions
- **Documented**: Include use cases and compatibility info
- **Organized**: Place in the correct category and file

### Validation

Before submitting changes:
```bash
# Run the build validation
npm run build

# Check for errors and warnings
# Fix any issues before proceeding
```

## 🚀 GitHub Deployment

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "+" → "New repository"
3. **Repository name**: `ai-prompt-library` (or your preference)
4. **Description**: "A comprehensive collection of high-quality AI prompts organized by category and use case"
5. **Visibility**: Public (recommended)
6. **Important**: Do NOT initialize with README/gitignore (we have them)
7. Click "Create repository"

### Step 2: Connect and Deploy

```bash
# Navigate to your project directory
cd ai-prompt-library

# Add GitHub as remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ai-prompt-library.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Deployment

- [ ] All files visible on GitHub
- [ ] README displays correctly on repository homepage
- [ ] Repository structure matches local project

### Step 4: Repository Enhancements (Optional)

#### Add Topics/Tags
Go to repository → gear icon next to "About" → add topics:
- `ai`, `prompts`, `chatgpt`, `claude`, `prompt-engineering`, `ai-tools`, `prompt-library`, `javascript`, `markdown`

#### GitHub Pages (Optional Website)
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, Folder: / (root)
4. Site available at: `https://YOUR_USERNAME.github.io/ai-prompt-library`

#### Community Files
Consider adding:
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- Issue templates
- Pull request templates

## 🔧 Development

### Available Scripts

- `npm run build` - Validate project structure and content
- `npm run search <keyword>` - Search prompts by keyword
- `npm test` - Run validation tests

### File Organization

- Keep prompt files focused and organized
- Use consistent formatting across all files
- Maintain the three-file structure per category
- Update `src/categories/index.json` when adding new categories

### Code Style

- Use clear, descriptive prompt titles
- Include proper metadata (use case, compatibility, best for)
- Format code blocks properly
- Use consistent markdown formatting

## 🤝 Contribution Workflow

1. **Fork** the repository (if contributing to existing project)
2. **Create** a feature branch: `git checkout -b add-new-prompts`
3. **Add** your prompts following the guidelines above
4. **Validate**: `npm run build`
5. **Commit**: `git commit -m "Add new creative writing prompts"`
6. **Push**: `git push origin add-new-prompts`
7. **Create** a pull request

## 📋 Deployment Checklist

### Pre-Deployment ✅
- [ ] Project structure complete
- [ ] All documentation written
- [ ] Build validation passes (0 errors, 0 warnings)
- [ ] Git repository initialized and committed
- [ ] Search functionality tested

### Deployment Steps
- [ ] GitHub repository created
- [ ] Local repository connected to GitHub
- [ ] Code pushed successfully
- [ ] Deployment verified

### Post-Deployment
- [ ] Repository topics/tags added
- [ ] Social preview configured
- [ ] Community files added (optional)
- [ ] GitHub Pages set up (optional)

## 🆘 Troubleshooting

### Common Issues

**Authentication errors**: 
- Use GitHub CLI: `gh auth login`
- Or create Personal Access Token in GitHub Settings

**Large file warnings**: 
- Normal for repositories with many text files
- Consider Git LFS for very large files

**Permission denied**: 
- Verify repository ownership
- Check GitHub username in URL

### Getting Help

- Check existing issues in the repository
- Review documentation in the `docs/` folder
- Search for similar prompts for formatting examples

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Recognition

Contributors will be recognized in the project. Quality contributions help build a valuable resource for the AI community!
