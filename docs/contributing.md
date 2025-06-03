# Contributing to AI Prompt Library

Thank you for your interest in contributing! This guide will help you add high-quality prompts to our library.

## 🎯 Contribution Guidelines

### What Makes a Good Prompt?

1. **Clear Purpose**: Specific use case and intended outcome
2. **Well-Structured**: Logical organization with clear sections
3. **Tested**: Verified to work with specified AI models
4. **Documented**: Includes usage guidance and examples
5. **Reusable**: Generic enough for others to adapt

### Quality Standards

- **Accuracy**: Prompts should produce reliable, useful results
- **Completeness**: Include all necessary context and parameters
- **Clarity**: Easy to understand and implement
- **Compatibility**: Work with commonly available AI models
- **Uniqueness**: Add value beyond existing prompts

## 📝 Prompt Format Standards

### File Organization
```
src/prompts/[category]/[prompt-type].md
```

### Required Sections
Each prompt should include:

```markdown
## Prompt Title

Brief description of what this prompt does.

```
[The actual prompt content]
```

**Use Case**: What this prompt is designed for
**Model Compatibility**: GPT-4, Claude, Gemini Pro (specify which work best)
**Best For**: Specific scenarios where this prompt excels
**Output**: Description of expected results (optional)

---
```

### Prompt Content Guidelines

1. **Clear Instructions**: Use imperative language ("Analyze", "Create", "Explain")
2. **Structured Format**: Use numbered lists, sections, and clear organization
3. **Placeholders**: Use `[brackets]` for user-customizable elements
4. **Context Setting**: Establish role and expertise level
5. **Output Specification**: Define desired format and style

### Example Format
```markdown
## Code Review Assistant

Provides comprehensive code review with security and performance analysis.

```
You are an experienced software engineer conducting a thorough code review. Please analyze the following code:

**Code to review:**
```[language]
[paste code here]
```

**Review focus:**
- [ ] Correctness and logic
- [ ] Security vulnerabilities  
- [ ] Performance optimization
- [ ] Best practices adherence
- [ ] Maintainability

Please provide:
1. Overall assessment summary
2. Specific line-by-line feedback
3. Security considerations
4. Performance recommendations
5. Refactoring suggestions

Use a constructive, educational tone and prioritize issues by severity.
```

**Use Case**: Comprehensive code review and improvement suggestions
**Model Compatibility**: GPT-4, Claude (works best with technical models)
**Best For**: Code quality improvement, learning best practices
**Output**: Detailed review with prioritized recommendations

---
```

## 🗂️ Category Guidelines

### Creative Prompts
- Focus on artistic, imaginative, and creative tasks
- Include storytelling, design, music, and visual arts
- Emphasize inspiration and creative exploration

### Technical Prompts  
- Programming, debugging, and development tasks
- System design and architecture
- Technical documentation and analysis

### General Prompts
- Everyday tasks and learning
- Research and information gathering
- Problem-solving and decision support

### Agentic Prompts
- Autonomous task completion
- Multi-step workflows and planning
- Goal-oriented behavior and decision-making

### Professional Prompts
- Business and workplace scenarios
- Communication and collaboration
- Project management and leadership

## 📋 Submission Process

### 1. Prepare Your Contribution

1. **Choose the right category** and prompt type
2. **Test your prompt** with at least 2 different AI models
3. **Document compatibility** and any model-specific notes
4. **Include examples** of effective usage

### 2. Format Check

- [ ] Follows markdown format standards
- [ ] Includes all required sections
- [ ] Uses consistent style and terminology
- [ ] Properly formatted code blocks and placeholders

### 3. Quality Review

- [ ] Prompt produces useful, consistent results
- [ ] Instructions are clear and unambiguous
- [ ] Appropriate for the target category
- [ ] Adds unique value to the library

### 4. Submit Your Contribution

1. **Fork** the repository
2. **Create a branch** for your contribution
3. **Add your prompts** to the appropriate files
4. **Test** that your prompts work as documented
5. **Submit a pull request** with description of changes

## ✅ Testing Your Prompts

### Required Testing
- Test with at least 2 AI models (GPT, Claude, or Gemini)
- Verify output quality and consistency
- Check that placeholders work correctly
- Ensure instructions are clear and complete

### Testing Checklist
- [ ] Prompt produces expected output type
- [ ] Instructions are clear and unambiguous
- [ ] Placeholders are properly marked
- [ ] Compatible with specified AI models
- [ ] Output quality meets standards

## 🚫 What Not to Submit

- **Duplicate prompts**: Check existing prompts first
- **Overly specific prompts**: Should be adaptable to similar use cases
- **Untested prompts**: All prompts must be verified to work
- **Incomplete prompts**: Missing required sections or documentation
- **Low-quality outputs**: Prompts that produce poor or inconsistent results

## 💡 Contribution Ideas

### High-Value Additions
- Prompts for emerging AI use cases
- Industry-specific professional prompts
- Advanced technical workflows
- Creative collaboration techniques
- Multi-step problem-solving processes

### Priority Areas
- Agentic prompts for complex tasks
- Professional prompts for specific industries
- Advanced technical prompts for specialized development
- Creative prompts for new artistic mediums

## 🔄 Review Process

1. **Initial Review**: Check format and completeness
2. **Quality Testing**: Verify prompt effectiveness
3. **Integration Review**: Ensure fits with existing library
4. **Documentation Review**: Confirm all sections are complete
5. **Final Approval**: Merge approved contributions

## 📞 Getting Help

- **Questions**: Open an issue for clarification
- **Discussions**: Use GitHub discussions for larger topics
- **Examples**: Check existing prompts for format guidance
- **Testing**: Ask for help testing with different models

## 🏆 Recognition

Contributors will be:
- Credited in the repository
- Listed in our contributors section
- Recognized for significant contributions

---

**Thank you for helping make AI more accessible and useful for everyone! 🚀**
