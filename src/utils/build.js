#!/usr/bin/env node

/**
 * AI Prompt Library Build Script
 * Validates the prompt library structure and content
 */

const fs = require('fs');
const path = require('path');

class PromptLibraryBuilder {
    constructor() {
        this.rootDir = path.join(__dirname, '../..');
        this.promptsDir = path.join(this.rootDir, 'src/prompts');
        this.errors = [];
        this.warnings = [];
        this.stats = {
            categories: 0,
            prompts: 0,
            totalLines: 0
        };
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString();
        const prefix = {
            info: '✅',
            warning: '⚠️',
            error: '❌',
            success: '🎉'
        }[type] || 'ℹ️';
        
        console.log(`${prefix} [${timestamp.split('T')[1].split('.')[0]}] ${message}`);
    }

    validateStructure() {
        this.log('Validating project structure...');
        
        // Check required directories
        const requiredDirs = [
            'src/prompts',
            'src/utils',
            'src/categories',
            'docs',
            'examples'
        ];

        for (const dir of requiredDirs) {
            const fullPath = path.join(this.rootDir, dir);
            if (!fs.existsSync(fullPath)) {
                this.errors.push(`Missing required directory: ${dir}`);
            }
        }

        // Check required files
        const requiredFiles = [
            'package.json',
            'README.md',
            'src/categories/index.json',
            'src/utils/search.js'
        ];

        for (const file of requiredFiles) {
            const fullPath = path.join(this.rootDir, file);
            if (!fs.existsSync(fullPath)) {
                this.errors.push(`Missing required file: ${file}`);
            }
        }

        this.log(`Structure validation complete - ${this.errors.length} errors found`);
    }

    validateCategories() {
        this.log('Validating categories...');
        
        const categoriesFile = path.join(this.rootDir, 'src/categories/index.json');
        if (!fs.existsSync(categoriesFile)) {
            this.errors.push('Categories index file not found');
            return;
        }

        const categories = JSON.parse(fs.readFileSync(categoriesFile, 'utf8'));
        
        for (const category of categories.categories) {
            const categoryDir = path.join(this.promptsDir, category.name);
            
            if (!fs.existsSync(categoryDir)) {
                this.errors.push(`Category directory not found: ${category.name}`);
                continue;
            }

            // Check for required prompt types
            const requiredTypes = ['system-prompts.md', 'developer-prompts.md', 'user-prompts.md'];
            
            for (const type of requiredTypes) {
                const promptFile = path.join(categoryDir, type);
                if (!fs.existsSync(promptFile)) {
                    this.errors.push(`Missing prompt file: ${category.name}/${type}`);
                } else {
                    this.stats.prompts++;
                    const content = fs.readFileSync(promptFile, 'utf8');
                    this.stats.totalLines += content.split('\n').length;
                }
            }

            this.stats.categories++;
        }

        this.log(`Categories validation complete - found ${this.stats.categories} categories`);
    }

    validatePrompts() {
        this.log('Validating prompt content...');
        
        const promptFiles = this.getAllPromptFiles();
        
        for (const file of promptFiles) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check for basic structure
            if (!content.includes('# ') && !content.includes('## ')) {
                this.warnings.push(`No headers found in: ${path.relative(this.rootDir, file)}`);
            }
            
            // Check for empty files
            if (content.trim().length < 100) {
                this.warnings.push(`Very short content in: ${path.relative(this.rootDir, file)}`);
            }
        }

        this.log(`Prompt validation complete - ${promptFiles.length} files checked`);
    }

    getAllPromptFiles() {
        const files = [];
        const categories = fs.readdirSync(this.promptsDir);
        
        for (const category of categories) {
            const categoryPath = path.join(this.promptsDir, category);
            if (fs.statSync(categoryPath).isDirectory()) {
                const promptFiles = fs.readdirSync(categoryPath)
                    .filter(file => file.endsWith('.md'))
                    .map(file => path.join(categoryPath, file));
                files.push(...promptFiles);
            }
        }
        
        return files;
    }

    generateReport() {
        this.log('Generating build report...');
        
        const report = {
            timestamp: new Date().toISOString(),
            stats: this.stats,
            errors: this.errors,
            warnings: this.warnings,
            status: this.errors.length === 0 ? 'SUCCESS' : 'FAILED'
        };

        this.log('Build report generated');
        return report;
    }

    build() {
        this.log('Starting AI Prompt Library build process...', 'info');
        
        try {
            this.validateStructure();
            this.validateCategories();
            this.validatePrompts();
            
            const report = this.generateReport();
            
            // Display summary
            console.log('\n📊 Build Summary:');
            console.log(`   Categories: ${this.stats.categories}`);
            console.log(`   Prompt files: ${this.stats.prompts}`);
            console.log(`   Total lines: ${this.stats.totalLines}`);
            console.log(`   Errors: ${this.errors.length}`);
            console.log(`   Warnings: ${this.warnings.length}`);
            
            if (this.errors.length > 0) {
                console.log('\n❌ Errors found:');
                this.errors.forEach(error => console.log(`   - ${error}`));
            }
            
            if (this.warnings.length > 0) {
                console.log('\n⚠️  Warnings:');
                this.warnings.forEach(warning => console.log(`   - ${warning}`));
            }
            
            if (this.errors.length === 0) {
                this.log('Build completed successfully! 🎉', 'success');
                return true;
            } else {
                this.log('Build failed with errors', 'error');
                return false;
            }
            
        } catch (error) {
            this.log(`Build failed with exception: ${error.message}`, 'error');
            return false;
        }
    }
}

// Run the build process
if (require.main === module) {
    const builder = new PromptLibraryBuilder();
    builder.build();
}

module.exports = PromptLibraryBuilder;
