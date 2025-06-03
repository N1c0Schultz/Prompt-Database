# General Developer Prompts

These prompts help developers with general coding tasks, utilities, and common development workflows.

## Create Utility Function

```
I need a utility function with the following specifications:

**Function purpose:**
[Describe what the function should do]

**Technical requirements:**
- Language: [JavaScript/Python/TypeScript/other]
- Input parameters: [describe expected inputs]
- Return value: [describe expected output]
- Error handling: [how to handle edge cases]
- Performance considerations: [any specific requirements]

**Usage context:**
- Where it will be used: [application context]
- Frequency of use: [how often it will be called]
- Integration needs: [how it fits with existing code]

**Please provide:**
1. **Main function implementation** with clear, readable code
2. **Input validation** and error handling
3. **JSDoc/docstring comments** explaining parameters and return values
4. **Unit test examples** showing how to test the function
5. **Usage examples** demonstrating different use cases
6. **Performance notes** if relevant

Make the code maintainable, well-documented, and following best practices for the chosen language.
```

**Use Case**: Creating reusable utility functions
**Output**: Complete function with tests and documentation
**Best For**: Code utilities, helper functions, shared libraries

---

## Refactor Legacy Code

```
I have legacy code that needs refactoring. Help me improve it while maintaining functionality:

**Current code:**
```[language]
[paste your legacy code here]
```

**Context:**
- Original purpose: [what the code was meant to do]
- Current issues: [performance, readability, maintainability problems]
- Language/framework: [current tech stack]
- Constraints: [what can/cannot be changed]

**Refactoring goals:**
- [ ] Improve readability and maintainability
- [ ] Enhance performance  
- [ ] Add error handling
- [ ] Follow modern best practices
- [ ] Add type safety (if applicable)
- [ ] Improve testing capabilities
- [ ] Other: [specify additional goals]

**Please provide:**
1. **Refactored code** with improvements highlighted
2. **Explanation of changes** made and why
3. **Before/after comparison** of key improvements
4. **Testing strategy** to ensure functionality is preserved
5. **Migration plan** if the changes are breaking
6. **Best practices** applied in the refactoring

Focus on making the code more maintainable while preserving existing functionality.
```

**Use Case**: Modernizing and improving existing code
**Output**: Refactored code with detailed explanation
**Best For**: Legacy code improvement, code modernization, technical debt reduction

---

## Generate Project Boilerplate

```
I need to set up a new project with the following requirements:

**Project type:**
[web app/mobile app/CLI tool/library/API/other]

**Technical stack:**
- Primary language: [JavaScript/Python/TypeScript/other]
- Framework: [React/Vue/Express/FastAPI/other]
- Database: [PostgreSQL/MongoDB/SQLite/none]
- Additional tools: [testing framework, linting, etc.]

**Project requirements:**
- Features: [list main features/capabilities needed]
- Scale: [small/medium/large project]
- Team size: [solo/small team/large team]
- Deployment target: [local/cloud/specific platform]

**Setup preferences:**
- Package manager: [npm/yarn/pip/other]
- Code style: [specific linting rules or style guides]
- Testing approach: [unit/integration/e2e testing preferences]
- Documentation needs: [API docs, README, etc.]

**Please provide:**
1. **Project structure** with organized directories
2. **Configuration files** (package.json, config files, etc.)
3. **Basic boilerplate code** for main components
4. **Development setup instructions** 
5. **Build and deployment scripts**
6. **Documentation templates** (README, contributing guidelines)
7. **Next steps** for development

Include best practices for the chosen tech stack and make it production-ready.
```

**Use Case**: Setting up new projects with proper structure
**Output**: Complete project boilerplate with setup instructions
**Best For**: Project initialization, development templates, best practices implementation