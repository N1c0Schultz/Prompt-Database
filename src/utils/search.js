/**
 * Search utility for the AI Prompt Library
 * Helps users find relevant prompts based on keywords, categories, and types
 */

const fs = require('fs');
const path = require('path');

class PromptSearch {
  constructor() {
    this.categoriesPath = path.join(__dirname, '../categories/index.json');
    this.promptsPath = path.join(__dirname, '../prompts');
    this.categories = this.loadCategories();
  }

  loadCategories() {
    try {
      const categoriesData = fs.readFileSync(this.categoriesPath, 'utf8');
      return JSON.parse(categoriesData);
    } catch (error) {
      console.error('Error loading categories:', error);
      return { categories: [] };
    }
  }

  /**
   * Search for prompts by keyword across all categories and types
   * @param {string} keyword - Search term
   * @returns {Array} Matching prompts with category and type info
   */
  searchByKeyword(keyword) {
    const results = [];
    const searchTerm = keyword.toLowerCase();

    this.categories.categories.forEach(category => {
      category.promptTypes.forEach(promptType => {
        const filePath = path.join(this.promptsPath, category.name, promptType.file);
        
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (line.toLowerCase().includes(searchTerm)) {
              results.push({
                category: category.name,
                categoryTitle: category.title,
                promptType: promptType.type,
                file: promptType.file,
                line: index + 1,
                content: line.trim(),
                filePath: filePath
              });
            }
          });
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
        }
      });
    });

    return results;
  }

  /**
   * Get all prompts from a specific category
   * @param {string} categoryName - Category to search
   * @returns {Object} Category data with prompt types
   */
  getByCategory(categoryName) {
    return this.categories.categories.find(cat => 
      cat.name.toLowerCase() === categoryName.toLowerCase()
    );
  }

  /**
   * Get prompts by type across all categories
   * @param {string} promptType - Type: 'system', 'developer', or 'user'
   * @returns {Array} All prompts of the specified type
   */
  getByType(promptType) {
    const results = [];
    
    this.categories.categories.forEach(category => {
      const typeData = category.promptTypes.find(pt => pt.type === promptType);
      if (typeData) {
        results.push({
          category: category.name,
          categoryTitle: category.title,
          categoryIcon: category.icon,
          promptType: typeData,
          filePath: path.join(this.promptsPath, category.name, typeData.file)
        });
      }
    });

    return results;
  }

  /**
   * Get all available categories
   * @returns {Array} List of all categories
   */
  getAllCategories() {
    return this.categories.categories;
  }

  /**
   * Get library statistics
   * @returns {Object} Statistics about the prompt library
   */
  getStats() {
    const totalCategories = this.categories.categories.length;
    const totalPromptTypes = this.categories.categories.reduce((sum, cat) => 
      sum + cat.promptTypes.length, 0
    );

    let totalPrompts = 0;
    this.categories.categories.forEach(category => {
      category.promptTypes.forEach(promptType => {
        const filePath = path.join(this.promptsPath, category.name, promptType.file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          // Count prompt sections (lines starting with ##)
          const promptCount = (content.match(/^## /gm) || []).length;
          totalPrompts += promptCount;
        } catch (error) {
          // File doesn't exist or can't be read
        }
      });
    });

    return {
      totalCategories,
      totalPromptTypes,
      totalPrompts,
      lastUpdated: this.categories.metadata?.lastUpdated || 'Unknown'
    };
  }
}

// CLI interface for searching
if (require.main === module) {
  const search = new PromptSearch();
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('AI Prompt Library Search');
    console.log('Usage: node search.js <keyword>');
    console.log('       node search.js --stats');
    console.log('       node search.js --categories');
    process.exit(1);
  }

  if (args[0] === '--stats') {
    console.log('📊 Prompt Library Statistics:');
    console.log(search.getStats());
  } else if (args[0] === '--categories') {
    console.log('📂 Available Categories:');
    search.getAllCategories().forEach(cat => {
      console.log(`${cat.icon} ${cat.title} - ${cat.description}`);
    });
  } else {
    const keyword = args[0];
    console.log(`🔍 Searching for: "${keyword}"`);
    const results = search.searchByKeyword(keyword);
    
    if (results.length === 0) {
      console.log('No results found.');
    } else {
      console.log(`Found ${results.length} results:`);
      results.forEach(result => {
        console.log(`\n📁 ${result.categoryTitle} > ${result.promptType}`);
        console.log(`   Line ${result.line}: ${result.content}`);
        console.log(`   File: ${result.file}`);
      });
    }
  }
}

module.exports = PromptSearch;
